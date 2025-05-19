"use client";
import React from "react";

export default function ShareButton({ title }: { title: string }) {
  return (
    <button
      type="button"
      aria-label="Copy link"
      className="ml-3 p-1 rounded hover:bg-gray-100 transition"
      onClick={() => {
        if (typeof window !== "undefined") {
          navigator.clipboard.writeText(window.location.href);
          alert("Link copied to clipboard!");
        }
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="inline-block w-4 h-4 text-gray-400 hover:text-[#194f90]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 8a3 3 0 10-6 0v8a3 3 0 106 0V8z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8V4m0 0l-3 3m3-3l3 3" />
      </svg>
    </button>
  );
}
