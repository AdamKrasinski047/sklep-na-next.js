import React from 'react'
import { Input } from '../ui/input'

function NavSearch() {
  return (
    <Input type='search'
     placeholder='wyszukaj produkt...'
     className='max-w-xs dark:bg-muted'>
    </Input>
  )
}

export default NavSearch