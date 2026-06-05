import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: "Get Rapid",
    description: SITE.shortDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#0F172A",
    theme_color: "#2563EB",
    orientation: "portrait-primary",
    scope: "/",
    lang: "en-GB",
    categories: ["business", "utilities"],
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
    shortcuts: [
      {
        name: "Get a Free Quote",
        short_name: "Free Quote",
        description: "Request a free removal quote",
        url: "/quote",
        icons: [{ src: "/apple-icon", sizes: "180x180", type: "image/png" }],
      },
      {
        name: "Call Us",
        short_name: "Call",
        description: "Call Get Rapid Removals",
        url: `tel:${SITE.phone}`,
        icons: [{ src: "/apple-icon", sizes: "180x180", type: "image/png" }],
      },
    ],
  };
}
