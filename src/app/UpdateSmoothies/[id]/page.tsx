'use client';

import { Smoothie } from '@/app/AddSmoothies/page';
import { supabase } from '@/CreateClient';
import Link from 'next/link'
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useEffect, useState } from 'react';


const UpdateSmoothies = (smoothie: Smoothie) => {
    const router = useRouter();
    const { id } = useParams();

    const [title, setTitle] = useState<string | null>(null);
    const [method, setMethod] = useState<string | null>(null);
    const [rating, setRating] = useState<number | null>(null);
    const [formError, setFormError] = useState<string | null>(null);


    useEffect(() => {
        const fetchSmoothie = async () => {
            const { data, error } = await supabase
                .from('smoothies')
                .select()
                .eq('id', id)
                .single()

            if (error) {
                router.push('/')
            }

            if (data) {
                setTitle(data.title)
                setMethod(data.method)
                setRating(data.rating)
                console.log(data);
            }
        }
        fetchSmoothie();
    }, [id])

    const UpdateSmoothie = async (e:any) => {
        e.preventDefault()

        if (!title || !method || !rating) {
            setFormError("Please fill out all fields")
            return;
        }

        const { data, error } = await supabase
            .from('smoothies')
            .update({
                title, method, rating
            })
            .eq('id', id)
            .select()

        if (error) {
            console.log(error)
            setFormError("Please fill out all fields")

        }
        if (data) {
            setFormError(null)
            router.push('/Smoothies')
        }
    }




    return (
        <div>
            <button className='border-2 p-2 m-2 duration-300'> <Link href="/Smoothies"> Back </Link></button>
            <h2 className='text-2xl m-2 '> Update Smoothies</h2>
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
            <button onClick={UpdateSmoothie} className='bg-green-400 text-white p-2 rounded'> Update Recipe </button>
        </div>
    );
};

export default UpdateSmoothies;
