"use client";

import { useEffect, useRef, useState } from "react";

// ─── Configuration ────────────────────────────────────────────────────────────
// Replace this with your actual WhatsApp number (with country code, digits only)
const WHATSAPP_NUMBER = "919131128124"; // TODO: update with real number
const WHATSAPP_DEFAULT_MSG = "Hello, I would like to inquire about your Bike rental services."; // Default message when user clicks send without typing
const TYPING_TEXT = "Hello, How can I assist you?";
// ─────────────────────────────────────────────────────────────────────────────

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [userMsg, setUserMsg] = useState(WHATSAPP_DEFAULT_MSG);
  const indexRef = useRef(0);

  // ── Typing animation (runs once on mount) ──────────────────────────────────
  // ── Typing animation (runs once on mount) ──────────────────────────────────
// REPLACE with this:
useEffect(() => {
    let cancelled = false;
    indexRef.current = 0;
    setDisplayedText("");

    const typeNext = () => {
      if (cancelled) return;
      if (indexRef.current < TYPING_TEXT.length) {
        const char = TYPING_TEXT.charAt(indexRef.current);
        indexRef.current++;
        setDisplayedText((prev) => prev + char);
        setTimeout(typeNext, 60);
      }
    };

    setTimeout(typeNext, 60);
    return () => { cancelled = true; };
  }, []);

  // ── Open WhatsApp with message ─────────────────────────────────────────────
  const handleSend = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(userMsg)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      {/* ── Inline styles (minimal, scoped) ─────────────────────────────── */}
      <style>{`
        /* Floating WhatsApp button */
        .wsp-whatsapp {
          position: fixed;
          width: 60px;
          height: 60px;
          bottom: 40px;
          right: 40px;
          color: #fff;
          border-radius: 50%;
          box-shadow: 2px 2px 10px rgba(0,0,0,0.3);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          background: none;
          border: none;
          padding: 0;
        }
        .wsp-whatsapp svg {
          width: 60px;
          height: 60px;
          display: block;
        }

        /* Chat box */
        .wsp-chatbox {
          position: fixed;
          bottom: 110px;
          right: 40px;
          width: 320px;
          background: #e5ddd5;
          border-radius: 12px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.3);
          overflow: hidden;
          transform: scale(0);
          transform-origin: bottom right;
          transition: all 0.25s ease;
          z-index: 999;
          font-family: Arial, sans-serif;
        }
        .wsp-chatbox.active {
          transform: scale(1);
        }

        /* Header */
        .wsp-header {
          background: #075E54;
          color: #fff;
          padding: 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-weight: 600;
        }
        .wsp-header button {
          background: none;
          border: none;
          color: #fff;
          font-size: 22px;
          cursor: pointer;
        }

        /* Body */
        .wsp-body {
          padding: 12px;
          background: #efeae2;
        }
        .wsp-message {
          max-width: 80%;
          padding: 8px 10px;
          border-radius: 8px;
          font-size: 14px;
          margin-bottom: 8px;
          background: #fff;
        }

        /* Blinking cursor on typing text */
        .wsp-typing::after {
          content: "|";
          margin-left: 2px;
          animation: wspBlink 1s infinite;
        }
        @keyframes wspBlink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75%       { opacity: 0; }
        }

        /* Footer */
        .wsp-footer {
          display: flex;
          align-items: center;
          padding: 8px;
          background: #f0f0f0;
        }
        .wsp-footer input {
          flex: 1;
          border: none;
          border-radius: 20px;
          padding: 8px 12px;
          font-size: 14px;
          outline: none;
        }
        .wsp-footer button {
          background: #25D366;
          border: none;
          color: #fff;
          border-radius: 50%;
          width: 36px;
          height: 36px;
          margin-left: 8px;
          cursor: pointer;
          font-size: 16px;
        }

        /* Mobile */
        @media (max-width: 768px) {
          .wsp-whatsapp {
            width: 50px;
            height: 50px;
            bottom: 20px;
            right: 20px;
          }
          .wsp-chatbox {
            width: 90%;
            right: 5%;
            bottom: 90px;
          }
        }
      `}</style>

      {/* ── Floating WhatsApp Button ─────────────────────────────────────── */}
      <button
        className="wsp-whatsapp"
        id="wspToggle"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Chat on WhatsApp"
      >
        {/* Original WhatsApp SVG logo (same as Liquid source) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="-93.2412 -156.2325 808.0904 937.395"
        >
          <defs>
            <linearGradient x1=".5" y1="0" x2=".5" y2="1" id="wsp-a">
              <stop stopColor="#20B038" offset="0%" />
              <stop stopColor="#60D66A" offset="100%" />
            </linearGradient>
            <linearGradient x1=".5" y1="0" x2=".5" y2="1" id="wsp-b">
              <stop stopColor="#F9F9F9" offset="0%" />
              <stop stopColor="#FFF" offset="100%" />
            </linearGradient>
            <linearGradient
              xlinkHref="#wsp-a"
              id="wsp-f"
              x1="270.265" y1="1.184" x2="270.265" y2="541.56"
              gradientTransform="scale(.99775 1.00225)"
              gradientUnits="userSpaceOnUse"
            />
            <linearGradient
              xlinkHref="#wsp-b"
              id="wsp-g"
              x1="279.952" y1=".811" x2="279.952" y2="560.571"
              gradientTransform="scale(.99777 1.00224)"
              gradientUnits="userSpaceOnUse"
            />
            <filter x="-.056" y="-.062" width="1.112" height="1.11" filterUnits="objectBoundingBox" id="wsp-c">
              <feGaussianBlur stdDeviation="2" in="SourceGraphic" />
            </filter>
            <filter x="-.082" y="-.088" width="1.164" height="1.162" filterUnits="objectBoundingBox" id="wsp-d">
              <feOffset dy="-4" in="SourceAlpha" result="shadowOffsetOuter1" />
              <feGaussianBlur stdDeviation="12.5" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
              <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1" />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.21 0" in="shadowBlurOuter1" />
            </filter>
            <path
              d="M576.337 707.516c-.018-49.17 12.795-97.167 37.15-139.475L574 423.48l147.548 38.792c40.652-22.23 86.423-33.944 133.002-33.962h.12c153.395 0 278.265 125.166 278.33 278.98.025 74.548-28.9 144.642-81.446 197.373C999 957.393 929.12 986.447 854.67 986.48c-153.42 0-278.272-125.146-278.333-278.964z"
              id="wsp-e"
            />
          </defs>
          <g fill="none" fillRule="evenodd">
            <g transform="matrix(1 0 0 -1 -542.696 1013.504)" fill="#000" fillRule="nonzero" filter="url(#wsp-c)">
              <use filter="url(#wsp-d)" xlinkHref="#wsp-e" width="100%" height="100%" />
              <use fillOpacity=".2" xlinkHref="#wsp-e" width="100%" height="100%" />
            </g>
            <path
              transform="matrix(1 0 0 -1 41.304 577.504)"
              fillRule="nonzero"
              fill="url(#wsp-f)"
              d="M2.325 274.421c-.014-47.29 12.342-93.466 35.839-134.166L.077 1.187l142.314 37.316C181.6 17.133 225.745 5.856 270.673 5.84h.12c147.95 0 268.386 120.396 268.447 268.372.03 71.707-27.87 139.132-78.559 189.858-50.68 50.726-118.084 78.676-189.898 78.708-147.968 0-268.398-120.386-268.458-268.358"
            />
            <path
              transform="matrix(1 0 0 -1 31.637 586.837)"
              fillRule="nonzero"
              fill="url(#wsp-g)"
              d="M2.407 283.847c-.018-48.996 12.784-96.824 37.117-138.983L.072.814l147.419 38.654c40.616-22.15 86.346-33.824 132.885-33.841h.12c153.26 0 278.02 124.724 278.085 277.994.026 74.286-28.874 144.132-81.374 196.678-52.507 52.544-122.326 81.494-196.711 81.528-153.285 0-278.028-124.704-278.09-277.98zm87.789-131.724l-5.503 8.74C61.555 197.653 49.34 240.17 49.36 283.828c.049 127.399 103.73 231.044 231.224 231.044 61.74-.025 119.765-24.09 163.409-67.763 43.639-43.67 67.653-101.726 67.635-163.469-.054-127.403-103.739-231.063-231.131-231.063h-.09c-41.482.022-82.162 11.159-117.642 32.214l-8.444 5.004L66.84 66.86z"
            />
            <path
              d="M242.63 186.78c-5.205-11.57-10.684-11.803-15.636-12.006-4.05-.173-8.687-.162-13.316-.162-4.632 0-12.161 1.74-18.527 8.693-6.37 6.953-24.322 23.761-24.322 57.947 0 34.19 24.901 67.222 28.372 71.862 3.474 4.634 48.07 77.028 118.694 104.88 58.696 23.146 70.64 18.542 83.38 17.384 12.74-1.158 41.11-16.805 46.9-33.03 5.791-16.223 5.791-30.128 4.054-33.035-1.738-2.896-6.37-4.633-13.319-8.108-6.95-3.475-41.11-20.287-47.48-22.603-6.37-2.316-11.003-3.474-15.635 3.482-4.633 6.95-17.94 22.596-21.996 27.23-4.053 4.643-8.106 5.222-15.056 1.747-6.949-3.485-29.328-10.815-55.876-34.485-20.656-18.416-34.6-41.16-38.656-48.116-4.053-6.95-.433-10.714 3.052-14.178 3.12-3.113 6.95-8.11 10.424-12.168 3.467-4.057 4.626-6.953 6.942-11.586 2.316-4.64 1.158-8.698-.579-12.172-1.737-3.475-15.241-37.838-21.42-51.576"
              fill="#FFF"
            />
          </g>
        </svg>
      </button>

      {/* ── Chat Box ─────────────────────────────────────────────────────── */}
      <div className={`wsp-chatbox${isOpen ? " active" : ""}`} id="wspChatbox">

        {/* Header */}
        <div className="wsp-header">
          <span>WhatsApp</span>
          <button onClick={() => setIsOpen(false)} aria-label="Close chat">×</button>
        </div>

        {/* Body — typing animation bubble */}
        <div className="wsp-body">
          <div className="wsp-message">
            <span className="wsp-typing">{displayedText}</span>
          </div>
        </div>

        {/* Footer — pre-filled input + send button */}
        <div className="wsp-footer">
          <input
            type="text"
            id="wspUserMsg"
            value={userMsg}
            onChange={(e) => setUserMsg(e.target.value)}
            placeholder="Type a message"
          />
          <button onClick={handleSend} aria-label="Send message">➤</button>
        </div>
      </div>
    </>
  );
};

export default WhatsAppButton;