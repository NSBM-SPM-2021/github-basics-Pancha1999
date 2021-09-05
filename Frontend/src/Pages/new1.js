import { Container,Alert, Col, Row, Card, CardBody, CardTitle } from 'reactstrap';
import {useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import axios from "./axios";
import  {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

toast.configure()
const Appointment = () => {
    const [title, setTitle] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [service, setService] = useState('Makeup');
    const [date, setDate] = useState('');
    const [phone, setPhone] = useState('');
    const [consumer, setConsumer] = useState('binura');
    const [time, setTime] = useState('8.30am-9.30am');
    const history = useHistory();

const success = () =>{
     toast.success('Your Appoinment booked!',{
         position:toast.POSITION.TOP_CENTER,
         autoClose:3000
     })
}
    const erroralert = () =>{
        toast.error('Date Already Booked!',{
            position:toast.POSITION.TOP_LEFT,
            autoClose:3000
        })

    }
    function submit() {

        const appointment = { userName,date, time, service,consumer,email,phone};
        axios.post('http://localhost:3001/appointments', appointment)
            .then(response =>
                    // console.log(response),
                    success(),
                history.push('/')
            )
            .catch(error => {
                erroralert()
                history.push('/')
                this.setState({ errorMessage: error.message });
                console.error('There was an error!', error);
            });
    }
    const handleSubmit = () => {
        // e.preventDefault();


        // fetch('/appointments', {
        //     method: 'GET',
        //     headers: { "Content-Type": "application/json" },
        //     // body: JSON.stringify(blog)
        // }).then((response) => {
        //     console.log(response);
        //     history.push('/');
        // })
    }

    return (
        <div className="create">
            <h2>Make an Appointment</h2>
            <form className="appointment-form">

                <Row className="mt-3">
                    <Col xs="6">
                        <label>Name:</label>
                        <input
                            className="bg-light p-2 border name"
                            type="text"
                            required
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                        {/*<div className="bg-light p-2 border">.col-6</div>*/}
                    </Col>
                    <Col xs="6">
                        <label>Email:</label>
                        <input
                            className="bg-light p-2 border email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {/*<div className="bg-light p-2 border">.col-6</div>*/}
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col xs="6">
                        <label>Date:</label>
                        <input
                            className="bg-light p-2 border date"
                            type="date"
                            required
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                        {/*<div className="bg-light p-2 border">.col-6</div>*/}
                    </Col>
                    <Col xs="6">
                        <label>Phone:</label>
                        <input
                            className="bg-light p-2 border phone"
                            type="text"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                        {/*<div className="bg-light p-2 border">.col-6</div>*/}
                    </Col>
                </Row>
                <label>Service:</label>
                <select
                    className="bg-light p-2 border"
                    value={consumer}
                    onChange={(e) => setService(e.target.value)}
                >
                    <option value="Makeup">Makeup</option>
                    <option value="Beard">Bridal</option>
                    <option value="Makeup">Haircut & Styling</option>
                    <option value="Beard">Body Treatment</option>
                </select>
                {/*<label>Description:</label>*/}
                {/*<textarea*/}
                {/*    className="bg-light p-2 border description"*/}
                {/*    required*/}
                {/*    value={service}*/}
                {/*    onChange={(e) =>setService(e.target.value) }*/}
                {/*/>*/}
                <Row className="mt-3">
                    <Col xs="6">
                        <label>Makeup Artist:</label>
                        <select
                            className="bg-light p-2 border"
                            value={consumer}
                            onChange={(e) => setConsumer(e.target.value)}
                        >
                            <option value="binura">binura</option>
                            <option value="owin">owin</option>
                        </select>
                    </Col>
                    <Col xs="6">
                        <label>Time:</label>
                        <select
                            className="bg-light p-2 border"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                        >
                            <option value="1">8.30am-9.30am</option>
                            <option value="2">9.30am-10.30am</option>
                            <option value="3">10.30am-11.30am</option>
                            <option value="4">12.30pm-01.30pm</option>
                        </select>
                    </Col>
                </Row>



                <button onClick={submit} className="makeappointment">Make an Appointment</button>
            </form>
        </div>
    );
}

export default Appointment;