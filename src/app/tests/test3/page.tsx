import React from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

type Props = {
  id: number;
  name: string;
  age: number;
}

const Test3Props = ({ id, name, age, }: Props) => {
  return (
    <div>
      <p> {id} </p>

      <p> {name}</p>
      <p> {age}</p>

      <Accordion type="single" collapsible className='m-2 p-2 border-2 rounded border-black'>

        <AccordionItem value="item-1" >
          <AccordionTrigger className='cursor-pointer'>Show Props ID</AccordionTrigger>
          <AccordionContent className='border-1 p-2'>
            {id}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" >
          <AccordionTrigger className='cursor-pointer'>Show Props Name</AccordionTrigger>
          <AccordionContent className='border-1 p-2'>
            {name}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" >
          <AccordionTrigger className='cursor-pointer'>Show Props Age</AccordionTrigger>
          <AccordionContent className='border-1 p-2 text-red-500'>
            {age}
          </AccordionContent>
        </AccordionItem>

      </Accordion>



    </div >
  )
}

export default Test3Props
