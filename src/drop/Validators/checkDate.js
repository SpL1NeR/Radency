export default function IsValidDateContainer(props) {
    let Expiration_Date = props.Expiration_Date

    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); 
    const yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;


    let ValidDates = (Expiration_Date) => {
        const regEx = /^\d{4}-\d{2}-\d{2}$/;
        if (!Expiration_Date.match(regEx)) return "cant";  
        const d = new Date(Expiration_Date);
        const dNum = d.getTime();

        if (!dNum && dNum !== 0) return "cant";

        return d.toISOString().slice(0, 10) === Expiration_Date;
    }
    let checDateForToday = (today, Expiration_Date) => {
        if (Expiration_Date <= today) { return "cant" } else return ""
    }

    return (
        <IsValidDate checDateForToday={checDateForToday(today, Expiration_Date)} ValidDates={ValidDates(Expiration_Date)} Expiration_Date={Expiration_Date} />
    )

}


function IsValidDate(props) {

    return (
        <td className={props.ValidDates, props.checDateForToday}>{props.Expiration_Date}</td>
    )
}