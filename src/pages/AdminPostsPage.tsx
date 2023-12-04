import { Badge, Button, ButtonGroup, Form, InputGroup, Pagination, Stack, Table } from "react-bootstrap";
import AdminLayout from "../layouts/AdminLayout";
import { LinkContainer } from "react-router-bootstrap";
import ReactSelect from "react-select";

export default function AdminPostsPage() {
    const tags = Array.from({ length: 10 }).map((_, index) => ({
        label: `Tag ${index + 1}`,
        value: index
    }));

    return (
        <AdminLayout>
            <h1 className="text-center">Posts Managmenet</h1>
            <div className="mb-3">
                <LinkContainer to="/admin/posts/create">
                    <Button>Create</Button>
                </LinkContainer>
            </div>
            <div className="mb-3">
                <Form>
                    <div className="d-lg-flex justify-content-between">
                        <Form.Group className="mb-1">
                            <Stack direction="horizontal" gap={1}>
                                <Form.Control type="text" placeholder="Search" size="sm" />
                                <Button size="sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                    </svg>
                                </Button>
                            </Stack>
                        </Form.Group>
                        <Form.Group className="mb-1">
                            <InputGroup size="sm">
                                <InputGroup.Text>Start</InputGroup.Text>
                                <Form.Control type="date" />
                                <InputGroup.Text>End</InputGroup.Text>
                                <Form.Control type="date" />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="mb-1">
                            <ReactSelect 
                                placeholder="Tags" 
                                isMulti 
                                options={tags} 
                                className="basic-multi-select" 
                                classNamePrefix="select" />
                        </Form.Group>
                    </div>
                </Form>
            </div>
            <div className="mb-3 d-flex justify-content-center">
                <Pagination>
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item value={1}>1</Pagination.Item>
                    <Pagination.Item value={2}>2</Pagination.Item>
                    <Pagination.Item value={3}>3</Pagination.Item>
                    <Pagination.Item>...</Pagination.Item>
                    <Pagination.Item value={10}>10</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
            </div>
            <Table variant="info" hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Tags</th>
                        <th>Last Update</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: 10 }).map((_, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>Title {index + 1}</td>
                            <td>
                                <Badge bg="secondary" className="me-1">#tag 1</Badge>
                                <Badge bg="secondary" className="me-1">#tag 2</Badge>
                                <Badge bg="secondary" className="me-1">#tag 3</Badge>
                            </td>
                            <td>12:15 02/12/2023</td>
                            <td><Badge bg="success">Published</Badge></td>
                            <td>
                                <ButtonGroup size="sm">
                                    <Button variant="secondary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                                        </svg>
                                    </Button>
                                    <Button variant="secondary">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                        </svg>
                                    </Button>
                                    <Button variant="danger">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                                        </svg>
                                    </Button>
                                </ButtonGroup>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </AdminLayout>
    );
}