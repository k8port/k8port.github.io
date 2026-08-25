"use client";

import { useState, useRef, useEffect, useCallback } from "react";

/* ---------------------------------------------------------------------------
 * COMMANDS — pure data. Every value is a plain string or array of strings.
 * Nothing here is parsed, evaluated, or sent to a server. A lookup table with
 * a blinking cursor. Add commands by adding keys.
 * ------------------------------------------------------------------------- */

type Command = {
  hint: string;
  run: (args: string[]) => string[] | null;
};

/** [name, numeral, attribution, line] */
type Card = [string, string, string, string];

const ASCII = `
   ██  ██  ████
   ██ ██  ██  ██   k8port.io
   ████   ██  ██   design engineer
   ██ ██  ██  ██   dfw / remote
   ██  ██  ████
`;

const CARDS: Card[] = [
  ["The Fool", "0", "Aleph — Air", "The leap taken before the ground is proven."],
  ["The Magus", "I", "Beth — Mercury", "Will made legible. The tool is not the hand."],
  ["The Priestess", "II", "Gimel — Moon", "What is known before it can be said."],
  ["The Hermit", "IX", "Yod — Virgo", "The lamp is small on purpose."],
  ["The Tower", "XVI", "Peh — Mars", "The structure was load-bearing. It was also wrong."],
  ["The Star", "XVII", "Heh — Aquarius", "Pour it out. The vessel was never the point."],
];

const COMMANDS: Record<string, Command> = {
  help: {
    hint: "list available commands",
    run: () => [
      "AVAILABLE COMMANDS",
      "",
      ...Object.entries(COMMANDS).map(
        ([name, cmd]) => `  ${name.padEnd(12)}${cmd.hint}`
      ),
      "",
      "Tab completes. ↑/↓ walks history. Esc closes.",
    ],
  },

  whoami: {
    hint: "the short version",
    run: () => [
      "kate portalatin — k8",
      "",
      "design engineer. b.s. graphic design, m.s. computer science.",
      "ten years turning ambiguity into things that compile.",
      "",
      "currently: react, typescript, and the parts of a system",
      "nobody wrote down.",
    ],
  },

  ls: {
    hint: "list projects",
    run: () => [
      "drwxr-xr-x   sobres/           envelope budgeting — react, fastapi, sqlite",
      "drwxr-xr-x   colorology/       color relationship graph — python, neo4j",
      "drwxr-xr-x   stitch-companion/ cross-stitch generator — react, python",
      "drwxr-xr-x   k8port.io/        you are soaking in it",
      "",
      "try: cat <project>",
    ],
  },

  cat: {
    hint: "read a project file",
    run: (args: string[]) => {
      const files: Record<string, string[]> = {
        sobres: [
          "SOBRES — envelope budgeting",
          "",
          "0→1 fintech-adjacent app. PDF statement ingestion,",
          "transaction categorization, budgeting flows built around",
          "one question: where did it actually go?",
          "",
          "react · next.js · python · fastapi · sqlite · tdd",
        ],
        colorology: [
          "COLOROLOGY — color relationship graph",
          "",
          "Scraper and graph processor that finds the edges between",
          "colors, then draws what it found.",
          "",
          "python · graphql · neo4j",
        ],
        "stitch-companion": [
          "STITCH COMPANION — pattern generator",
          "",
          "Image processing for textured needlework. Turns a photo",
          "into a grid a human can actually follow.",
          "",
          "react · python · jupyter",
        ],
      };
      const key = (args[0] ?? "").replace(/\/$/, "").toLowerCase();
      if (!key) return ["cat: missing operand", "try: ls"];
      return files[key] ?? [`cat: ${key}: no such project`, "try: ls"];
    },
  },

  777: {
    hint: "draw a correspondence",
    run: () => {
      const rows: string[][] = [
        ["Col. II", "Hebrew", "Beth", "Mercury", "Yellow", "Mercury"],
        ["Col. IV", "Sphere", "Tiphareth", "Sol", "Gold", "Frankincense"],
        ["Col. VI", "Path", "Gimel", "Luna", "Silver", "Camphor"],
      ];
      const r = rows[Math.floor(Math.random() * rows.length)];
      return [
        "LIBER 777 — one row",
        "",
        `  scale       ${r[0]}`,
        `  register    ${r[1]}`,
        `  key         ${r[2]}`,
        `  planet      ${r[3]}`,
        `  color       ${r[4]}`,
        `  perfume     ${r[5]}`,
        "",
        "a correspondence is an edge, not a fact.",
      ];
    },
  },

  tarot: {
    hint: "draw one card",
    run: () => {
      const [name, num, attr, line] = CARDS[Math.floor(Math.random() * CARDS.length)];
      return [
        "",
        "  ┌────────────────────┐",
        "  │                    │",
        `  │   ${num.padEnd(17)}│`,
        "  │                    │",
        `  │   ${name.padEnd(17)}│`,
        "  │                    │",
        "  └────────────────────┘",
        "",
        `  ${attr}`,
        `  ${line}`,
        "",
      ];
    },
  },

  contact: {
    hint: "reach me",
    run: () => [
      "email      k8@k8port.io",
      "github     github.com/k8port",
      "linkedin   linkedin.com/in/kateportalatin",
    ],
  },

  ascii: {
    hint: "the logo",
    run: () => ASCII.split("\n"),
  },

  clear: {
    hint: "wipe the screen",
    run: () => null,
  },
};

const BANNER: string[] = [
  "k8port terminal — v1.0",
  "type 'help' for commands, 'exit' to close",
  "",
];

/* ------------------------------------------------------------------------- */

export default function Terminal() {
  const [open, setOpen] = useState<boolean>(false);
  const [lines, setLines] = useState<string[]>(BANNER);
  const [input, setInput] = useState<string>("");
  const [history, setHistory] = useState<string[]>([]);
  const [cursor, setCursor] = useState<number>(-1);

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Open on `~`, but never while the visitor is typing somewhere else.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = document.activeElement as HTMLElement | null;
      const typing =
        !!el &&
        (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable);
      if (e.key === "~" && !typing && !open) {
        e.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Focus on open; return focus to the trigger on close.
  useEffect(() => {
    if (open) inputRef.current?.focus();
    else triggerRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines, open]);

  const submit = useCallback(() => {
    const raw = input.trim();
    setInput("");

    if (!raw) {
      setLines((l) => [...l, "> "]);
      return;
    }

    setHistory((h) => [raw, ...h]);
    setCursor(-1);

    const [name, ...args] = raw.split(/\s+/);
    const key = name.toLowerCase();

    if (key === "exit") {
      setOpen(false);
      return;
    }

    const cmd = COMMANDS[key];
    if (!cmd) {
      // The visitor's own text goes back out as a text node. Never as markup.
      setLines((l) => [...l, `> ${raw}`, `command not found: ${name}`, "try: help", ""]);
      return;
    }

    const out = cmd.run(args);
    if (out === null) {
      setLines(BANNER);
      return;
    }
    setLines((l) => [...l, `> ${raw}`, ...out, ""]);
  }, [input]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      submit();
    } else if (e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const next = Math.min(cursor + 1, history.length - 1);
      if (next >= 0) {
        setCursor(next);
        setInput(history[next]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = cursor - 1;
      setCursor(next);
      setInput(next < 0 ? "" : history[next]);
    } else if (e.key === "Tab") {
      e.preventDefault();
      const partial = input.trim().toLowerCase();
      if (!partial) return;
      const match = Object.keys(COMMANDS).find((c) => c.startsWith(partial));
      if (match) setInput(match);
    }
  };

  if (!open) {
    return (
      <button
        ref={triggerRef}
        onClick={() => setOpen(true)}
        className="font-mono text-xs text-bluegrays-templetongray underline decoration-dotted underline-offset-4 transition-colors hover:text-blueblues-intel-blue focus:outline-none focus-visible:ring-2 focus-visible:ring-blueblues-intel-blue focus-visible:ring-offset-2"
      >
        press ~ for a terminal
      </button>
    );
  }

  return (
    <div
      className="overflow-hidden rounded-lg border border-bluegrays-silverchalice bg-bluegrays-richgray shadow-2xl"
      onClick={() => inputRef.current?.focus()}
    >
      {/* chrome */}
      <div className="flex items-center gap-2 border-b border-bluegrays-silverchalice px-4 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-bluegrays-templetongray" />
        <span className="h-2.5 w-2.5 rounded-full bg-bluegrays-templetongray" />
        <span className="h-2.5 w-2.5 rounded-full bg-bluegrays-templetongray" />
        <span className="ml-2 font-mono text-xs text-bluegrays-templetongray">
          k8@k8port — zsh
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setOpen(false);
          }}
          className="ml-auto font-mono text-xs text-bluegrays-templetongray hover:text-redwhites-platinum focus:outline-none focus-visible:ring-2 focus-visible:ring-blueblues-intel-blue"
          aria-label="Close terminal"
        >
          ✕
        </button>
      </div>

      {/* screen */}
      <div
        ref={scrollRef}
        className="h-80 overflow-y-auto px-4 py-3"
        role="log"
        aria-live="polite"
        aria-label="Terminal output"
      >
        <pre className="whitespace-pre-wrap break-words font-mono text-[13px] leading-relaxed text-redwhites-platinum">
          {lines.join("\n")}
        </pre>

        <div className="mt-1 flex items-center font-mono text-[13px]">
          <span className="mr-2 text-blueblues-intel-blue" aria-hidden="true">
            &gt;
          </span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            spellCheck={false}
            autoComplete="off"
            aria-label="Terminal input. Type help for commands, exit to close."
            className="flex-1 bg-transparent text-redwhites-platinum caret-blueblues-intel-blue outline-none"
          />
        </div>
      </div>
    </div>
  );
}