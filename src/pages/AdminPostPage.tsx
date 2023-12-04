import AdminLayout from "../layouts/AdminLayout";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import MyEditor from "../components/MyEditor";
import ReactSelect from "react-select";

export default function AdminCreatePostPage() {
    const tags = Array.from({ length: 10 }).map((_, index) => ({
        label: `Tag ${index + 1}`,
        value: index
    }));
    const images = Array.from({ length: 10 }).map((_, index) => ({
        label: `Image ${index + 1}`,
        value: index
    }));
    const [data, setData] = useState("");

    function handleEditorData(data: string) {
        setData(data);
    }

    function handlePost() {
        console.log(data);
    }

    return (
        <AdminLayout>
            <h1 className="text-center">Post</h1>
            <div className="mb-3">
                <Form>
                    <Form.Group controlId="tags" className="mb-2">
                        <Form.Label>Tags</Form.Label>
                        <ReactSelect
                            placeholder="Type somethings..."
                            isMulti
                            options={tags}
                            className="basic-multi-select"
                            classNamePrefix="select" />
                    </Form.Group>
                    <Form.Group controlId="title" className="mb-2">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" name="title" />
                    </Form.Group>
                    <Form.Group controlId="thumbnail" className="mb-2">
                        <Form.Label>Thumbnail Image</Form.Label>
                        <ReactSelect
                            placeholder="Type somethings..."
                            options={images}
                            className="basic-multi-select"
                            classNamePrefix="select" />
                    </Form.Group>
                    <Form.Group controlId="description" className="mb-2">
                        <Form.Label>Thumbnail Description</Form.Label>
                        <Form.Control as="textarea" name="description" rows={5} />
                    </Form.Group>
                    <div className="d-grid">
                        <Button>Preview Thumbnail</Button>
                    </div>
                </Form>
            </div>
            <hr />
            <div className="mb-3">
                <MyEditor handleDataChange={handleEditorData} />
            </div>
            <div className="d-grid">
                <Button onClick={() => handlePost()}>Post</Button>
            </div>
        </AdminLayout>
    );
}