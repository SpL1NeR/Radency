
export default function CheckNumber(props) {
  let PhoneNumber = props.Phone

  let checkNumber = (PhoneNumber) => {
    let numberRegion
    if (PhoneNumber.length === 10) {

      numberRegion = "+1" + PhoneNumber
      return numberRegion
    } else if (PhoneNumber.length === 11 && PhoneNumber[PhoneNumber.length] === 1) {

      numberRegion = "+" + PhoneNumber
      return numberRegion
    }
    else if (PhoneNumber.length === 12 && PhoneNumber[PhoneNumber.length] === "+" && PhoneNumber[PhoneNumber.length] === "1") {
      numberRegion = PhoneNumber
      return numberRegion
    } else {
      return PhoneNumber
    }

  }
  let checkLengthNumber = (PhoneNumber) => {
    if (PhoneNumber.length >= 12 || PhoneNumber.length < 10) {


      return "cant"
    } else return ""
  }
  let checkCorectNumber = (PhoneNumber) => {
    if (PhoneNumber[0] === "+") {
      return ""

    } else if (PhoneNumber[0] === 1) {
      return ""

    } else return "cant"
  }




  return (<td className={ checkLengthNumber(PhoneNumber), checkCorectNumber(PhoneNumber)}>{checkNumber(PhoneNumber)}</td>)
}