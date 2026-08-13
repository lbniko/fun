import HomeClient from "@/app/no/HomeClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "No App - lbniko.com",
};

export default function Home() {
  return <HomeClient />;
}
