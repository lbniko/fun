'use client'


import { redirect, useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useRef } from "react";
import { Background } from '@/components/Background'
import { GetButton } from '@/components/GetButton'


export default function Home() {
  const [error, setError] = useState('')
  const [noRes, setNoRes] = useState('')
  const [loading, setLoading] = useState(false)
  const [typedText, setTypedText] = useState('')
  var [hun, setHun] = useState(false)
  const indexRef = useRef(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();
  const noHu = true




useEffect(() => {
  if (localStorage.getItem('hun') === 'true') {
    router.push('/hu')
  }
}, []);



  const handleNoPress = async (e:React.FormEvent) => {
    e.preventDefault();
    setLoading(true)
    try{

      const res = await fetch('https://naas.isalman.dev/no', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const data = await res.json()
      console.log(data.reason)
      setNoRes(data.reason)
      setLoading(false)

    } catch (err: any) {
    setError(err.message)
    } 


  }

  const handleSwitchLanguage = async (e:React.FormEvent) => {

    setHun(true)
    localStorage.setItem('hun', 'true')
    router.push('/hu')

  }

 useEffect(() => {
  if (!noRes) return;

  if (intervalRef.current) {
    clearInterval(intervalRef.current);
  }

  indexRef.current = 0;

  intervalRef.current = setInterval(() => {
    if (indexRef.current < noRes.length) {
      setTypedText(noRes.substring(0, indexRef.current + 1));
      indexRef.current++;
    } else {
      clearInterval(intervalRef.current!);
    }
  }, 21);

  return () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };
}, [noRes]);



  return (
  <Background>
   
      <h1 className="absolute top-4 left-4 text-4xl font-bold text-zinc-100">
      Reject App
      </h1>

      <button
        onClick={handleSwitchLanguage}
        disabled={noHu}
      className={`absolute top-4 right-4 rounded-2xl bg-red-800 px-3 py-1 text-sm text-zinc-100 ${!noHu ? 'cursor-pointer hover:bg-red-900 transition-colors duration-200' : 'cursor-not-allowed opacity-50'}`}>
       Átváltás Magyarra (Nem Elérhető)
      </button>

      
    
  <div className="w-full flex justify-center">
    <p className="w-full max-w-4xl text-balance text-center text-4xl font-bold text-gray-900 dark:text-white">
  You don't feel like going? Get a good reason to reject whatever idea your friend has!
</p>
  </div>

  {noRes && <p className="text-3xl text-center text-gray-700 dark:text-gray-300">{typedText}</p>}

  <GetButton
    onClick={handleNoPress}
    text="I want to reject!"
    loadingText="Getting rejection..."
    disabled={loading}
  />

</Background>

  );
}


