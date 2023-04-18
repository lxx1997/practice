const checkCard = (cards) => {
  if(!cards) return "Unknown"
  let cardArr = cards.split(" ").filter(item => item)
  if(cardArr.length !== 5) return "Unknown"
  let cardNumber = new Map()
  let cardType = new Map()
  const getCardNumber = (s) => {
    switch (s) {
      case "A":
        return 10
      case "B":
        return 11
      case "C":
        return 12
      case "D":
        return 13
      default:
        return +s
    }
  }
  let cartTypeEnum = {
    D: "D",
    C: "C",
    S: "S",
    H: "H"
  }
  for(let i = 0; i < cardArr.length; i++) {
    let card = cardArr[i]
    let  type = card[1]
    if(!cartTypeEnum[type]) return "Unknown"
    let number = getCardNumber(card[0])
    if(cardNumber.has(number)) {
      cardNumber.set(number, cardNumber.get(number) + 1)
    } else {
      cardNumber.set(number, 1)
    }
    if(cardType.has(type)) {
      cardType.set(type, cardType.get(type) + 1)
    } else {
      cardType.set(type, 1)
    }
  }
  let numberValues = Array.from(cardNumber.keys())
  const flash = checkFlash(numberValues)
  // 先判断同色的
  if(cardType.size === 1 && flash && cardNumber.has(13)) {
    return "LargestFlush"
  } else if(cardType.size === 1 && flash) {
    return "StraightFlush"
  } else if(cardNumber.size === 2 && numberValues.some(i => cardNumber.get(i) === 4)) {
    return "FourofaKind"
  } else if(cardNumber.size === 2 && numberValues.every(i => cardNumber.get(i) === 3 || cardNumber.get(i) === 2)) {
    return "FullHouse"
  } else if(cardType.size === 1) {
    return "Flush"
  } else if(flash) {
    return "Straight"
  } else if(cardNumber.size === 3 && numberValues.some(i => cardNumber.get(i) === 3)) {
    return "ThreeofAKind"
  } else if(cardNumber.size === 3 && numberValues.every(i => cardNumber.get(i) < 3)) {
    return "TwoPairs"
  } else if(numberValues.some(i => cardNumber.get(i) === 2)) {
    return "OnePair"
  } else if (cardNumber.size === 5) {
    return "Highest"
  }
  return "Unknown"
}
// 判断是否连续
const checkFlash = (arr) => {
  arr = arr.sort((a, b) => a - b)
  let flag = true
  for(let i = 1; i < arr.length; i++) {
    if(arr[i] - arr[i - 1] !== 1) {
      return false
    }
  }
  return flag
}

console.log(checkCard("9D  AD BD CD DD"), "LargestFlush")
console.log(checkCard("7D 8D 9D AD BD"), "StraightFlush")
console.log(checkCard("9H 8H 8D 8S 8C"), "FourofaKind")
console.log(checkCard("3H 1C 3D 3S 1H"), "FullHouse")
console.log(checkCard("2D 7D 3D AD DD"), "Flush")
console.log(checkCard("7D 9H AS 8C BH"), "Straight")
console.log(checkCard("6H 5H DS 5S 5D"), "ThreeofAKind")
console.log(checkCard("AH CD CS AS 3H"), "TwoPairs")
console.log(checkCard("2H AS 4D AD BC"), "OnePair")
console.log(checkCard("2H 7D 4S 5C BH"), "Highest")
console.log(checkCard(""), "Unknown")
console.log(checkCard("3H 4K 4S 5C BH"), "Unknown")
console.log(checkCard("3H 4H 4S 5C BH DC"), "Unknown")