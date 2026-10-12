"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Background } from "@/components/Background"
import { GetButton } from "@/components/GetButton"
import { HomeButton } from "@/components/HomeButton"

export default function CalcClient() {
	const [birthday, setBirthday] = useState("")
	const [res, setRes] = useState("")
	const [loading, setLoading] = useState(false)
	const [err, setErr] = useState(false)
	const [vis, setVis] = useState(false)
	const [daysOld, setDaysOld] = useState<number | null>(null)
	const importantDays = [2500, 5000, 7500, 10000, 15000, 20000, 25000, 30000, 35000]
	const [actuallyImportant, setActuallyImportant] = useState<number[]>([])
	const [ milestoneVis, setMilestoneVis] = useState(false)

	const handleCalcPress = async (e: React.FormEvent) => {
		setVis(false)
		setDaysOld(null)
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
		setDaysOld(days)
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
		const actuallyImportant = importantDays.filter((day) => day > days)
		setActuallyImportant(actuallyImportant)
		setLoading(false)
		setVis(true)
		console.log(actuallyImportant)
		console.log("this runs")
		setMilestoneVis(true)
	}

	return (
		<div className="min-h-screen bg-black">
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

			<div className="flex min-h-screen flex-col items-center justify-start px-6 pt-[24vh] pb-8">
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
					<div className={`transition-all duration-500 ${milestoneVis ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
					<AnimatePresence>
						{vis && !err && daysOld !== null && (
							<motion.div
								initial={{ opacity: 0, y: -8 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -8 }}
								transition={{ duration: 0.25, ease: "easeOut" }}
								className="mt-6 w-full rounded-xl border border-neutral-700 bg-neutral-900/70 p-4 text-left"
							>
							<h2 className="mb-3 text-lg font-semibold text-zinc-100">Upcoming milestones</h2>
							{actuallyImportant.length > 0 ? (
								<div className="space-y-2">
									{actuallyImportant.map((day) => (
										<p key={day} className="text-md sm:text-lg font-semibold text-zinc-300">
											You will be {day} days old on {new Date(new Date(birthday).getTime() + day * 24 * 60 * 60 * 1000).toLocaleDateString()}.
										</p>
									))}
								</div>
							) : (
								<p className="text-zinc-300">No future milestones are configured yet.</p>
							)}
							</motion.div>
						)}
					</AnimatePresence>
					</div>
				</div>
			</div>
		</Background>
		</div>
	)
}
