"use client"
import React, { useEffect, useRef } from 'react'
import { useMessage } from './messages'
import { Imessage } from './messages'

//Passing the message properties the the client 

export default function InitMessages({messages}:{messages:Imessage[]}) {

    const initState = useRef(false)

    useEffect(() =>{
        if (!initState.current){
            useMessage.setState({messages})
        }
        initState.current=true;
        //eslint disable next line
    },[])
  return <></>
}
