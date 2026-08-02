import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Elite Aesthetics MedSpa",
    short_name: "Elite Aesthetics",
    description: "Esthetic, injectable, and wellness treatments in Vero Beach, Florida.",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f1e8",
    theme_color: "#173f3b",
  };
}
