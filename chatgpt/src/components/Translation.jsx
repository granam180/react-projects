import React from "react";

export default function Translation({ doStuff, setInput, result }) {
  const handleReset = () => {
    window.location.reload();
  };

  return (
    <div>
      <textarea
        className="text-area"
        placeholder="if you're having issues with your search, please refresh the page and click on the title to check the docs specific to the chat model..."
        cols={55}
        rows={10}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <div>
        <button className="action-btn" onClick={doStuff}>
          DO YOUR STUFF!
        </button>
        <button className="action-btn" onClick={handleReset}>
          RESET
        </button>
      </div>

      <h3 className="result-text" style={{ overflow: "scroll" }}>
        {result.length > 0 ? result : ""}
      </h3>
    </div>
  );
}
