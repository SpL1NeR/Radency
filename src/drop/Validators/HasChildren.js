export default function HasChildren(props) {
   let  chill = props.Has_children
   let children = chill.toString().toLowerCase()

   let validator = (children) => {
        if (children === true) {
            return "TRUE"
        } else if (children === false) {
            return "FALSE"
        } else if (children === "true") {
            return "TRUE"
        }else if (children === "false") {
            return "FALSE"
        }else if (children === "") {
            return "FALSE"
        }else{
            return children
        }

        
    }
    let chechCurentData = (children) => {
        if (children === true) {
            return ""
        } else if (children === false) {
            return ""
        } else if (children === "true") {
            return ""
        }else if (children === "false") {
            return ""
        }else if (children === "") {
            return ""
        }else{
            return "cant"
        }   
    }
        return (

            <td className ={chechCurentData(children)}>{validator(children)}</td>
        )
    }