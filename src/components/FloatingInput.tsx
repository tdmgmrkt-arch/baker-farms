"use client";

import { useState, useId } from "react";

interface FloatingInputProps {
  label: string;
  type?: string;
  className?: string;
}

export function FloatingInput({
  label,
  type = "text",
  className = "",
}: FloatingInputProps) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const id = useId();
  const active = focused || value.length > 0;

  return (
    <div className={`relative ${className}`}>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="peer w-full bg-white/6 backdrop-blur-lg border border-white/12 rounded-xl px-4 pt-6 pb-2 text-white text-sm focus:outline-none focus:border-golden/50 focus:bg-white/10 transition-all placeholder:text-transparent"
      />
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
          active
            ? "top-1.5 text-[10px] text-golden-light/80 tracking-wider uppercase font-medium"
            : "top-1/2 -translate-y-1/2 text-sm text-white/40"
        }`}
      >
        {label}
      </label>
    </div>
  );
}

export function FloatingTextarea({
  label,
  rows = 4,
  className = "",
}: {
  label: string;
  rows?: number;
  className?: string;
}) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const id = useId();
  const active = focused || value.length > 0;

  return (
    <div className={`relative ${className}`}>
      <textarea
        id={id}
        rows={rows}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="peer w-full bg-white/6 backdrop-blur-lg border border-white/12 rounded-xl px-4 pt-6 pb-2 text-white text-sm focus:outline-none focus:border-golden/50 focus:bg-white/10 transition-all resize-none"
      />
      <label
        htmlFor={id}
        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
          active
            ? "top-1.5 text-[10px] text-golden-light/80 tracking-wider uppercase font-medium"
            : "top-4 text-sm text-white/40"
        }`}
      >
        {label}
      </label>
    </div>
  );
}

export function FloatingSelect({
  label,
  options,
  className = "",
}: {
  label: string;
  options: { value: string; label: string }[];
  className?: string;
}) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const id = useId();
  const active = focused || value.length > 0;

  return (
    <div className={`relative ${className}`}>
      <select
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="peer w-full bg-white/6 backdrop-blur-lg border border-white/12 rounded-xl px-4 pt-6 pb-2 text-white text-sm focus:outline-none focus:border-golden/50 focus:bg-white/10 transition-all appearance-none cursor-pointer"
      >
        <option value="" className="bg-barn-red-dark text-white">
          Select...
        </option>
        {options.map((opt) => (
          <option
            key={opt.value}
            value={opt.value}
            className="bg-barn-red-dark text-white"
          >
            {opt.label}
          </option>
        ))}
      </select>
      <label
        htmlFor={id}
        className="absolute left-4 top-1.5 text-[10px] text-golden-light tracking-wider uppercase font-medium transition-all duration-200 pointer-events-none"
      >
        {label}
      </label>
      {/* Chevron */}
      <svg
        className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 pointer-events-none"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  );
}
