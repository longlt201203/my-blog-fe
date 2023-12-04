import { Button, Table, ButtonGroup } from "react-bootstrap";
import AdminLayout from "../layouts/AdminLayout";
import { useState } from "react";
import TagEditModal from "../components/TagEditModal";
import Tag from "../entities/Tag";

const tags: Array<Tag> = Array.from({ length: 5 }).map((_, index) => ({
    id: index+1,
    name: `Tag ${index + 1}`,
    description: `This is tag ${index+1}`
}));

export default function AdminTagsPage() {
    const [modalShow, setModalShow] = useState(false);
    const [tagIndex, setTagIndex] = useState<number | undefined>(undefined);

    return (
        <AdminLayout>
            <h1 className="text-center">Tags Managmenet</h1>
            <div className="mb-3">
                <Button onClick={() => {
                    setTagIndex(undefined);
                    setModalShow(true);
                }}>Create</Button>
            </div>
            <Table variant="info" hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {tags.map((tag, index) => (
                        <tr>
                            <td>{tag.id}</td>
                            <td>{tag.name}</td>
                            <td>{tag.description}</td>
                            <td>
                                <ButtonGroup size="sm">
                                    <Button variant="secondary" onClick={() => {
                                        setTagIndex(index);
                                        console.log(index);
                                        setModalShow(true);
                                    }}>
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
            <TagEditModal tag={tagIndex != undefined ? tags[tagIndex] : undefined} show={modalShow} setShow={setModalShow} />
        </AdminLayout>
    );
}