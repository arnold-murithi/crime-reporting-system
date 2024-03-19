"use client"
import React from 'react'
import { useMessage } from '@/lib/store/messages'
import Message from './Message'
import DeleteALert, { EditAlert } from './MessageAction'
import { Edu_VIC_WA_NT_Beginner } from 'next/font/google'

const ListMessages = () => {
  //pass useMessage and extract the state
  const messages = useMessage((state) =>state.messages)
  return (
        <div className="flex-1 flex flex-col p-5 h-full overflow-y-auto">
                <div className="flex-1"></div>
                   <div className="space-y-7">

                    {messages.map((value, index)=>{

                      return (
                        <Message key={index} message={value}/>
                      )
                    })}
                    
                    </div>
                    <DeleteALert/>
                    <EditAlert/>
                  </div>
  )
}

export default ListMessages