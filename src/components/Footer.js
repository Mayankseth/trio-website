import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-solid border-dark border-t-2 font-medium text-lg' >
        <Layout className='py-8 flex items-center justify-between'>
            <span className=''>{new Date().getFullYear()} &copy; All Rights Reserved.</span>

            <div className='flex items-center'>
              Build with <span className='text-primary text-2xl px-1'> &#9825; </span> by&nbsp;
              <Link href="https://trio.software" className='underline underline-offset-2' target={'_blank'} >Trio-Software</Link>
            </div>
            <Link href="mailto:contact@trio.software" target={'_blank'} className='underline underline-offset-2' >Say Hello</Link>

        </Layout>
    </footer>
  )
}

export default Footer