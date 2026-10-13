"use client";

import { useState } from "react";
import { verifyCode } from "./actions";

export default function PswPage() {
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);

  async function handleSubmit() {
    const success = await verifyCode(code);

    if (success) {
      window.location.href = "/viewtt";
    } else {
      setError(true);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <input
        type="password"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="border p-2 rounded"
      />

      <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 rounded">
        Submit
      </button>

      {error && <p>Incorrect code.</p>}
    </div>
  );
}