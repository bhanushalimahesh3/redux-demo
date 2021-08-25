import React, { useEffect } from 'react';
import { Container, Row, Form, Col, Button  } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import { onSearch, onFilterInputChange, onUserListAPI } from './../reducer/user'

const userList = [
    {name:"A"},{name:"B"},{name:"C"},{name:"C"},{name:"D"}
]

const Dashboard = () => {
    const {userData, filters} = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        userListAPI()

    }, [])

    const userListAPI = () => {
        dispatch(onUserListAPI({value:userList}))
    }

    const onSearchHandler = () => {

        userListAPI()
    }

    const onResetHandler = () => {

        dispatch(onUserListAPI({value:null}))
    }

    console.log(userData);

    return (
        <Container>
            <Row>
                <Col>
                    <Form>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" 
                                value={filters.name} 
                                onChange={(e)=>dispatch(onFilterInputChange({value:e.target.value}))}
                            />
                        </Form.Group>
                    </Form>
                    <Button variant="primary" onClick={onSearchHandler}>Search</Button>
                    <Button variant="primary" onClick={onResetHandler}>Reset</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    {
                        userData ? userData.map((value, index) => {
                            return (
                                <p key={index}>{value.name}</p>
                            )

                        }) : 'No Data'
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default Dashboard;
