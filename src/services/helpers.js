/**
 * Return a remaining timeout
 * according to the given minimum delay
 *
 * @param startingTime Request starting time
 * @param minimumDelay Minimum delay to wait
 * @returns {number}
 */
const getTimeout = (startingTime, minimumDelay = 2000) => {
  const requestTime = Date.now() - startingTime
  const timeDifference = minimumDelay - requestTime

  return timeDifference > 0 ? timeDifference : 0
}

/**
 * Return current date - 30 days
 * 
 * @returns {string}
 */
const getLast30DaysDate = () => {
  var date = new Date()
  date.setDate(date.getDate() - 1)
  return date.toISOString().slice(0,10)
}



export { getTimeout, getLast30DaysDate }
