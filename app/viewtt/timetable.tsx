"use client"

import { useTimetable } from "./useTimetable";


interface TimetableLesson {
  code: string;
  teacher: string;
  slot: string;
  subject_code: string;
  subject_name: string;
  room?: string;
  isSubstitution?: boolean;
  substitutionTeacher?: string;
  substitutionComment?: string;
  substitutionText?: string;
}

export interface User {
  name: string;
  full_name?: string;
  username: string;
  nickname: string;
  email: string;
  image: string;
  last_login: string;
  permissions: string[];
  EJG_code: string | null;
  OM: string | null;
  OM5: string | null;
  food_menu: string;
  coming_year: number;
  class_character: string;
  order_number: number;
  tickets: string[];
  push_permission: boolean;
  push_about_games: boolean;
  push_about_timetable: boolean;
  push_about_chatwall: boolean;
  is_verified: boolean;
  analytics_id: string | null;
}

export type UserType = User;
export type PossibleUserType = User | undefined | null;

function getSlot0ByDate(date: string) {
  const weekday: "h" | "k" | "s" | "c" | "p" = new Date(date)
    .toLocaleDateString("hu-HU", {
      weekday: "narrow",
    })
    .toLocaleLowerCase()[0] as any;
  return weekday;
}

function extendLessonWithSubstitutions(
  lesson: TimetableLesson,
): TimetableLesson {
  



  return lesson;
}

interface TimetableProps {
    number: number;
}

const HeadTimetable = ( { number }: TimetableProps ) => {
  const { timetable, isLoading, isError, selectedDay, setSelectedDay, days } =
    useTimetable({ number });

 

  const renderLesson = (lesson: TimetableLesson, period: number) => {
    if (lesson.code === "-") return null;

    return (
      <div className="flex items-center justify-center gap-2 text-sm">
        <div className="w-2 font-semibold text-selfprimary-800">{period}.</div>

        <div className="flex w-full justify-between text-sm">
          <span className="font-semibold">
            {lesson.subject_name} &nbsp;
            {lesson.isSubstitution ? (
              <span className="text-selfsecondary-500">
                ({lesson.substitutionText})
              </span>
            ) : (
              <span className="info">({lesson.teacher})</span>
            )}
          </span>
          <span>{lesson.room}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-md space-y-2 rounded-xl bg-selfprimary-50 p-2">
      <div className="flex justify-between">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`h-8 rounded-lg border border-selfprimary px-4 text-sm font-medium transition-colors ${
              selectedDay === day
                ? "bg-selfprimary-600 text-white"
                : "text-selfprimary-800 hover:bg-selfprimary-200"
            }`}
          >
            {day.slice(0, 2)}
          </button>
        ))}
      </div>

      {isLoading && (
        <div className="flex h-40 items-center justify-center">
          <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-selfprimary"></div>
        </div>
      )}

      {isError && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-700">
          Hiba történt az órarend betöltése közben. Kérjük, próbáld újra később.
        </div>
      )}

      {timetable ? (
        <div className="space-y-2 rounded-lg bg-selfprimary-100 p-2">
          {timetable[selectedDay] &&
            Object.entries(timetable[selectedDay]).map(
              ([period, lesson]: [string, TimetableLesson]) =>
                lesson.code !== "-" && (
                  <div className="grow" key={period}>
                    {renderLesson(
                      extendLessonWithSubstitutions(lesson),
                      Number.parseInt(period),
                    )}
                  </div>
                ),
            )}

          {timetable[selectedDay] &&
            Object.values(timetable[selectedDay]).every(
              (lesson) => lesson.code === "-",
            ) && (
              <div className="rounded-lg border border-yellow-200 bg-yellow-50 px-4 py-3 text-yellow-700">
                Nincs óra ezen a napon.
              </div>
            )}
        </div>
      ) : null}

      {!timetable && !isError && !isLoading && (
        <div className="rounded-lg border border-yellow-200 bg-yellow-50 px-4 py-3 text-yellow-700">
          Nem található órarend.
        </div>
      )}
    </div>
  );
};

export default HeadTimetable;