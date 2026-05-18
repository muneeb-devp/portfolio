import Link from 'next/link'
import React from 'react'
import { TfiLinkedin } from 'react-icons/tfi'
import { VscGithubAlt } from 'react-icons/vsc'
import { VscMail } from 'react-icons/vsc'

const Contact = () => {
  return (
    <div className="my-80 rounded-md p-8" id="contact">
      <h1 className="text-center text-6xl font-bold text-black dark:text-white">
        Let&apos;s Connect{' '}
      </h1>

      <div className="flex justify-between mt-20">
        <Link href={'https://linkedin.com/in/muneeb-mughal-'}>
          <TfiLinkedin className="text-4xl sm:text-8xl text-blue-500" />
        </Link>
        <Link href={'https://github.com/muneeb-devp'}>
          <VscGithubAlt className="text-4xl sm:text-8xl text-black dark:text-white" />
        </Link>
        <Link href={'mailto:muneeb.devp@gmail.com'}>
          <VscMail className="text-4xl sm:text-8xl text-black dark:text-white" />
        </Link>
      </div>
    </div>
  )
}

export default Contact
