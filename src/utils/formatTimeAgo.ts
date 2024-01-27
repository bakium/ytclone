const TIME_AGO_FORMATTER = new Intl.RelativeTimeFormat('en-US', { numeric: "auto" })

export const formatTimeAgo = (date: Date) => {

    let duration = (date.getTime() - Date.now()) / 1000

    const DIVISONS: { amount: number, name: Intl.RelativeTimeFormatUnit }[] = [
        { amount: 60, name: "seconds" },
        { amount: 60, name: "minutes" },
        { amount: 24, name: "hours" },
        { amount: 7, name: "days" },
        { amount: 4.34524, name: "weeks" },
        { amount: 12, name: "months" },
        { amount: Number.POSITIVE_INFINITY, name: "years" }
    ]

    for (let division of DIVISONS) {
        if (Math.abs(duration) < division.amount) {
            return TIME_AGO_FORMATTER.format(Math.round(duration), division.name)
        }
        duration /= division.amount
    }

}
