'use client'

import { motion } from 'framer-motion'
import Balancer from 'react-wrap-balancer'

import { SparkleIcon } from '~/assets'
import { SocialLink } from '~/components/links/SocialLink'

function Developer() {
  return (
    <span className="group">
      <span className="font-mono">&lt;</span>Developer
      <span className="font-mono">/&gt;</span>
      <span className="invisible inline-flex text-zinc-300 before:content-['|'] group-hover:visible group-hover:animate-typing dark:text-zinc-500" />
    </span>
  )
}

function Freelancer() {
  return (
    <span className="group inline-flex items-center">
      <SparkleIcon className="mr-1 inline-flex transform-gpu transition-transform duration-500 group-hover:rotate-180" />
      <span>Freelancer</span>
    </span>
  )
}

export function Header() {
  return (
    <div className="max-w-2xl">
      <motion.h1
        className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 100,
          duration: 0.3,
        }}
      >
        <Developer />
        <span className="block h-2" />
        <Freelancer />
      </motion.h1>
      <motion.p
        className="mt-6 text-base text-zinc-600 dark:text-zinc-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 85,
          duration: 0.3,
          delay: 0.1,
        }}
      >
        <Balancer>
          {`I'm `}
          <b>Yinan</b> Zhao
          {`, a software developer based in Shenzhen China. I have 7 years of web application deveopment experience. And I'm proficient in: `}
        </Balancer>
        <br />
        <Balancer>
          React.js&nbsp;&nbsp;| Next.js&nbsp;&nbsp;|
          TypeScript&nbsp;&nbsp;|&nbsp;&nbsp;GraphQL&nbsp;&nbsp;|&nbsp;&nbsp;Java&nbsp;&nbsp;|&nbsp;&nbsp;WeChat
          mini program development
        </Balancer>
        <br />
        <Balancer>{``}</Balancer>
      </motion.p>
      <motion.div
        className="mt-6 flex gap-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          damping: 50,
          stiffness: 90,
          duration: 0.35,
          delay: 0.25,
        }}
      >
        <SocialLink
          href="https://github.com/YinanZhaoXometry"
          aria-label="My GitHub"
          platform="github"
        />
      </motion.div>
    </div>
  )
}
