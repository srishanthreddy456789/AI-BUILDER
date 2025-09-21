import React, { useRef, useEffect } from 'react';

function Preview({ htmlContent }) {
  const iframeRef = useRef(null);

  useEffect(() => {
    if (iframeRef.current && htmlContent) {
      const iframe = iframeRef.current;
      const doc = iframe.contentDocument || iframe.contentWindow.document;

      // Clear previous content and write new HTML
      doc.open();
      doc.write(htmlContent);
      doc.close();
    }
  }, [htmlContent]);

  return (
    // Removed outer card styling here, assuming UIGenerator wraps it
    <>
      <div className="p-4 border-b border-gray-700">
        <h3 className="text-xl font-semibold text-gray-200">Live Preview</h3>
      </div>
      <div className="p-4 bg-white/5"> {/* Subtle translucent background for the iframe container */}
        <div className="relative w-full aspect-video bg-gray-900 rounded-md overflow-hidden ring-1 ring-gray-700">
          <iframe
            ref={iframeRef}
            title="Live Preview"
            sandbox="allow-scripts allow-same-origin"
            className="w-full h-full border-0" // Ensure no default iframe border
            srcDoc={htmlContent} // Keep srcDoc as a fallback, but useEffect is primary for dynamic updates
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Preview;

