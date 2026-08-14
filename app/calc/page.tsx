import CalcClient from "./CalcClient"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Days Age Calculator - lbniko.com",
}

export default function Calc() {
	return <CalcClient />
}
