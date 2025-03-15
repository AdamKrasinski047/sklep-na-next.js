import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { GiCandleLight } from "react-icons/gi";
function Logo() {
  return (
    <Button size={'icon'} asChild>
        <Link href='/'>
           <GiCandleLight className='w-6 h-6' />
        </Link>
    </Button>
  )
}

export default Logo