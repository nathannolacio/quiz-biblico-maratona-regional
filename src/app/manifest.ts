import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Quiz Maratona",
    short_name: "Quiz Maratona",
    description: "Aplicativo para estudo e maratona bíblica",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2563eb",
    icons: [
      {
        src: "/biblia-logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/biblia-logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}