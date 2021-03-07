import React from "react"
import { parse } from "papaparse";
import TablesContainer from "./table";

export default function Drop() {


    const [highlighter, setHighlighted] = React.useState(false)
    const [users, SetContacts] = React.useState([
        {
            "Full_Name": "Olexsij Herhouskii",
            "Phone": "390635494417",
            "Email": "olexsij22@gmail.com",
            "Age": 20,
            "Experience": 0,
            "Yearly_Income": 0,
            "Has_children": false,
            "License_States": "Lviv",
            "Expiration_Date": "2022-12-20",
            "License_Number": "1xr567"
        }

    ])


    return (
        <div>
            <h1 className="hText ">Contact import</h1>
            <div className={`droper ${highlighter ?
                "canAdd" : "drop"

                }`}


                onDragEnter={() => {
                    setHighlighted(true);
                }}
                onDragLeave={() => {
                    setHighlighted(false);
                }}
                onDragOver={(e) => {
                    e.preventDefault();
                }}
                onDrop={(e) => {
                    e.preventDefault();
                    setHighlighted(false);
                    
                    Array.from(e.dataTransfer.files)
                        .filter((file) => file.type === "application/vnd.ms-excel" )
                        .forEach(async (file) => {
                            const text = await file.text();
                            const result = parse(text, { header: true })
                            SetContacts(existing => [...existing, ...result.data])
                           
                        })
                        
                }}
            >

                Drop here</div>


                
                    <TablesContainer users={users}  />
                            
            </div>
  );
}