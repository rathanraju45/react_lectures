import React, { useState } from 'react';
import './Designations.css';

export default function Designations() {  

    const [selected, setSelected] = useState({
        title: 'CEO',
        person: 'Rathan Raju'
    });

    function selectChange(temp) {
        let titleValue;
        let personValue;
        if (temp === "ceo") {
            titleValue = "CEO";
            personValue = "Rathan Raju";
        } else if (temp === "cfo") {
            titleValue = "CFO";
            personValue = "Jhansi & Mukesh";
        } else if (temp === "cmo") {
            titleValue = "CMO";
            personValue = "Narasimha";
        } else if (temp === "coo") {
            titleValue = "COO";
            personValue = "William";
        } else if(temp === "cao"){
            titleValue = "CAO";
            personValue = "Meghana";
        }
        setSelected({
            title: titleValue,
            person: personValue
        });
    };

    return (
        <div id="Designations">

            <div id="select_box">

                <select name="designation_selector" id="selector" onChange={(e) => selectChange(e.target.value)}>
                    <option value="ceo" >CEO</option>
                    <option value="cfo" >CFO</option>
                    <option value="cmo" >CMO</option>
                    <option value="coo" >COO</option>
                    <option value="cao" >CAO</option>
                </select>

            </div>
            <div id="designation_box">

                <div id="designation_content">
                    <h1>{selected.title}</h1>
                    <h2>{selected.person}</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi ipsa, nisi dolor inventore quos sunt illo eaque ipsum est eligendi sint libero accusamus repudiandae voluptate consequuntur laudantium. Eos, reprehenderit unde.</p>
                </div>

            </div>

        </div>
    )
}
