import React from 'react'
import Link from 'next/link'

const Header = (props) => {
  return (
    <div className='bg-green-500 h-10 px-5 py-5 flex items-center justify-between'>
      <h2 className='text-xl'>Todo List</h2>

      <nav className='text-xl flex gap-8'>
        <Link href="/">Home</Link>
        <Link href="/About">About</Link>
        <Link href="/Contact">Tostyfy</Link>
        <Link href="/Career">Career</Link>
        
      </nav>
    </div>
  )
}

export default Header
