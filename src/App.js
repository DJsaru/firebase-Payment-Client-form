import React, { useState } from "react";


export default function Reactform (){


    const [user, setUser] = useState({
        name: "",
        Address: "",
        Email: "",
        Pincode: "",
        CardType: "",
        CardNumber: "",
        ExpirationDate: "",
        CVV: ""
    });

    let name, value;
    const getUserData = (event) => {
        name= event.target.name;
        value= event.target.value;

        setUser({ ...user, [name]: value });
    };

    const postData = async (e) => {
        const {name, Address,  Email, Pincode, CardType, CardNumber, ExpirationDate, CVV} = user;

        
        const res = await fetch('https://fir-form-7761f-default-rtdb.firebaseio.com/',console.log("HIII"),
        {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                name,
                Address,
                Email,
                Pincode,
                CardType,
                CardNumber,
                ExpirationDate,
                CVV
            })
        }
        );

    }
        
        
     
    return(
        <div>
            <div className="sheet">
                <form action="" method="get">
                    <h1>Payment form</h1>
                    <h3>User Information</h3>
                    <p>Name: 
                <input type="text" required name="name" placeholder="D.J.SARU😎" value={user.name} onChange={getUserData} />
            </p>
            <p>Address: 
                <textarea placeholder="Enter ur address" name="Address" id="Address" value={user.Address}onChange={getUserData} ></textarea>
            </p>
            <p>Email: 
                <input type="Email" name="Email" id="Email" required placeholder="smartysaru@gmail.com" value={user.Email} onChange={getUserData}/>
            </p>
            <p>Pincode: 
                <input type="number" name="Pincode" Id="Pincode" required placeholder="431811" value={user.Pincode} onChange={getUserData}/>
            </p>
            <h2>Payment Information</h2>
            <p>CardType: 
                <input type="text" name="CardType" id="cardtype" required placeholder="abcd" value={user.CardType} onChange={getUserData}/>   
            </p>
            <p>CardNumber: 
                <input type="Number" name="CardNumber" id="cardnumber" required placeholder="1111 2222 3333 4444" value={user.CardNumber} onChange={getUserData}/>
            </p>
            <p>ExpirationDate: 
                <input type="date" name="ExpirationDate" id="exp_date" required value={user.ExpirationDate} onChange={getUserData}/>
            </p>
            <p>CVV: 
                <input type="password" name="CVV" id="CVV" required placeholder="143" value={user.CVV} onChange={getUserData}/>
            </p>
            <p>
                <button onClick={postData}> <input type="submit"  value="Pay Now" required /></button>
                {/* <input type="submit" onClick={postData}  value="Pay Now" required /> */}
            </p>
            
            </form>
         </div> 
     </div>
    )
}

