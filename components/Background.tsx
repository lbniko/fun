"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"

interface BgCardProps {
	children: ReactNode
	fc?: boolean
}

export function Background({ children, fc }: BgCardProps) {
	return (
		<motion.div  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
			className={`relative flex ${fc ? "flex-col" : ""} items-center justify-center min-h-screen space-y-14 bg-gradient-to-br from-zinc-800 to-zinc-950 font-sans dark:bg-black px-4`}
		>
			{children}
		</motion.div>
	)
}
