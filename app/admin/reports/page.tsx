"use client"
import React from 'react'
import { useEffect, useState } from 'react'
//import { supabaseServer } from '@/lib/supabase/server'
import { supabaseBrowser } from '@/lib/supabase/browser'
import GenerateDoc from '@/components/pdf-report'
import { Message } from '@/lib/types/report'


const AdminReport =  () => {
const [messages, setMessages] = useState<Message[]>([])
const getMessages = async () =>{

const supabase = supabaseBrowser();

const { data, error} = await supabase
  .from('messages')
  .select('*')
  if (data){
    setMessages(data)
  }
  console.log(error)
}

useEffect(()=>{
getMessages()
},[])
  return (
    <div>
      <h1>Admin report page</h1>
      <table> 
      <tr>
            <th>Message ID:</th>
            <th>Created at:</th>
            <th>Message:</th>
            <th>Sent by:</th>
        </tr>  
            {messages.map((message, index) => (
                    <tr
                    className='odd:bg-white even:bg-slate-50'
                     key={index}>
                        <td> {message.id}</td>
                        <td> {message.created_at}</td>
                        <td> {message.text}</td>
                        <td> {message.send_by}</td>
                    </tr>
            ))}
        <GenerateDoc messages={messages}/>
      </table>
      </div>
        )
  }

export default AdminReport;