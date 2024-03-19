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
        <div>
            <h1>Admin report page</h1>
            
            {messages.map((message, index) => (
                    <li key={index}>
                        <p>Message ID: {message.id}</p>
                        <p>Created at: {message.created_at}</p>
                        <p>Message: {message.text}</p>
                        <p>Send by: {message.send_by}</p>
                    </li>
            ))}
        </div>
        <GenerateDoc messages={messages}/>
      </div>
        )
  }

export default AdminReport;