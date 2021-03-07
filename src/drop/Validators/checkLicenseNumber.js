
export default function CheckLicenseNumberContainer(props) {

    let licenseNumber = props.License_Number

    let chech = (licenseNumber) => {
        if (licenseNumber.length !== 6) {
            return "cant"
        }else return ""
    }

    return (
        <CheckLicenseNumber chech={chech(licenseNumber)} License_Number={licenseNumber} />
    )
}


function CheckLicenseNumber(props) {

    return (
        <td className={props.chech}>{props.License_Number}</td>
    )
}