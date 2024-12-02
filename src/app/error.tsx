"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("An error occurred:", error);
  }, [error]);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Something went wrong!</h1>
      <p>{error.message}</p>
      <button
        onClick={() => reset()}
        style={{ padding: "10px 20px", marginTop: "10px" }}
      >
        Try Again
      </button>
    </div>
  );
}
