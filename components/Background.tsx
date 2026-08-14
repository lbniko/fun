"use client"

import { ReactNode } from "react"

interface BgCardProps {
	children: ReactNode
	fc?: boolean
}

export function Background({ children, fc }: BgCardProps) {
	return (
		<div
			className={`relative flex ${fc && "flex-col"} items-center justify-center min-h-screen space-y-14 bg-gradient-to-br from-zinc-800 to-zinc-950 font-sans dark:bg-black px-4`}
		>
			{children}
		</div>
	)
}
