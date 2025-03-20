import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)
dayjs.extend(timezone)

export function getDate(timezone = 'Asia/Shanghai'): dayjs.Dayjs {
  return dayjs().tz(timezone)
}

export function formatDateStr(dateStr: string) {
  const DATE_FORMAT = 'MMMM DD, YYYY'
  return dayjs(dateStr).format(DATE_FORMAT)
}
