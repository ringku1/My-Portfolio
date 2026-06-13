import { ImageResponse } from "next/og";
import { profile } from "@/data/content";

export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0a0f",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(99,102,241,0.35), transparent 45%), radial-gradient(circle at 85% 80%, rgba(139,92,246,0.30), transparent 45%)",
          color: "#f3f4f8",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 30,
            color: "#a5b4fc",
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          {profile.location}
        </div>
        <div
          style={{
            fontSize: 84,
            fontWeight: 700,
            marginTop: 24,
            lineHeight: 1.05,
          }}
        >
          {profile.name}
        </div>
        <div
          style={{
            fontSize: 44,
            fontWeight: 600,
            marginTop: 12,
            background: "linear-gradient(135deg, #818cf8, #a78bfa)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {profile.title}
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#9aa1b1",
            marginTop: 28,
            maxWidth: 900,
          }}
        >
          React · Next.js · AdonisJS · Competitive Programming
        </div>
      </div>
    ),
    { ...size },
  );
}
