import { Button, ButtonGroup, Card, Col, Row, Spinner, Stack } from "react-bootstrap";
import AdminLayout from "../layouts/AdminLayout";
import { useState } from "react";
import UploadFileModal from "../components/UploadFileModal";
import { useQuery } from "react-query";
import LocalFile from "../entities/LocalFile";
import LocalFilesQuery from "../queries/LocalFilesQuery";

export default function AdminFilesPage() {
    const [modalShow, setModalShow] = useState(false);
    const { status, data, error } = useQuery<LocalFile[], Error>("getFiles", LocalFilesQuery.getLocalFiles);

    return (
        <AdminLayout>
            <h1 className="text-center">Files</h1>
            <div className="mb-3">
                <Button onClick={() => setModalShow(true)}>Upload</Button>
            </div>

            {status === "loading" ? (<Spinner animation="border" />) : status === "success" ? (
                <Row className="row-cols-3">
                    {data.map(item => (
                        <Col key={item._id}>
                            <Card>
                                <Card.Img variant="top" className="img-fluid" src={item.link} />
                                <Card.Footer>
                                    <Stack className="justify-content-between" gap={2}>
                                        <Card.Title className="text-center">{item.aliasName}</Card.Title>
                                        <ButtonGroup>
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
                                    </Stack>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            ) : (
                <p>Error</p>
            )}
            <UploadFileModal show={modalShow} setShow={setModalShow} />
        </AdminLayout>
    );
}