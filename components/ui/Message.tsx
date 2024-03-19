import { Imessage, useMessage } from '@/lib/store/messages'
import React from 'react'
import { MoreHorizontal } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useUser } from '@/lib/store/user';


//Exported to list messages
export default function Message({message}:{message:Imessage}) {
  const user = useUser((state) => state.user)
  return (
    <div>
        <div className="flex-1">
                      <div className="flex gap-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                          <h1 className="font-bold">{message.users?.display_name}</h1>
                          <h1 className="text-sm text-gray-800">{new Date(message.created_at).toDateString()}</h1>
                          </div>
                          {message.users?.id === user?.id && <MessageMenu message={message}/>}
                        </div>
                      </div>
                      <p className="text-gray-800">
                        {message.text}
                        </p>
                    </div>
    </div>
  )
}

const MessageMenu = ({message}:{message:Imessage}) =>{
 const setActionMessage = useMessage((state) => state.setActionMessage)
  return(
    <DropdownMenu>
  <DropdownMenuTrigger>
    <MoreHorizontal/>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Action</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem
    onClick={()=>{document.getElementById("trigger-edit")?.click();
    setActionMessage(message);
  }}
    >
      Edit
      </DropdownMenuItem>
    <DropdownMenuItem
    onClick={()=>{document.getElementById("trigger-delete")?.click();
    setActionMessage(message);
  }}
    >
      Delete
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

  )
}


