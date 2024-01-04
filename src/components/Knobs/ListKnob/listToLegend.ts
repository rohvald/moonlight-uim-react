export const listToLegend = (list: number[] | string[]): string[] => {
  
  const stringifiedList = list.map(item => item.toString())

  if (stringifiedList.length <= 10) return stringifiedList
  
  // console.log('Reducing list:', list)
  // console.log('Length:', list.length)
  // console.log('Length -1 isPrime?:', isPrime(list.length-1))

  return listToLegend(findShortestNonPrimePlus1Solution(stringifiedList))
}

const findShortestNonPrimePlus1Solution = (list: string[]): string[] => {

  if (isPrime(list.length-1)) {
    // console.log(`Number of steps (${list.length}) must be either lower than 10 or not a prime_number+1.`)
    return [list[0], list[list.length-1]]
  }

  const reducedLists: Record<string, string[]> = {}
  if (list.length % 2 === 1) reducedLists[2] = list.filter((_, index) => index % 2 === 0)
  if (list.length % 3 === 1) reducedLists[3] = list.filter((_, index) => index % 3 === 0)
  if (list.length % 5 === 1) reducedLists[5] = list.filter((_, index) => index % 5 === 0)
  if (list.length % 7 === 1) reducedLists[7] = list.filter((_, index) => index % 7 === 0)
  // console.log('Reduced lists:', reducedLists)

  const solutions = Object.values(reducedLists).filter(item => !(item.length > 10 && isPrime(item.length-1)))
  // console.log('Solutions:', solutions)

  if (!solutions.length) {
    // console.log(`Number of steps (${list.length}) cannot be evenly reduced to a number lower than 10, without encountering a reduced list (${Object.values(reducedLists).map(item => item.length)}) of length prime_number+1.`)
    return [list[0], list[list.length-1]]
  }

  // return longest solution shorter than 11 items
  let longestShort = []
  for (let i = 0; i < solutions.length; i++) {
    const array = solutions[i]
    if (array.length <= 10 && array.length > longestShort.length) {
      longestShort = array
      // console.log('Longest solution shorter than 11 items:', longestShort)
      return longestShort
    }
  }

  // if it does not exist, return the shortest
  let shortest = solutions[0]
  for (let i = 1; i < solutions.length; i++) {
    if (solutions[i].length < shortest.length) {
      shortest = solutions[i]
    }
  }

  // console.log('Shortest solution:', shortest)
  return shortest
}

const isPrime = (number: number): boolean => {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false
  }
  return true
}