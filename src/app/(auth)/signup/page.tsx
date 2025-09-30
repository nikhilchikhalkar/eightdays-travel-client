import React from 'react'
import SignupBody from './SignupBody'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EightDays Travel | Signup',
  description: 'EightDays Travel App',
}
function Signup() {
  return (
    <> <SignupBody/> </>
  )
}

export default Signup