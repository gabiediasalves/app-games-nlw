export function currencyMinToHour(minutesAMount: number){
  const hours = Math.floor(minutesAMount/60)
  const minutes = minutesAMount % 60
  
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`
}