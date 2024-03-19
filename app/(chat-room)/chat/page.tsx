
import Image from "next/image";
import ChatHeader from "@/components/ui/ChatHeader";
import { supabaseServer } from "@/lib/supabase/server";
import InitUser from "@/lib/store/InitUser"
import ChatInput from "@/components/ui/ChatInput";
import ChatMessages from "@/components/ui/ChatMessages";




export default async function Home () {
  const supabase = supabaseServer();
  const {data} = await supabase.auth.getSession()
  
  return (
    <>
     <div className="max-w-3xl mx-auto md:py-10 h-screen dark:bg-black">
        <div className="h-full border rounded-md flex flex-col">
            <ChatHeader user={data.session?.user}/>
              <ChatMessages/>
              <ChatInput/>
        </div>
      </div>
         <InitUser user={data.session?.user}/>
    </>
  );
}
