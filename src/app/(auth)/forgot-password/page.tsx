import React from 'react'
import ForgotPasswordBody from './ForgotPasswordBody'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EightDays Travel | Forgot-Password',
  description: 'EightDays Travel App',
}
function ForgotPassWord() {
  return (
    <>
      <ForgotPasswordBody/>
    </>
  )
}

export default ForgotPassWord