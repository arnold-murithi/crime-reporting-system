import React from 'react'
//import { Message } from '@/lib/types/report'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'


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
    })
  })
  doc.save("table.pdf")
 }
  
  return (
    <div>
    <button onClick={generate}>Download pdf</button>
    </div>
  )
}

export default GenerateDoc