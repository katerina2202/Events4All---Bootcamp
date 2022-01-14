import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import classes from './CreateNewEvent.module.css';
import { FloatingLabel, Form, Button, Dropdown } from "react-bootstrap";
import axios from 'axios';





class CreateNewEvent extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            Picture: '',
            Title: '',
            Description: '',
            PlaceName: '',
            PlaceAddress: '',
            DateOfEvent: '',
            AvailableTickets: ''
        };



    };





    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault();
        console.log(this.state);
        axios.post("https://localhost:44359/api/Events", this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }






    render() {
        const { Title, Description, PlaceName, PlaceAddress, DateOfEvent, AvailableTickets } = this.state;
        return (

            <div className={classes.newEventForm}>
                <h1>Event Creation</h1>
                <Form onSubmit={this.submitHandler}>
                    {/* <Form.Group controlId="formFileMultiple" className="mb-3">
                        <Form.Label>Pictures</Form.Label>
                        <Form.Control type="file" multiple value={Picture} />
                    </Form.Group> */}
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" name="Title" placeholder="Title" value={Title} onChange={this.changeHandler} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control style={{maxHeight: "150px" }} as="textarea" name="Description" rows={3} placeholder="Description" value={Description} onChange={this.changeHandler} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Place Name</Form.Label>
                        <Form.Control type="text" name="PlaceName" placeholder="PlaceName" value={PlaceName} onChange={this.changeHandler} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" name="PlaceAddress" placeholder="PlaceAddress" value={PlaceAddress} onChange={this.changeHandler} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Date Of Event</Form.Label>
                        <Form.Control type="text" name="DateOfEvent" placeholder="DateOfEvent" value={DateOfEvent} onChange={this.changeHandler} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Max Number Of Tickets</Form.Label>
                        <Form.Control type="text" name="AvailableTickets" placeholder="AvailableTickets" value={AvailableTickets} onChange={this.changeHandler} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Choose Ticket Categories</Form.Label>
                        <Form.Control type="text" placeholder="Title" onChange={this.changeHandler} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" placeholder="Title" onChange={this.changeHandler} />
                    </Form.Group>
                    

                    <button type="submit">Create</button>
                </Form >
            </div>


        )
    }

}

export default CreateNewEvent;



{/* <FloatingLabel controlId="floatingTextarea2" label="Title">
                    <Form.Control type="text" placeholder="Title" name="Title" value={Title} onChange={this.changeHandler}/>
                    </FloatingLabel> */}