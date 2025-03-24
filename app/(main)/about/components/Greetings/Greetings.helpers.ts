import { LOADING_TEXT, TYPING_SPEED } from './Greetings.constants'

type Elements = ReturnType<typeof createBubbleElements>

export const getMessagesElement = () =>
  document.querySelector('.greetingsMessages')

export const getCurrentTime = function () {
  const date = new Date()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const current = hours + minutes * 0.01
  if (current >= 5 && current < 19) return 'Have a nice day'
  if (current >= 19 && current < 22) return 'Have a nice evening'
  if (current >= 22 || current < 5) return 'Have a good night'
}

export const getFontSize = function () {
  return parseInt(getComputedStyle(document.body).getPropertyValue('font-size'))
}

export const pxToRem = function (px) {
  return px / getFontSize() + 'rem'
}

export const createBubbleElements = function (message, position) {
  const bubbleElement = document.createElement('div')
  const messageElement = document.createElement('span')
  const loadingElement = document.createElement('span')

  bubbleElement.classList.add('chatMessagesBubble')
  bubbleElement.classList.add('is-loading')
  bubbleElement.classList.add('cornered')
  bubbleElement.classList.add(position === 'right' ? 'right' : 'left')
  messageElement.classList.add('message')
  loadingElement.classList.add('loading')
  messageElement.innerHTML = message
  loadingElement.innerHTML = LOADING_TEXT
  bubbleElement.appendChild(loadingElement)
  bubbleElement.appendChild(messageElement)
  bubbleElement.style.opacity = `0`

  return {
    bubbleElement,
    messageElement,
    loadingElement,
  }
}

export const getDimentions = function (
  elements: Pick<Elements, 'bubbleElement' | 'messageElement'>
) {
  const { bubbleElement, messageElement } = elements

  const messageWidth = messageElement.offsetWidth + 2
  const messageHeight = messageElement.offsetHeight
  const messageStyles = getComputedStyle(bubbleElement)
  const paddingTop = Math.ceil(parseFloat(messageStyles.paddingTop))
  const paddingLeft = Math.ceil(parseFloat(messageStyles.paddingLeft))

  return {
    loading: {
      w: '4rem',
      h: '2.25rem',
    },
    bubble: {
      w: pxToRem(messageWidth + paddingLeft * 2),
      h: pxToRem(messageHeight + paddingTop * 2),
    },
    message: {
      w: pxToRem(messageWidth),
      h: pxToRem(messageHeight),
    },
  }
}

export const calcMessageLoadingSpeed = (
  message: string,
  offsetInMs: number
) => {
  return (
    message.replace(/<(?:.|\n)*?>/gm, '').length * TYPING_SPEED +
    (offsetInMs || 0)
  )
}
