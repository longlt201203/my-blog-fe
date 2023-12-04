import { Row, Col, Button, Form, Container } from "react-bootstrap";

export default function LoginPage() {
    return (
        <Container className="position-relative" style={{height: "100vh"}}>
            <Row className="w-100 position-absolute top-50 start-50 translate-middle">
                <Col md></Col>
                <Col md={8} lg={6}>
                    <div className='p-3 shadow-lg'>
                        <h1>Login</h1>
                        <hr />
                        <Form>
                            <Form.Text className="text-danger">
                                Wrong username or password
                            </Form.Text>
                            <Form.Group controlId='username' className='mb-3'>
                                <Form.Label>Username</Form.Label>
                                <Form.Control type='text' name='username' placeholder='Username' />
                            </Form.Group>
                            <Form.Group controlId='password' className='mb-3'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type='password' name='password' placeholder='Password' />
                            </Form.Group>
                            <div className='d-grid'>
                                <Button variant='primary' type='submit'>Login</Button>
                            </div>
                        </Form>
                    </div>
                </Col>
                <Col md></Col>
            </Row>
        </Container>
    );
}