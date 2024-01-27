const LEADING_ZERO_FORMATTER = new Intl.NumberFormat(undefined, { minimumIntegerDigits: 2 })

export const formatDuration = (duration: number) => {
    const seconds = duration % 60
    const minutes = Math.floor((duration / 60) % 60)
    const hours = Math.floor(duration / (60 * 60))

    const formatedSeconds = LEADING_ZERO_FORMATTER.format(seconds)
    const formatedMinutes = LEADING_ZERO_FORMATTER.format(minutes)

    return hours > 0
        ? `${hours}:${formatedMinutes}:${formatedSeconds}`
        : `${minutes}:${formatedSeconds}`
}
