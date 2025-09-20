// CommonJS syntax ka upyog karke zaroori libraries import karein
const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
// .env file se environment variables load karne ke liye 'dotenv' ko configure karein
require('dotenv').config();

// Express app ko initialize karein
const app = express();
const PORT = 3001;

// --- Zaroori Check: API Key ko check karein ---
if (!process.env.API_KEY) {
  console.error('\x1b[31m%s\x1b[0m', 'FATAL ERROR: API_KEY .env file mein nahin mil rahi hai.');
  process.exit(1);
}

// Middleware ka upyog karein
app.use(cors());
app.use(express.json());

// Google Generative AI client ko initialize karein
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// API endpoint banayein jo code generate karega
app.post('/api/generate', async (req, res) => {
  console.log('Received /api/generate request...');
  try {
    const { prompt, type } = req.body;

    if (!prompt || !type) {
      return res.status(400).json({ error: 'Prompt and type are required.' });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // --- Sakht aur Sudhare Hue Prompts ---
    const finalPrompt = type === 'frontend'
      ? `You are an expert React developer. Generate a single, self-contained React functional component using JSX and Tailwind CSS based on the user's request: "${prompt}". IMPORTANT RULES: 1. You MUST return only the raw JSX elements for the component's body, without the 'export default...' or function definition. 2. You MUST NOT include any 'import' or 'require' statements. 3. All styling must be done with Tailwind CSS classes. 4. Do not include any surrounding text, explanations, markdown code fences, or comments.`
      : `Create a Node.js and Express API based on this user request: "${prompt}". Return only the raw JavaScript code. No explanations.`;

    console.log('Sending prompt to AI...');
    const result = await model.generateContent(finalPrompt);
    const response = await result.response;
    let code = response.text();
    
    // --- ANTIM FIX: Frontend code se galti se aaye require() statements ko hatayein ---
    if (type === 'frontend') {
      // Yeh naya, behtar filter hai jo har tarah ke require() ko hata dega
      code = code.replace(/.*require\(.*\).*\n?/g, '').trim();
    }
    
    console.log('Successfully received and cleaned code from AI.');
    res.json({ code });

  } catch (error) {
    // --- Sabse Zaroori Error Logging ---
    console.error('\x1b[31m%s\x1b[0m', '---!!! BACKEND CRASH: AI GENERATION FAILED !!!---');
    console.error('ERROR DETAILS:', error);
    console.error('\x1b[31m%s\x1b[0m', '-------------------------------------------------');
    res.status(500).json({ error: "Failed to generate code. Check backend logs." });
  }
});

// Server ko start karein
app.listen(PORT, () => {
  console.log(`✅ Server is listening on http://localhost:${PORT}`);
});
