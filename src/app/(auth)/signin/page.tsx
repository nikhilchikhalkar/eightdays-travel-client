import React from 'react'
import SigninBody from './SigninBody'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EightDays Travel | Signin',
  description: 'EightDays Travel App',
}
function Signin() {
  return (
    <>
    <SigninBody/>
    </>
  )
}

export default Signin