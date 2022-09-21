export function currencyHourToMin(hourString: string) {
  const [hour, min] = hourString.split(':').map(Number)

  const minAmount = (hour * 60) + min

  return minAmount

}