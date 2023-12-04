import { Button, Col, Form, InputGroup, Row, Stack, Card, Spinner } from "react-bootstrap";
import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";

export default function PostsListPage() {
    return (
        <MainLayout>
            <Row className="gx-5 gy-3">
                <Col lg={4} className="order-lg-2">
                    <div className="border p-3">
                        <Form>
                            <Form.Group>
                                <h4>Search</h4>
                                <Stack direction="horizontal" gap={1}>
                                    <Form.Control type="text" size="sm" />
                                    <Button size="sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                        </svg>
                                    </Button>
                                </Stack>
                            </Form.Group>
                            <hr />
                            <Form.Group>
                                <h4>Time</h4>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>Start</InputGroup.Text>
                                    <Form.Control type="date" />
                                </InputGroup>
                                <InputGroup>
                                    <InputGroup.Text>End</InputGroup.Text>
                                    <Form.Control type="date" />
                                </InputGroup>
                            </Form.Group>
                            <hr />
                            <Form.Group>
                                <h4>Tags</h4>
                                <Form.Check type="checkbox" label="tag 1" />
                                <Form.Check type="checkbox" label="tag 2" />
                                <Form.Check type="checkbox" label="tag 3" />
                            </Form.Group>
                            <hr />
                        </Form>
                    </div>
                </Col>
                <Col className="order-lg-1">
                    <div className="border p-3">
                        <Row className="g-3 row-cols-1">
                            {Array.from({ length: 4 }).map((_, index) => (
                                <Col key={index}>
                                    <Card style={{ maxHeight: "350px" }} className="overflow-hidden">
                                        <Card.Img src="https://videogames.si.com/.image/t_share/MjAxMDQ1NTUyNjk0MDQ0MDQ5/genshin-impact-furina-card-1.png" style={{ opacity: 0.3 }} className="img-fluid" />
                                        <Card.ImgOverlay>
                                            <Card.Body className="overflow-hidden position-absolute bottom-0 h-75">
                                                <Card.Title>Post Title</Card.Title>
                                                <Card.Text className="text-muted text-small fst-italic">Le Thanh Long - 00:20 12/02/2023</Card.Text>
                                                <Card.Text className="d-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt neque eget suscipit consequat. Nam tempor eros quis ligula mattis sollicitudin. Aenean eget felis imperdiet purus tincidunt elementum. Nam sed laoreet odio. Pellentesque rutrum posuere est, eget rutrum massa interdum in. Cras consectetur in enim in maximus. Morbi venenatis, leo a imperdiet cursus, urna justo mollis mauris, ut tempus tortor purus quis ante. Donec elementum enim nec lorem rhoncus tincidunt. Nunc interdum vel augue placerat commodo. Donec faucibus ultricies vehicula. Vivamus sed aliquet urna. Suspendisse porttitor cursus leo, vel placerat enim. Suspendisse vitae nisi ex. Pellentesque interdum orci quis dolor posuere, at euismod tortor egestas. Donec dapibus iaculis ipsum non sagittis.</Card.Text>
                                            </Card.Body>
                                        </Card.ImgOverlay>
                                        <div className="position-absolute bottom-0 left-0 py-3 px-4 w-100" style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}>
                                            <Link to={`/posts/${index}`}>Read more <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                            </svg></Link>
                                        </div>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                        <hr />
                        <div className="text-center">
                            {Array.from({ length: 10 }).map((_, index) => (
                                <Spinner key={index} animation="grow" size="sm" role="status" />
                            ))}
                        </div>
                    </div>
                </Col>
            </Row>
        </MainLayout>
    );
}