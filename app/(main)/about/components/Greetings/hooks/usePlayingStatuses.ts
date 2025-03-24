import { useCallback, useState } from 'react'

interface PlayingStatuses {
  isPlaying: boolean
  isDone: boolean
}

const DEFAULT_PLAYING_STATUSES: PlayingStatuses = {
  isPlaying: false,
  isDone: false,
}

export function usePlayingStatuses() {
  const [playingStatuses, setPlayingStatuses] = useState<PlayingStatuses>({
    ...DEFAULT_PLAYING_STATUSES,
  })

  const resetPlayingStatuses = useCallback(() => {
    setPlayingStatuses({ ...DEFAULT_PLAYING_STATUSES })
  }, [])

  const changePlayingStatuses = useCallback(
    (changedStatuses: Partial<PlayingStatuses>) => {
      setPlayingStatuses((prev) => ({ ...prev, ...changedStatuses }))
    },
    []
  )

  return { playingStatuses, changePlayingStatuses, resetPlayingStatuses }
}
