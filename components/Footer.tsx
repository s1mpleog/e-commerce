import React from 'react'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className='py-10 flex border-t items-center justify-between'>
      <div>
        <Logo />
      </div>
      <div>
        Made with ❤️ by SimpleOG
      </div>
    </footer>
  )
}
