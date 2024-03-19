"use client"
import React, { useEffect, useState } from 'react';
import Uppy from '@uppy/core';
import { Dashboard } from '@uppy/react';
import Tus from '@uppy/tus';
import { useUser } from '@/lib/store/user';

import '@uppy/core/dist/style.min.css';
import '@uppy/dashboard/dist/style.min.css';
import { supabaseBrowser } from '@/lib/supabase/browser';

const supabase = supabaseBrowser()

const Uploader = () => {

  const {user} = useUser()


  const onBeforeRequest = async (req:any) =>{
    const supabase = supabaseBrowser();
    const {data} = await supabase.auth.getSession();
    req.setHeader("Authorization",`Bearer${data.session?.access_token}`);
   }

  const [uppy] = useState(() => new Uppy({
    restrictions:{
      maxNumberOfFiles:1,
      allowedFileTypes:["image/*"],
      maxFileSize:5 * 1000 * 1000,
    },
  }).use(Tus, { endpoint: process.env.NEXT_PUBLIC_SUPABASE_URL + "/storage/v1/upload/resumable",
  allowedMetaFields:[
    "bucketName",
    "objectName",
    "contentType",
    "cacheControl"
  ]
 }));

 
 uppy.on("file-added",(file)=>{
  file.meta ={
    ...file.meta,
    bucketName:"images",
    contentType:file.type,
  }
 })

 const handleUpload = () =>{
 uppy.setFileMeta(uppy.getFiles()[0].id,{
  objectName:user?.id + "/" + uppy.getFiles()[0].name
 })
 uppy.upload();
 }

 
 
  
  return (
    <main className="flex flex-col space-x-2 items-center p-6 w-auto">
    <div className="">
      <h3 className="font-[800] text-xl">File upload</h3>
    </div>
    <div className="flex justify-center items-center relative  h-1/4" >
      <form  style={{ display: "flex", flexDirection: "column" }}>
        <label className=''>
          <h1 className='text-zinc-100 text-center'>Image upload</h1>
        </label>
        <Dashboard uppy={uppy}  className='w-auto'/>
        

        {/*
          file && (
            // eslint-disable-next-line @next/next/no-img-element
            <img alt="upload file" src={URL.createObjectURL(file)}
            className='w-64 h-64 object-cover mx-auto mb-5'
            />
          )
          */}
      </form>
    </div>
    <button
    onClick={handleUpload}
 className='bg-blue-900 text-zinc-100 p-2 rounded bloc w-1/2 disabled:opacity-50 mt-3'>
  upload  
       </button>
    <div className="">
      <h2>Uploaded images</h2>
    </div>
  </main>
  )
}

export default Uploader