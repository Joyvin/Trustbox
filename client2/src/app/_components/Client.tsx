'use client'
import { useSession } from "next-auth/react"
import ConnectWallet from "./ConnectWallet"
import { getSession } from "next-auth/react"


export async function Component() {
    const session = await getSession()

  if (session) {
    return (

    <div><ConnectWallet/></div>
    )
  }
   


  else{
    return(<ConnectWallet/>)
  }

}