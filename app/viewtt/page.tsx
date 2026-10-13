import { isVerified } from "@/app/lib/auth";
import HeadTimetable from "./timetable"

export default async function ProtectedPage() {
  const verified = await isVerified();

  if (!verified) {
    return <p>Please enter the secret code first.</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
        <div>
        <h1 className="text-2xl font-bold mb-4">Én</h1>
      <HeadTimetable number={1} />
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-4">Viktor</h1>
      <HeadTimetable number={2} />
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-4">Miki</h1>
      <HeadTimetable number={3} />
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-4">Geri</h1>
      <HeadTimetable number={4} />
      </div>
    </div>
  )
}

