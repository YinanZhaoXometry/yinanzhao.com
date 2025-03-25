'use client'

import './Greetings.css'

import Image from 'next/image'
import React, { type FC } from 'react'

import { useMount } from '~/app/hooks/useMount'
import { Button, Spinner } from '~/components/ui'
import { cn } from '~/utils/cn'

import ImageIphone from '../../images/image-iphone.png'
import styles from './Greetings.module.css'
import { useSendMessages } from './hooks/useSendMessages'
interface GreetingsProps {
  isAutoPlay?: boolean
}

export const Greetings: FC<GreetingsProps> = ({ isAutoPlay = false }) => {
  const { sendingMessageStatuses, startSendingMessages } = useSendMessages()

  useMount(() => {
    if (!isAutoPlay) {
      return
    }
    startSendingMessages()
  })

  return (
    <div className="group">
      <Button
        disabled={sendingMessageStatuses.isPlaying}
        className={cn(
          'mb-4 block w-full text-center font-bold lg:py-3',
          styles.greetingsPlayButton
        )}
        onClick={startSendingMessages}
      >
        {sendingMessageStatuses.isPlaying ? (
          <Spinner strokeColor="#ccc" />
        ) : sendingMessageStatuses.isDone ? (
          'Play Again'
        ) : (
          'Play Greetings'
        )}
      </Button>

      <div className={styles.greetings}>
        <div className={styles.greetingsMessagesContainer}>
          <div
            className={cn(styles.greetingsMessages, 'greetingsMessages z-10')}
          />
        </div>

        <Image
          className={cn(
            'bototm-0 absolute left-0 right-0 top-0 z-0 hidden md:block',
            styles.greetingsMessagesIPhoneMock
          )}
          src={ImageIphone}
          alt="image-iphone"
        />
      </div>
    </div>
  )
}
