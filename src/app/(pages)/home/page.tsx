
import HomePageBody from "./HomePageBody";

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EightDays Travel | Home',
  description: 'EightDays Travel App',
}
export default function Homepage () {
  return(
    <>
    <HomePageBody/>
    </>
  )
}