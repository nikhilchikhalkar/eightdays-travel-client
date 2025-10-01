
"use client"

import AutoLogout from '@/components/Common/AutoLogout'
import Navbar from '@/components/Layout/Navbar'
import { SessionProvider } from 'next-auth/react'
import { ReactNode } from 'react'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className=" h-screen w-full">
      <SessionProvider>
        <AutoLogout/>
        <Navbar />
      <main className=" bg-white  py-0 mt-18 px-6">{children}</main>
      </SessionProvider>
    </div>
  )
}

