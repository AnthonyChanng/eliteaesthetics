import type { Metadata } from "next";
import Home from "./Home/home";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Page() {
  return <Home />;
}
