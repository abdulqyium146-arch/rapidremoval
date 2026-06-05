import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: "linear-gradient(145deg, #1E293B 0%, #0F172A 60%, #0C1628 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          position: "relative",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
        }}
      >
        {/* Subtle grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)",
            backgroundSize: "16px 16px",
          }}
        />

        {/* Blue glow */}
        <div
          style={{
            position: "absolute",
            top: 10,
            left: "50%",
            transform: "translateX(-50%)",
            width: 120,
            height: 120,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)",
          }}
        />

        {/* Truck container */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            marginBottom: 14,
            position: "relative",
          }}
        >
          {/* Cargo body */}
          <div
            style={{
              width: 88,
              height: 52,
              borderRadius: "6px 6px 0 0",
              background: "linear-gradient(180deg, #3B82F6 0%, #2563EB 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {/* Cargo stripe */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 4,
                borderRadius: "6px 6px 0 0",
                background: "rgba(255,255,255,0.2)",
              }}
            />
            {/* GR label */}
            <div
              style={{
                display: "flex",
                fontSize: 28,
                fontWeight: 900,
                letterSpacing: -1,
                lineHeight: 1,
              }}
            >
              <span style={{ color: "#BAE6FD" }}>G</span>
              <span style={{ color: "#FFFFFF" }}>R</span>
            </div>
          </div>

          {/* Cab */}
          <div
            style={{
              width: 34,
              height: 38,
              borderRadius: "0 6px 0 0",
              background: "linear-gradient(180deg, #38BDF8 0%, #0EA5E9 100%)",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: 7,
            }}
          >
            {/* Windscreen */}
            <div
              style={{
                width: 22,
                height: 14,
                borderRadius: 3,
                background: "rgba(224,242,254,0.55)",
              }}
            />
          </div>
        </div>

        {/* Chassis bar */}
        <div
          style={{
            width: 124,
            height: 5,
            borderRadius: 2,
            background: "#334155",
            marginBottom: 0,
            position: "relative",
          }}
        />

        {/* Wheels row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: 114,
            marginTop: -2,
            marginBottom: 12,
            position: "relative",
          }}
        >
          {/* Left wheel */}
          <div
            style={{
              width: 26,
              height: 26,
              borderRadius: "50%",
              background: "#1E293B",
              border: "3px solid #64748B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "#475569",
              }}
            />
          </div>
          {/* Right wheel */}
          <div
            style={{
              width: 26,
              height: 26,
              borderRadius: "50%",
              background: "#1E293B",
              border: "3px solid #64748B",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "#475569",
              }}
            />
          </div>
        </div>

        {/* Brand name */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1,
            position: "relative",
          }}
        >
          <div
            style={{
              color: "#FFFFFF",
              fontSize: 14,
              fontWeight: 800,
              letterSpacing: 1.5,
              textTransform: "uppercase",
              lineHeight: 1,
            }}
          >
            GET RAPID
          </div>
          <div
            style={{
              color: "#38BDF8",
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: "uppercase",
              lineHeight: 1,
            }}
          >
            REMOVALS
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
