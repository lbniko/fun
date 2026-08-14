"use client"

import { useState, useEffect } from "react"
import { useRef } from "react"
import { Background } from "@/components/Background"
import { GetButton } from "@/components/GetButton"
import HamburgerMenu from "@/components/HamburgerMenu"
import { setServers } from "dns"

export default function HomeClient() {
	const [feedback, setFeedback] = useState("")
	const [vis, setVis] = useState(false)
	const [err, setErr] = useState(false)
	const [noRes, setNoRes] = useState("")
	const [loading, setLoading] = useState(false)
	const [typedText, setTypedText] = useState("")
	const indexRef = useRef(0)
	const intervalRef = useRef<NodeJS.Timeout | null>(null)

	const handleNoPress = async (e: React.FormEvent) => {
		e.preventDefault()
		setLoading(true)
		setVis(false)
		try {
			const res = await fetch("https://naas.isalman.dev/no", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			})

			const data = await res.json()
			console.log(data.reason)
			setNoRes(data.reason)
			setLoading(false)
		} catch (err: any) {
			setErr(true)
			setFeedback(err.message)
			setVis(true)
		}
	}

	const handleCopy = async (e: React.FormEvent) => {
		e.preventDefault()
		setVis(false)

		if (!noRes) {
			setErr(true)
			setFeedback("No rejection found.")
			setVis(true)
			return
		}

		try {
			if (navigator.clipboard && window.isSecureContext) {
				await navigator.clipboard.writeText(noRes)
			} else {
				// fallback for non-secure contexts (http over LAN, older browsers)
				const textarea = document.createElement("textarea")
				textarea.value = noRes
				textarea.style.position = "fixed"
				textarea.style.opacity = "0"
				document.body.appendChild(textarea)
				textarea.focus()
				textarea.select()
				document.execCommand("copy")
				document.body.removeChild(textarea)
			}

			setErr(false)
			setFeedback("Copied to clipboard!")
			setVis(true)
		} catch (error) {
			setErr(true)
			setFeedback(String(error))
			setVis(true)
		}
	}

	useEffect(() => {
		if (!noRes) return

		if (intervalRef.current) {
			clearInterval(intervalRef.current)
		}
		indexRef.current = 0

		intervalRef.current = setInterval(() => {
			if (indexRef.current < noRes.length) {
				setTypedText(noRes.substring(0, indexRef.current + 1))
				indexRef.current++
			} else {
				clearInterval(intervalRef.current!)
			}
		}, 21)

		return () => {
			if (intervalRef.current) clearInterval(intervalRef.current)
		}
	}, [noRes])

	return (
		<Background fc={true}>
			<h1 className="absolute top-4 left-4 text-3xl sm:text-4xl font-bold text-zinc-100">
				Reject App
			</h1>

			<HamburgerMenu />

			<div className="w-full flex justify-center">
				<p className="w-full max-w-4xl text-balance text-center text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
					You don't feel like going? Get a good reason to reject whatever idea
					your friend has!
				</p>
			</div>

			<div className="h-15 sm:h-10 flex items-center justify-center">
				{noRes && (
					<p className="text-2xl sm:text-3xl text-center text-gray-700 dark:text-gray-300">
						{typedText}
					</p>
				)}
			</div>

			<div className="w-full flex items-center justify-center">
				<GetButton
					onClick={handleNoPress}
					text="I want to reject!"
					loadingText="Getting rejection..."
					disabled={loading}
				/>
				<GetButton
					onClick={handleCopy}
					text="Copy Rejection"
					loadingText="Copying..."
				/>
			</div>
			<div className="h-6 flex items-center justify-center">
				<p
					className={`text-md sm:text-xl font-semibold ${err ? "text-red-400" : "text-green-400"} transition-all duration-500 ${vis ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
				>
					{feedback}
				</p>
			</div>
		</Background>
	)
}
