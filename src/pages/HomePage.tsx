import { Row, Col, Form, Button, Image, Container, Stack } from "react-bootstrap";
import MainLayout from "../layouts/MainLayout";

export default function HomePage() {
    return (
        <MainLayout>
            {/**
             * General Info Section
             */}
            <Row>
                <Col>
                    <div className="p-3">
                        <Container fluid="md">
                            <h1 className="display-1 text-center">Le Thanh Long</h1>
                            <h3 className="text-center">Back-End Developer</h3>
                            <Row className="gx-2">
                                <Col md>
                                    <div className="p-3">
                                        <section>
                                            <h3>Summary</h3>
                                            <p>Back-end developer with 1,5 years of experience. Experienced in working with Agile team projects. Driven by continuous improvement. Principles of work: punctuality, adaptability, honesty, and productivity.</p>
                                        </section>
                                        <section>
                                            <h3>Skills</h3>
                                            <ul>
                                                <li>MVC and RESTful API server application</li>
                                                <li>NodeJS-based: Typescript, ExpressJS, NestJS</li>
                                                <li>C#, .NET framework: ASP .NET, Entity Framework</li>
                                                <li>Java, JSP/Servlet, Spring Boot</li>
                                                <li>SQL-based database: MySQL, MSSQL, PostgreSQL</li>
                                                <li>NoSQL-based database: MongoDB</li>
                                                <li>Familiar with Docker, Linux Server, Windows Server, and 3rd party cloud services such as GCP, Azure.</li>
                                                <li>Intermediate working and communicating English skills</li>
                                            </ul>
                                        </section>
                                        <section>
                                            <h3>Contact</h3>
                                            <ul className="list-unstyled">
                                                <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                                </svg> +84 334 669 172</li>
                                                <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                                                </svg> longlt201203@gmail.com</li>
                                                <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4" />
                                                </svg> <a href="" className="link-dark">Thành Long Lê</a></li>
                                                <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                                </svg> <a href="" className="link-dark">longlt201203</a></li>
                                            </ul>
                                        </section>
                                    </div>
                                </Col>
                                <Col md>
                                    <div className="p-3">
                                        <section>
                                            <h3>Experience</h3>
                                            <h5>Back-End Developer at Papagroup Technology (04/2022 - 12/2023)</h5>
                                            <div>
                                                <h6 className="fst-italic">Whizz - Real Estate Evaluation (07/2022 - 01/2023)</h6>
                                                <p className="mb-0">A web application built for a real estate company to enhance their work of evaluating real estates.</p>
                                                <p className="fst-italic">Responsibilities:</p>
                                                <ul>
                                                    <li>RESTful API development with NestJS</li>
                                                    <li>Contributing to database constructing process</li>
                                                    <li>Deploying development and stagging server using Docker and Nginx Proxy Manager</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h6 className="fst-italic">Vstar School Management (01/2023 - 04/2023)</h6>
                                                <p className="mb-0">A school management web application to manage teachers, schedules, resources, etc.</p>
                                                <p className="fst-italic">Responsibilities:</p>
                                                <ul>
                                                    <li>RESTful API development with ASP .NET and Entity Framework</li>
                                                    <li>Deploying development and stagging server</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h6 className="fst-italic">Weapon Party - Game (05/2023 - 12/2023)</h6>
                                                <p className="mb-0">A multi-platform moba game.</p>
                                                <p className="fst-italic">Responsibilities:</p>
                                                <ul>
                                                    <li>Socket service development with Typescript</li>
                                                    <li>Developing in-app purchase Back-End API</li>
                                                    <li>RESTful API development with ASP .NET</li>
                                                </ul>
                                            </div>
                                        </section>
                                        <section>
                                            <h3>Education</h3>
                                            <h5>Bachelor of Software Engineering - FPT University (2021 - Present)</h5>
                                            <ul>
                                                <li>Acquire 70% scholarship for 4 years</li>
                                                <li>GPA: 7,96/10 (Last update: 08/2023)</li>
                                            </ul>
                                        </section>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Col>
                <Col lg={4} className="d-none d-lg-block">
                    <Image src="/src/assets/me.png" fluid />
                </Col>
            </Row>
            <hr />
            <Row>
                <Col md></Col>
                <Col md>
                    <div className="p-3">
                        <h2>Subscribe</h2>
                        <p className="text-mute">Subscribe to receive email about my new Posts.</p>
                        <Form>
                            <Stack direction="horizontal" gap={1}>
                                <Form.Control type="email" placeholder="Email" />
                                <Button type="submit">Submit</Button>
                            </Stack>
                        </Form>
                    </div>
                </Col>
                <Col md></Col>
            </Row>
        </MainLayout>
    );
}