import React from 'react'
import Head from './head'
import Settings from './settings'
import Session from './session'
import { useSelector } from 'react-redux'

function MainBody() {

    const start = useSelector((state)=> state.setting.start)

  return ( //conditional rendering setting and session part
    <>
    <Head/>
    {!start?<Settings/>:<Session/>} 
    </>
  )
}

export default MainBody