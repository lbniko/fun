import HomeClient from "@/app/no/HomeClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Rejection Generator - lbniko.com",
}

export default function Home() {
	return <HomeClient />
}
