export default function License_States(props) {

    const split = props.License_States.split('|');

    let subStr = (split) => {
        for (const property in split) {
            return (split[property].substr(0, 2));

        }

    }
    console.log(subStr)
    return (
        <td >{subStr(split)}</td>
    )

}