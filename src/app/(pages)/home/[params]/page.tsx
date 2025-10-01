
import ListViewBodyPage from "./ListViewBodyPage";

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EightDays Travel | ListView',
  description: 'EightDays Travel App',
}
export default function ListViewPage () {
    return(
        <>
        <ListViewBodyPage/>
        </>
    )
}