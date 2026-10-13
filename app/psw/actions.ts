"use server";

import { cookies } from "next/headers";

export async function verifyCode(code: string) {
  if (code !== process.env.SECRET) {
    return false;
  }

  const cookieStore = await cookies();

  cookieStore.set("psw_verified", "true", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24, // 24 hours
  });

  return true;
}