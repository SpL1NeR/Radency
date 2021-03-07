import * as ReactBootStrap from "react-bootstrap"
import React from "react"
import CheckAges from "./Validators/CheckAges"
import CheckExperience from "./Validators/Experience"
import HasChildren from "./Validators/HasChildren"
import TwoСharacters from "./Validators/TwoСharacters"
import CheckNumber from "./Validators/Number"
import CheckLicenseNumberContainer from "./Validators/checkLicenseNumber"
import FindDuplicate from "./Validators/FindDuplicate"
import IsValidDateContainer from "./Validators/checkDate"
import License_States from "./License_states"

export default function TablesContainer(props) {

   let users =  props.users
  
   let resultPhone = users.filter(obj => {
       
    return obj.Phone === ''
  })
  let resultEmail = users.filter(obj => {
    return obj.Email === ''
  })
   let resultName = users.filter(obj => {
    return obj.Full_Name === ''
  })

  let chech = (resultPhone, resultEmail, resultName) =>{
    
      if (resultPhone.length <= 0 && resultEmail.length <= 0 && resultName.length <= 0 ){
        return (<Tables users= {users} />)
      }else return <div className="incorect"><h1>File Format is not corect</h1></div>
  }

  return chech(resultPhone, resultEmail, resultName)
        
}

 function Tables(props) {

    return (

        <ReactBootStrap.Table striped bordered hover>

            <thead>
                <tr>
                    <th>#</th>
                    <th>Full_Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Experience</th>
                    <th>Yearly_Income</th>
                    <th>Has_children</th>
                    <th>License_States</th>
                    <th>Expiration_Date</th>
                    <th>License_Number</th>
                    <th>Duplicate</th>
                </tr>
            </thead>
            <tbody>
            {props.users.map((users, id = 1, index) =>  <tr key={index}>
                    <td>{id + 1}</td>
                    <td >{users.Full_Name}</td>
                    <CheckNumber Phone={users.Phone} />
                    <td >{users.Email}</td>
                    <CheckAges Age={users.Age} />
                    <CheckExperience Age={users.Age} Experience={users.Experience} />
                    <TwoСharacters Yearly_Income={users.Yearly_Income} />
                    <HasChildren Has_children={users.Has_children} />
                    <License_States License_States={users.License_States}/>
                    <IsValidDateContainer Expiration_Date={users.Expiration_Date} />
                    <CheckLicenseNumberContainer License_Number={users.License_Number} />
                  {/*  <FindDuplicate users={users}/>*/}
                </tr>)}
            </tbody>
        </ReactBootStrap.Table>
    )
}