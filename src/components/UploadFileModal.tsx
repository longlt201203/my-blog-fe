import { PropsWithChildren, useState, ChangeEvent } from "react";
import FormModal from "./FormModal";
import { Form } from "react-bootstrap";

export default function UploadFileModal(props: PropsWithChildren<{
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
}>) {
    const [files, setFiles] = useState([]);

    function onFilesChange(e: ChangeEvent<HTMLInputElement>) {
        
        if (e.target.files) {
            const formData = new FormData();
            for (let f of e.target.files) {
                const blob = new Blob([f], { type: f.type });
                formData.append("files", blob);
            }
            
        }
    }

    function handleSubmit() {

    }

    return (
        <FormModal title="Upload Image" show={props.show} setShow={props.setShow} onSave={handleSubmit} >
            <Form.Group>
                <Form.Label>Files</Form.Label>
                <Form.Control type="file" accept="image/*" onChange={onFilesChange} />
            </Form.Group>
        </FormModal>
    );
}