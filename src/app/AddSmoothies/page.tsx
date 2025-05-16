'use client'
import { supabase } from '@/CreateClient';
import Link from 'next/link'
import React, { useState } from 'react'


export interface Smoothie {
    id: number,
    title: string,
    method: string,
    rating: number,
}


const page = () => {

    const [title, setTitle] = useState<string | null>(null);
    const [method, setMethod] = useState<string | null>(null);
    const [rating, setRating] = useState<number | null>(null);
    const [formError, setFormError] = useState<string | null>(null);


    const CreateSmoothie = async (e: any) => {

        e.preventDefault();

        if (!title || !method || !rating) {
            setFormError("Please fill out all fields");
            return;
        }
        const { data, error } = await supabase
            .from('smoothies')
            .insert([{
                title, method, rating
            }])
        if (error) {
            setFormError("Please fill out all fields");
        }
        if (data) {
            console.log(data)
            setFormError(null);
        }

        console.log(title, rating, method);
    }

    return (
        <div>
            <button className='border-2 p-2 m-2 duration-300'> <Link href="/Smoothies"> Back  </Link></button>
            <p> {formError}</p>

            <input type="text"
                placeholder='Smoothie Name'
                className='border-2 p-2 m-2'
                value={title ?? ""}
                onChange={(e) => setTitle(e.target.value)}
            />

            <input type="text"
                placeholder='Method'
                className='border-2 p-2 m-2'
                value={method ?? ""}
                onChange={(e) => setMethod(e.target.value)}
            />

            <input type="number"
                placeholder='Rating'
                className='border-2 p-2 m-2'
                value={rating ?? ""}
                onChange={(e) => setRating(Number(e.target.value))}
            />
            <button onClick={CreateSmoothie}> Submit </button>


        </div>
    )
}

export default page
