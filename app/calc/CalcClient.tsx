"use client"

import { useState, useEffect } from "react"
import { Background } from "@/components/Background"
import { GetButton } from "@/components/GetButton"
import { HomeButton } from "@/components/HomeButton"

export default function CalcClient() {
	const [birthday, setBirthday] = useState("")
	const [res, setRes] = useState("")
	const [loading, setLoading] = useState(false)
	const [err, setErr] = useState(false)
	const [vis, setVis] = useState(false)

	const handleCalcPress = async (e: React.FormEvent) => {
		setVis(false)
		e.preventDefault()
		setLoading(true)
		if (!birthday) {
			setErr(true)
			setRes("Please enter a valid date.")
			setLoading(false)
			setVis(true)
			return
		}
		const birthDate = new Date(birthday)
		const today = new Date()

		if (birthDate > today) {
			setErr(true)
			setRes("You cannot be born in the future.")
			setLoading(false)
			setVis(true)
			return
		}

		const diff = today.getTime() - birthDate.getTime()
		const days = Math.floor(diff / (1000 * 60 * 60 * 24))
		setErr(false)
		if (days === 1) {
			setRes(`You are ${days} day old!`)
			setLoading(false)
			setVis(true)
			return
		}
		if (days === 0) {
			setErr(true)
			setRes(`I feel it is highly improbable that you were born today.`)
			setLoading(false)
			setVis(true)
			return
		}
		setRes(`You are ${days} days old!`)
		setLoading(false)
		setVis(true)
	}

	return (
		<Background fc={true}>
			<div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
    <span className="xl:text-[33rem] lg:text-[25rem] md:text-[20rem] sm:text-[16rem] text-center text-[10rem] font-black  sm:text-white/4 text-white/0 select-none">
      DAYS
    </span>
  </div>
			<h1 className="pr-40 absolute top-4 left-4 text-3xl sm:text-4xl font-bold text-zinc-100">
				Days Old Calculator
			</h1>
			<HomeButton text="Home" />

			<div className="flex min-h-screen flex-col items-center justify-center px-6">
				<div className="w-full max-w-md space-y-6 text-center">
					<input
						type="date"
						value={birthday}
						onChange={(e) => setBirthday(e.target.value)}
						className="w-full rounded-xl border border-neutral-700 bg-neutral-900 px-4 py-3 text-lg text-white outline-none focus:border-red-500"
					/>

					<GetButton
						disabled={loading}
						text="Get Age in Days"
						loadingText="Loading..."
						onClick={handleCalcPress}
					/>

					<div className="py-6 h-6 flex items-center justify-center">
						<p
							className={`text-md sm:text-xl font-semibold ${err ? "text-red-400" : "text-green-400"} transition-all duration-500 ${vis ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
						>
							{res}
						</p>
					</div>
				</div>
			</div>
		</Background>
	)
}
