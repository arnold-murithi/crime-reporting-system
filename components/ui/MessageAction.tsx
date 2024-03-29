"use client"
import React, { useRef } from 'react'

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Imessage, useMessage } from '@/lib/store/messages'
import { supabaseBrowser } from '@/lib/supabase/browser'
import { toast } from 'sonner'
import { Label } from "@/components/ui/label"


  //Exported to ListMessages
  
  export default function DeleteALert() {

    const actionMessage = useMessage((state)=> state.actionMessage)
    const optimisticDeleteMessage = useMessage((state) => state.optimisticDeleteMessage)

    const handleDeleteMessage = async ()=>{
        const supabase = supabaseBrowser()
        optimisticDeleteMessage(actionMessage?.id!);

      const {error} = await supabase.from("messages").delete().eq("id", actionMessage?.id!)
      if (error){
            toast.error(error.message)
      } else {
        toast.success("message was successfully deleted")
      }
    }

    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button id='trigger-delete'></button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
              {actionMessage?.id}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteMessage}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  
  
export function EditAlert() {

  const actionMessage = useMessage((state)=> state.actionMessage)
  const optimisticUpdateMessage = useMessage((state) => state.optimisticUpdateMessage)
  
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>
  

  const handleEdit = async () =>{

    const supabase = supabaseBrowser()
    const text = inputRef.current.value.trim()

    if (text){
      
      optimisticUpdateMessage({
        ...actionMessage,
        text,
        is_edit:true,
      } as Imessage)
      
      const {error} = await supabase.from("messages").update({text, is_edit:true})
      .eq("id", actionMessage?.id!)
      if (error){
        toast.error(error.message)
  } else {
    toast.success("message updated successfully")
  }
  document.getElementById("trigger-edit")?.click();
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button id="trigger-edit"></button>
      </DialogTrigger>
      <DialogContent className="w-full">
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <input defaultValue={actionMessage?.text} ref={inputRef} />
        <DialogFooter>
          <Button type="submit" onClick={handleEdit}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
