'use client';

import { useState, useEffect } from 'react'
import { useRef } from "react";
import { Background } from '@/components/Background'
import { GetButton } from '@/components/GetButton'
import HamburgerMenu from '@/components/HamburgerMenu'

export default function HomeClient() {
      const [error, setError] = useState('')
  const [noRes, setNoRes] = useState('')
  const [loading, setLoading] = useState(false)
  const [typedText, setTypedText] = useState('')
  const indexRef = useRef(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);



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

      

      <HamburgerMenu />

      
    
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