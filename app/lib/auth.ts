import { cookies } from "next/headers";

export async function isVerified() {
  const cookieStore = await cookies();

  return cookieStore.get("psw_verified")?.value === "true";
}