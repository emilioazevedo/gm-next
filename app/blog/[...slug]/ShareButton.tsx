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
  strokeLinecap="round"
  strokeLinejoin="round"
>
  {/* Three connection points for sharing */}
  <circle cx="18" cy="5" r="3" />
  <circle cx="6" cy="12" r="3" />
  <circle cx="18" cy="19" r="3" />
  
  {/* Connection lines */}
  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
</svg>
    </button>
  );
}
