import { Row, Col, Stack, Card, Form, Image, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

export default function PostPage() {
    return (
        <MainLayout>
            <Row className="gx-5 gy-3">
                <Col lg={4} className="order-2">
                    <div className="border p-3">
                        <Form>
                            <Form.Group>
                                <h4>Suggest for you</h4>
                                <Stack gap={3}>
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <Card key={index} style={{ maxHeight: "250px" }} className="overflow-hidden">
                                            <Card.Img src="https://cdn.wccftech.com/wp-content/uploads/2023/04/genshin-impact-nahida-HD-scaled.jpg" style={{ opacity: 0.3 }} className="img-fluid" />
                                            <Card.ImgOverlay>
                                                <Card.Body className="overflow-hidden position-absolute bottom-0 h-75">
                                                    <Card.Title className="text-small">Post Title</Card.Title>
                                                    <Card.Text className="d-block text-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt neque eget suscipit consequat. Nam tempor eros quis ligula mattis sollicitudin. Aenean eget felis imperdiet purus tincidunt elementum. Nam sed laoreet odio. Pellentesque rutrum posuere est, eget rutrum massa interdum in. Cras consectetur in enim in maximus. Morbi venenatis, leo a imperdiet cursus, urna justo mollis mauris, ut tempus tortor purus quis ante. Donec elementum enim nec lorem rhoncus tincidunt. Nunc interdum vel augue placerat commodo. Donec faucibus ultricies vehicula. Vivamus sed aliquet urna. Suspendisse porttitor cursus leo, vel placerat enim. Suspendisse vitae nisi ex. Pellentesque interdum orci quis dolor posuere, at euismod tortor egestas. Donec dapibus iaculis ipsum non sagittis.</Card.Text>
                                                </Card.Body>
                                            </Card.ImgOverlay>
                                            <div className="position-absolute bottom-0 left-0 py-1 px-4 w-100" style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}>
                                                <Link to={`/post/${index}`}>Read more <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                                </svg></Link>
                                            </div>
                                        </Card>
                                    ))}
                                </Stack>
                            </Form.Group>
                            <hr />
                        </Form>
                    </div>
                </Col>
                <Col className="order-1">
                    <div className="border p-3">
                        <h1>Post Title</h1>
                        <p className="text-muted mb-0">Le Thanh Long</p>
                        <p className="text-muted">Last update: 08:09 02/12/2023</p>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <div className="me-1 d-inline-block"><Badge key={index} bg="secondary"><Link to="" className="text-light">#tag {index}</Link></Badge></div>
                        ))}
                        <hr />
                        <h2>Heading</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum fermentum egestas. Phasellus laoreet nulla elit, at egestas tortor facilisis eu. Donec dapibus, lectus et commodo faucibus, leo orci efficitur elit, ut faucibus nulla metus ut ante. Donec pulvinar convallis arcu ac suscipit. Proin urna libero, faucibus non magna sit amet, dictum pretium augue. Aenean eu lectus ut massa ultrices pharetra. Vivamus vel mattis ante. Integer eu eros leo. Sed hendrerit justo lorem, a ultricies enim ornare lobortis. Maecenas non mattis ante. Suspendisse vitae lorem porta, tincidunt dui eget, hendrerit mauris. In facilisis, massa et dignissim sollicitudin, justo massa pellentesque risus, vitae tempus nunc ante eget mi.</p>
                        <ul>
                            <li>List item 1</li>
                            <li>List item 2</li>
                            <li>List item 3</li>
                        </ul>
                        <p>Proin sapien erat, placerat sit amet iaculis et, luctus et nunc. Duis metus quam, convallis tincidunt nibh sit amet, consectetur congue turpis. Sed fermentum est porttitor purus scelerisque, eu sollicitudin tortor efficitur. Suspendisse eu metus auctor, maximus sem ut, elementum eros. Maecenas pellentesque neque velit, in suscipit lectus convallis quis. Praesent sollicitudin quam non lacus faucibus, et ullamcorper urna blandit. Vestibulum augue lorem, interdum a ultrices a, accumsan a metus. Pellentesque id scelerisque lacus. Donec sed mi eu metus tempus aliquet et sit amet velit. Fusce volutpat, tortor vitae scelerisque consequat, tortor risus aliquam odio, ut rutrum turpis quam non velit. Ut suscipit tellus sit amet tincidunt mattis. Phasellus vehicula sollicitudin diam at malesuada. Aenean semper lobortis sapien. Ut ornare libero a congue imperdiet.</p>
                        <div className="">
                            <Image src="https://staticg.sportskeeda.com/editor/2023/07/b60fd-16887214993624-1920.jpg?w=840" fluid />
                            <p className="text-small text-center text-muted fst-italic">Image Caption</p>
                        </div>

                        <p>Pellentesque nec bibendum justo, id convallis est. Donec eget tortor ac ligula consectetur ullamcorper. Morbi eu facilisis enim, eget lobortis ligula. Nam finibus diam augue. Ut et odio nec ipsum molestie scelerisque id vitae turpis. Curabitur eu lobortis massa. Fusce commodo vitae ipsum eget facilisis. Nunc nibh orci, pulvinar ac aliquet sed, tempor ut sem. Praesent volutpat, neque sit amet lacinia porta, ipsum ante faucibus ligula, id euismod felis magna ut quam. Sed suscipit, ante consequat porta consequat, nisi dui imperdiet velit, ac vestibulum ex ante eu sapien. Maecenas mi dolor, congue et varius dictum, pellentesque porta sem. Quisque rutrum enim at erat efficitur, id gravida nulla pulvinar.</p>
                        <p>Donec finibus eleifend est id congue. Curabitur a nulla lorem. Fusce volutpat pellentesque purus nec aliquet. Donec imperdiet vitae quam ac bibendum. Mauris eget tortor et erat efficitur vulputate ut vitae massa. Nam eu bibendum urna, non maximus lorem. Vivamus ultrices tristique dolor pellentesque mattis. Ut eget ligula justo. In in arcu et felis eleifend lacinia id sed ante. Morbi finibus nunc felis, vitae ultricies massa iaculis sed. Duis efficitur, tortor quis lacinia congue, lectus arcu iaculis augue, eget congue neque velit at risus. Suspendisse vulputate cursus risus. Sed semper molestie risus ac aliquet.</p>
                        <p>Ut nec lorem porttitor, tristique nibh vel, pharetra felis. Quisque sed felis sollicitudin, placerat urna vitae, semper nisl. Donec ut massa eu ex vestibulum porta. Curabitur metus metus, luctus eget ex sed, cursus fermentum nibh. Sed purus nibh, bibendum eget augue ut, ultricies imperdiet orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce ac risus neque.</p>
                    </div>
                </Col>
            </Row>
        </MainLayout>
    );
}