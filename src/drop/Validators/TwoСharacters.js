export default function TwoСharacters(props) {

    const Income = props.Yearly_Income

    const fixedNum = parseInt(Income).toFixed(2);

    let noParse = (fixedNum, Income) => {
        if (fixedNum === "NaN") {
            return Income
        } else { return fixedNum }
    }
    let chechCurentData = (fixedNum) => {
        if (fixedNum === "NaN") {
            return "cant"
        } else if (fixedNum >= 1000000) {
            return "cant"
        } else if (fixedNum < 0) {
            return "cant"
        }
        else {
            return ""
        }
    }

    return (
        <td className={chechCurentData(fixedNum)}>{noParse(fixedNum, Income)}</td>
    )
}


