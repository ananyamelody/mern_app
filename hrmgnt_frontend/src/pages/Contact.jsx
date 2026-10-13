import { useState } from "react"

function Contact(){
    let [name,setName]=useState("")
    let [age,setAge]=useState(18)
    let [phoneno,setPhoneno]=useState("")
    let RegisterData=(event)=>{
        event.preventDefault();
        //used to collect all the data from the form
        console.log(name);
        console.log(age);
        console.log(phoneno)
    }
    return(
        <div>
            <h1> Contact Page </h1>
            <form>
                <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Enter your name"></input><br/>
                <input type="number" value={age} onChange={(event)=>setAge(event.target.value)} placeholder="Enter your age"></input><br/>
                <input type="text" value={phoneno} onChange={(event)=>setPhoneno(event.target.value)} placeholder="Enter your phone no."></input><br/>
                <button>Submit</button>
            </form>
            <h3>{name}</h3>
            <h3>{age}</h3>
            <h3>{phoneno}</h3>
        </div>
    )
}

export default Contact