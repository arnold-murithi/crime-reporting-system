
import React from 'react'
import FileSection from '@/components/files'
//import { sendEmail } from '../lib/sendEmail'
import { Resend } from "resend"



const EmailsPage = () => {
  const sendEmail = async (formData:FormData) =>{
    "use server"
    const resend = new Resend('re_UJEao9sG_7FQQjt5vLq3w5FGDYY9jkHun');

    const senderEmail = formData.get('senderEmail')
    const message = formData.get('message')
   
     const {data} = await resend.emails.send({
        from: 'Police Service<onboarding@resend.dev>',
        to: 'arnoldmurithi132@gmail.com',
        subject: 'Hello World',
        reply_to: senderEmail as string,
        text:message as string
      });
      console.log(data)
    }
  return (
    <div className=''>
      <div className="w-100 border h-20">
       <div className="flex items-center justify-center pt-5 font-bold">
        <h1 className='text-2xl'>Save files and Send Emails</h1>
        </div>
    </div>
      
      <FileSection/>
   <section className="ml-5 mr-4  ">
   <div className="w-2/5 float-right bg-slate-100 mr-6 flex items-center ml-7 pb-4">
   <form
    className='flex flex-col mt-10 items-center  min-h-full min-w-40 float-end mr-10 ml-8 '
     action={sendEmail}
      >
       <input className='h-14 rounded-lg border-black mt-8'
      name='senderEmail'
      type='email'
      required
      maxLength={50}
      placeholder='Enter complainant email'
      />
      <textarea
      className='h-52 my-3 border-black p-4 rounded-lg'
      name='message'
      rows={5}
      />  
      <button
      className='bg-sky-500 py-1 px-3 rounded-[5px] min-w-6 mt-4' 
      type='submit'>Send email</button>
    </form>
   </div>
   </section>
    </div>
  )
}

export default EmailsPage