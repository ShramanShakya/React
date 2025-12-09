import React from 'react'
import { SignInButton } from '@clerk/nextjs'
import { Sign } from 'crypto'

const SignIn = () => {
  return (
    <SignInButton >
    <button className="text-M font-semibold hover:text-darkColor hover:text-[var(--color-shop_light_purple)]">
        Login
    </button>
    </SignInButton>
  )
}

export default SignIn
