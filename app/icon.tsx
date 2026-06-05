import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 7,
          background: "linear-gradient(135deg, #1E293B 0%, #0F172A 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Truck cargo body */}
        <div
          style={{
            position: "absolute",
            top: 9,
            left: 3,
            width: 19,
            height: 13,
            borderRadius: 2,
            background: "linear-gradient(180deg, #3B82F6 0%, #2563EB 100%)",
          }}
        />
        {/* Cab */}
        <div
          style={{
            position: "absolute",
            top: 13,
            left: 22,
            width: 8,
            height: 9,
            borderRadius: 2,
            background: "#38BDF8",
          }}
        />
        {/* Cab window */}
        <div
          style={{
            position: "absolute",
            top: 14.5,
            left: 23.5,
            width: 5,
            height: 4,
            borderRadius: 1,
            background: "rgba(224,242,254,0.6)",
          }}
        />
        {/* Undercarriage */}
        <div
          style={{
            position: "absolute",
            top: 21,
            left: 3,
            width: 27,
            height: 2,
            borderRadius: 1,
            background: "#1E293B",
          }}
        />
        {/* Left wheel outer */}
        <div
          style={{
            position: "absolute",
            top: 20.8,
            left: 4.8,
            width: 6.4,
            height: 6.4,
            borderRadius: "50%",
            background: "#0F172A",
            border: "1.4px solid #94A3B8",
          }}
        />
        {/* Left wheel hub */}
        <div
          style={{
            position: "absolute",
            top: 23,
            left: 7,
            width: 2.4,
            height: 2.4,
            borderRadius: "50%",
            background: "#475569",
          }}
        />
        {/* Right wheel outer */}
        <div
          style={{
            position: "absolute",
            top: 20.8,
            left: 21.8,
            width: 6.4,
            height: 6.4,
            borderRadius: "50%",
            background: "#0F172A",
            border: "1.4px solid #94A3B8",
          }}
        />
        {/* Right wheel hub */}
        <div
          style={{
            position: "absolute",
            top: 23,
            left: 24,
            width: 2.4,
            height: 2.4,
            borderRadius: "50%",
            background: "#475569",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
