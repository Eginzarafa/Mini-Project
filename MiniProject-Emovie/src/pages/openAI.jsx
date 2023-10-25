import { useState } from "react";
import OpenAI from "openai";

function OpenAi() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (prompt.length === 0) {
      alert("Please enter a prompt.");
      return;
    }

    setLoading(true);

    try {
      const openai = new OpenAI({
        apiKey: import.meta.env.VITE_OPENAI_API_KEY,
        dangerouslyAllowBrowser: true,
      });

      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: prompt },
        ],
      });

      setResult(response.choices[0].message.content);
    } catch (error) {
      console.error("An error occurred:", error);
    }

    setLoading(false);
  };

  const handleClear = () => {
    setPrompt("");
    setResult("");
  };

  return (
    <main className="bg-gradient-to-b from-blue-500 to-blue-700 min-h-screen flex justify-center items-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">
          Chat with GPT-3.5
        </h1>
        <div className="mb-4">
          <button
            onClick={handleClear}
            className="p-2 bg-red-500 text-white rounded-lg cursor-pointer hover:bg-red-600"
          >
            Clear
          </button>
        </div>
        <div className="mb-4">
          <div className="p-3 border border-gray-300 rounded-lg">
            <div className="flex mb-2">
              <span className="text-gray-500">You:</span>
            </div>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Send a message..."
              className="w-full resize-none outline-none"
              style={{ minHeight: "50px" }}
            ></textarea>
          </div>
        </div>
        <button
          onClick={handleGenerate}
          disabled={loading}
          className="p-3 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600"
        >
          {loading ? "Generating..." : "Generate"}
        </button>
        {result && (
          <div className="mt-4">
            <div className="p-4 border border-gray-300 rounded-lg bg-gray-100">
              <div className="flex mb-2">
                <span className="text-gray-500">GPT:</span>
              </div>
              <pre className="text-sm whitespace-pre-wrap">{result}</pre>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default OpenAi;
