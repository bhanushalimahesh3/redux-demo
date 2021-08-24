import React from 'react';
import { Container, Row, Form, Col, Button  } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import { onInputChange, onSubmit } from './../reducer/index'
import {
    Redirect
  } from "react-router-dom";

const Login = () => {
    const {inputs, isAuthenticated} = useSelector((state) => state.authentication);
    const dispatch = useDispatch();

    return (
        <>
         {
            isAuthenticated ? <Redirect to="/dashboard" /> : (
                <Container>
                    <Row>
                        <Col>
                            <Form>
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" 
                                        value={inputs.email} 
                                        onChange={(e)=>dispatch(onInputChange({value:e.target.value, ele:'email'}))}
                                        />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" 
                                        value={inputs.password} 
                                        onChange={(e)=>dispatch(onInputChange({value:e.target.value, ele:'password'}))}/>
                                </Form.Group>
                            </Form>
                            <Button variant="primary" onClick={() => dispatch(onSubmit())}>Login</Button>
                        </Col>
                    </Row>
                </Container>
            )
         }
        </>
    )
}

export default Login;
