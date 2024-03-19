import React from 'react'
//import { Message } from '@/lib/types/report'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import { Button } from './ui/button'


export const GenerateDoc = ({messages}:any) => {
 
 const generate = () =>{
  const doc = new jsPDF()

  autoTable(doc,{
    head: [['Id','created-at','text','send-by']],
    body: 
    messages.map(({id, created_at, text, send_by}:any)=>{
      return[
        id,created_at,text,send_by
      ]
    }),
    startY: 70,
        theme: 'grid',
        styles:{
        cellWidth:'wrap'
        }
  })
  doc.save("table.pdf")
 }
  
  return (
    <div className='ml-5'>
    <Button
    className='bg-sky-500 hover:bg-sky-700' 
    onClick={generate}>Download pdf</Button>
    </div>
  )
}

export default GenerateDoc