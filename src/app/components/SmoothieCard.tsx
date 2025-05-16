'use client'
import Link from 'next/link'
import React from 'react'
import { Pencil } from 'lucide-react';
import { Trash2 } from 'lucide-react';
import { Smoothie } from '../AddSmoothies/page';
import { supabase } from '@/CreateClient';

const SmoothieCard = ({ smoothie }: { smoothie: Smoothie }) => {

    const deleteSmoothie = async () => {
        const { data, error } = await supabase
            .from('smoothies')
            .delete()
            .eq('id', smoothie.id)
            .select()

        if (error) {
            console.log(error)
        }
        if (data) {
            console.log(data)
        }
    }
    return (
        <div className='relative p-2'>
            <p> {smoothie.id}</p>
            <h3 className='font-bold'> {smoothie.title}</h3>
            <p> {smoothie.method}</p>
            <div className='absolute -top-4 -right-4 bg-purple-500 text-white font-bold rounded w-8 h-8 flex items-center justify-center'>
                {smoothie.rating}
            </div>

            <div className='buttons'>
                <div className='flex'>
                    <Link href={'/UpdateSmoothies/' + smoothie.id}>
                        <Pencil className='w-9 h-9 bg-red-200 mt-2' />
                    </Link>

                    <button onClick={deleteSmoothie}>
                        <Trash2 className='w-9 h-9 bg-red-200 mt-2' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SmoothieCard
