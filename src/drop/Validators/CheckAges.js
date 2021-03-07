export default function CheckAges(props) {
    return (
        <td className={`${props.Age < 21 ?
            "cant" : ""

            }`}>{props.Age}</td>
    )
}


