'use client'
import { supabase } from '@/CreateClient'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import SmoothieCard from '../components/SmoothieCard'
export interface Smoothie {
    id: number,
    title: string,
    method: string,
    rating: number,
}

const page = () => {

    const [fetchError, setFetchError] = useState<string | null>(null);
    const [smoothies, setSmoothies] = useState<Smoothie[] | null>([]);
    const [isFetching, setIsFetching] = useState<boolean | null>(false);

    useEffect(() => {
        const fetchSmoothies = async () => {
            setIsFetching(true);
            const { data, error } = await supabase
                .from("smoothies")
                .select()
            if (error) {
                setFetchError("Couldn't fetch Smoothies!")
                setSmoothies(null)
            }
            if (data) {
                setSmoothies(data)
                console.log(data)
                setIsFetching(false);
            }
        }
        fetchSmoothies();
    }, [])

    return (
        <div className='bg-[#E5E5E5] h-screen'>
            <button className='border-2 p-2 m-2 duration-300'> <Link href="/"> Home  </Link></button>
            <button className='border-2 p-2 m-2 duration-300'> <Link href="/AddSmoothies"> Add Smothies  </Link></button>
            <div>
                {isFetching ? "Fetching Smoothies..." :
                    <div className=' grid grid-cols-3 p-5 place-items-center'>
                        {smoothies?.map((smoothie) =>
                            <div key={smoothie.id} className='w-80 rounded bg-white'>
                                <SmoothieCard key={smoothie.id} smoothie={smoothie} />
                            </div>
                        )}
                    </div>}
                <div>
                </div>
            </div>
        </div>
    )
}

export default page
