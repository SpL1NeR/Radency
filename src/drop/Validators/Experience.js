
export default function CheckExperience(props){
    return (
        <td className={`${props.Experience >= 0 && props.Experience >= props.Age ?
            "cant" : ""}`}>{props.Experience}</td>
        )}