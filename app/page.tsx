"use client"

import { redirect } from "next/navigation"
import { useState, useEffect } from "react"
import { SiteCard } from "@/components/SiteCard"
import { Background } from "@/components/Background"

export default function Home() {
	return (
		<Background>
			
			<h1 className="absolute top-4 px-8 py-4 text-5xl font-bold text-zinc-100">
				Fun Site
			</h1>
			<p className="absolute top-20 px-8 py-4 text-lg text-gray-300">
				This is a fun site where you can explore various projects and ideas.
				Below you can choose from my projects.
			</p>
			<div className="pt-50 grid grid-cols-[repeat(auto-fit,minmax(320px,320px))] justify-center gap-8 max-w-full">
			<SiteCard
				title="Rejection Generator"
				description="A site where you can get funny rejections. Great for social scenarios."
				imageUrl="/no.png"
				link="/no"
			/>
			<SiteCard
				title="Days Old Calculator"
				description="You can calculate your age in days on this site."
				imageUrl="/calc.png"
				link="/calc"
			/>
			</div>
		</Background>
	)
}
