import React from 'react'
import "./home.css"
import { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router"

const Home = () => {

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [number, setnumber] = useState("")
    const [dob, setdob] = useState("")
    const [address, setaddress] = useState("")
    const [college, setcollege] = useState("")

    const navigate = useNavigate()

    const onSubmit = async (event) => {
        event.preventDefault();


        const data = {
            name: name,
            email: email,
            number: number,
            dob: dob,
            address: address,
            college: college
        }

        const res = await axios.post("https://survey-form-ej3x.onrender.com/details", data).then((res) => {
            alert(res.data.message)
            navigate("/")
            setname(" ")
            setemail(" ")
            setnumber(" ")
            setdob(" ")
            setaddress(" ")
            setcollege(" ")
        })




    }

    return (


        <>
            <div class="bg">


                <div class="student">


                    <form onSubmit={onSubmit}>
                        <div class="name">
                            <h1> Student Survey Form</h1>
                        </div>

                        <div class="name">
                            <label>Enter Your Name:</label><br />
                            <input type="text" placeholder="Enter Your Name"
                                value={name}
                                required
                                onChange={(event) => setname(event.target.value)}
                            />
                        </div>

                        <div class="name">
                            <label>Enter Your Email:</label><br />
                            <input type="email" placeholder="Enter Your Email"
                                value={email}
                                required
                                onChange={(event) => setemail(event.target.value)}
                            />
                        </div>

                        <div class="name">
                            <label>Enter Your Phone Number:</label><br />
                            <input type="text" placeholder="Enter Your Phone Number"
                                value={number}
                                required
                                onChange={(event) => setnumber(event.target.value)}
                            />
                        </div>

                        <div class="name">
                            <label>Enter Your DOB:</label><br />
                            <input type="date" placeholder="mm/dd/yyyy"
                                value={dob}
                                required
                                onChange={(event) => setdob(event.target.value)}
                            />
                        </div>

                        <div class="name">
                            <label>Address:</label><br />
                            <input type="text" placeholder="Address"
                                value={address}
                                required
                                onChange={(event) => setaddress(event.target.value)}
                            />
                        </div>

                        <div class="name">
                            <label>Enter Your College Name:</label><br />
                            <input type="text" placeholder="Enter Your College Name"j
                                value={college}
                                required
                                onChange={(event) => setcollege(event.target.value)}
                            />
                        </div>

                        <div class="name">
                            <input class="btn" type="submit" value="Submit" />
                        </div>

                    </form>


                </div>

            </div>
        </>

    )
}

export default Home