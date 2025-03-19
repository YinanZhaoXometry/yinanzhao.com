'use client'

import './Chat.css'

import { clsxm } from '@zolplay/utils'
import anime from 'animejs'
import React, { type FC, useCallback } from 'react'

import { useMount } from '~/app/hooks/useMount'

import { MESSAGES } from './Chat.constants'
import {
  calcMessageLoadingSpeed,
  createBubbleElements,
  getDimentions,
  getMessagesElement,
} from './Chat.helpers'
import styles from './Chat.module.css'

let messageIndex = 0

interface ChatProps {}

export const Chat: FC<ChatProps> = (props) => {
  const {} = props

  const sendMessage = useCallback(
    (
      messagesElement: HTMLElement,
      message: string,
      position?: 'left' | 'right'
    ) => {
      const { bubbleElement, loadingElement, messageElement } =
        createBubbleElements(message, position)
      messagesElement.appendChild(bubbleElement)
      messagesElement.appendChild(document.createElement('br'))

      const dimensions = getDimentions({ bubbleElement, messageElement })

      messageElement.style.display = 'block'
      bubbleElement.style.width = '0rem'
      bubbleElement.style.height = dimensions.loading.h
      messageElement.style.width = dimensions.message.w
      messageElement.style.height = dimensions.message.h
      bubbleElement.style.opacity = `1`

      const bubbleOffset = bubbleElement.offsetTop + bubbleElement.offsetHeight

      if (bubbleOffset > messagesElement.offsetHeight) {
        // scrollMessages
        anime({
          targets: messagesElement,
          scrollTop: bubbleOffset,
          duration: 750,
        })
      }

      const bubbleSize = anime({
        targets: bubbleElement,
        width: ['0ch', dimensions.loading.w],
        marginTop: ['2.5rem', 0],
        marginLeft: ['-2.5rem', 0],
        duration: 800,
        easing: 'easeOutElastic',
      })

      const loadingLoop = anime({
        targets: bubbleElement,
        scale: [1.05, 0.95],
        duration: 1100,
        loop: true,
        direction: 'alternate',
        easing: 'easeInOutQuad',
      })

      // dotsStart
      anime({
        targets: loadingElement,
        translateX: ['-2rem', '0rem'],
        scale: [0.5, 1],
        duration: 400,
        delay: 25,
        easing: 'easeOutElastic',
      })

      const dotsPulse = anime({
        targets: bubbleElement.querySelectorAll('b'),
        scale: [1, 1.25],
        opacity: [0.5, 1],
        duration: 300,
        loop: true,
        direction: 'alternate',
        delay: function (_, i) {
          return i * 100 + 50
        },
      })

      setTimeout(
        function () {
          loadingLoop.pause()
          dotsPulse.pause()
          bubbleSize.pause()

          anime({
            targets: bubbleElement.querySelectorAll('b'),
            opacity: 0,
            scale: 0,
            loop: false,
            direction: 'forwards',
            update: function (a) {
              if (
                a.progress >= 65 &&
                bubbleElement.classList.contains('is-loading')
              ) {
                bubbleElement.classList.remove('is-loading')
                anime({
                  targets: messageElement,
                  opacity: [0, 1],
                  duration: 300,
                })
              }
            },
          })

          anime({
            targets: bubbleElement,
            scale: 1,
            width: [dimensions.loading.w, dimensions.bubble.w],
            height: [dimensions.loading.h, dimensions.bubble.h],
            marginTop: 0,
            marginLeft: 0,
            begin: function () {
              if (messageIndex < MESSAGES.length)
                bubbleElement.classList.remove('cornered')
            },
          })
        },
        calcMessageLoadingSpeed(message, 450)
      )
    },
    []
  )

  const sendMessages = useCallback(() => {
    const message = MESSAGES[messageIndex]

    if (!message) {
      return
    }

    sendMessage(getMessagesElement() as HTMLElement, message)
    ++messageIndex

    setTimeout(
      sendMessages,
      calcMessageLoadingSpeed(message, anime.random(900, 1200))
    )
  }, [sendMessage])

  useMount(() => {
    sendMessages()
  })

  return (
    <div className={styles.chat}>
      <div
        className={clsxm(
          styles.chatMessages,
          'chatMessages',
          'px-2 py-2 sm:px-20 sm:py-20'
        )}
      ></div>
    </div>
  )
}
