import { isNil } from 'lodash-es'
import { useCallback, useEffect, useState } from 'react'

import { sleep } from '~/utils/sleep'

type DefaultPayloadType = Array<unknown> | Record<string, unknown>

export const useVisible = <Payload = DefaultPayloadType>(
  input?:
    | boolean
    | { defaultVisible?: boolean; visibleEffect?: (visible: boolean) => void }
) => {
  const defaultVisible =
    typeof input === 'boolean' ? input : input?.defaultVisible
  const [visible, setVisible] = useState(defaultVisible ?? false)
  const [payload, setPayload] = useState<null | Payload>(null)

  const onShow = useCallback((val?: Payload) => {
    isNil(val) ? setPayload(null) : setPayload(val)
    !isNil(val) && setPayload(val)
    setVisible(true)
  }, [])

  const onClose = useCallback(() => {
    setVisible(false)
    void sleep(200).then(() => {
      setPayload(null)
    })
  }, [])

  const toggle = useCallback(() => {
    setVisible((prev) => !prev)
  }, [])

  useEffect(() => {
    if (typeof input === 'boolean') {
      return
    }

    input?.visibleEffect?.(visible)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible])

  return { visible, onShow, onClose, toggle, payload }
}

export type UseVisibleResults<Payload = DefaultPayloadType> = ReturnType<
  typeof useVisible<Payload>
>
