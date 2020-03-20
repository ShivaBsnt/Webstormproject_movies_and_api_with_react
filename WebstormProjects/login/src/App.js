import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

class App extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        alert("we are here")

        console.log(data.get('name'));
        console.log(data.get('colour'))// reference by form input's `name` tag
        console.log(data.get('shape'))// reference by form input's `name` tag

        fetch('http://127.0.0.1:8000/fruits1/', {
            method: 'POST',
            mode:'no-cors',

            headers:{
                'Authorization':'Token f4b7e63400de555bd3a12acfda99aac400d44faa',
                'Content-Type': 'application/json'
            },
            body:({
                "name": "apricot",
                "colour": "green",
                "shape": "round"

            })
        });
    }

    // render() {
    //     return (
    //         <form onSubmit={this.handleSubmit}>
    //             <label htmlFor="username">Enter username</label>
    //             <input id="username" name="username" type="text" />
    //
    //             <label htmlFor="email">Enter your email</label>
    //             <input id="email" name="email" type="email" />
    //
    //             <label htmlFor="birthdate">Enter your birth date</label>
    //             <input id="birthdate" name="birthdate" type="text" />
    //
    //             <button>Send data!</button>
    //         </form>
    //     );
    // }

  render() {


      return (
          <Container>
              <div ClassName="App">
                  <form onSubmit={this.handleSubmit}>
                      <Form.Group controlId="formBasicEmail">
                          <Form.Label>fruit name</Form.Label>
                          <Form.Control type="text" placeholder="Fruit Name" name='name'/>
                          <Form.Text className="text-muted">
                              We'll never share your email with anyone else.
                          </Form.Text>
                      </Form.Group>

                      <Form.Group controlId="formBasicPassword">
                          <Form.Label>colour</Form.Label>
                          <Form.Control type="text" placeholder="colour" name='colour'/>
                      </Form.Group>

                      <Form.Group controlId="formBasicPassword">
                          <Form.Label>shape</Form.Label>
                          <Form.Control type="text" placeholder="shape" name='shape'/>
                      </Form.Group>

                      <Button  type='submit'>
                          Submit
                      </Button>
                  </form>
              </div>
          </Container>

      );


  }
}

export default App;
