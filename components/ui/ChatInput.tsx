"use client"
import React from 'react'
import { Input } from "@/components/ui/input"
import { supabaseBrowser } from '@/lib/supabase/browser'
import { toast } from 'sonner'

import { v4 as uuidv4 } from 'uuid';
import { useUser } from '@/lib/store/user'
import { Imessage, useMessage } from '@/lib/store/messages'


const ChatInput = () => {
//getting the user state/ properties of the user
  const user = useUser((state)=>state.user)
  //state of the message added
  const addMessage = useMessage((state) => state.addMessage)

    const supabase = supabaseBrowser()
    const handleSendMessage = async (text:string) =>{

      //cannot send blank message
      if (text.trim()){

      //the new message should be the same as the Imessage
      //So we fill the new mmessage object and add it to the state
      const newMessage = {
        id:uuidv4(),
        text,
        send_by:user?.id,
        is_edit: false,
        created_at:new Date().toISOString(),
        users:{
          id: user?.id,
          avatar_url: user?.user_metadata.avatar_url,
          created_at: new Date().toISOString(),
          display_name: user?.user_metadata.user_name,
        },

      }  

        addMessage(newMessage as Imessage)

          const {error} = await supabase.from("messages").insert({text})
          if (error){
            toast.error(error.message)
          }
        } else {
          toast.error("Message cannot be empty!!")
        }
    }
  return (
    <div className="p-5">
                <Input placeholder="send message" onKeyDown={(e)=>{
                    if(e.key==="Enter"){
                        handleSendMessage(e.currentTarget.value)

                        e.currentTarget.value="";
                    }
                    
                }}/>
         </div>
  )

}

export default ChatInput