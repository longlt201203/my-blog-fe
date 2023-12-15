import { PropsWithChildren, useState, ChangeEvent } from "react";
import FormModal from "./FormModal";
import { Form } from "react-bootstrap";

export default function UploadFileModal(props: PropsWithChildren<{
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    handleSubmit: (data: FormData) => void
}>) {
    const [data, setData] = useState<FormData | undefined>();

    function onFilesChange(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.files) {
            const formData = new FormData();
            for (const f of e.target.files) {
                formData.append("files", f);
            }
            setData(formData);
        }
    }

    function handleSubmit() {
        if (data) {
            props.handleSubmit(data);
            setData(undefined);
        }
        props.setShow(false);
    }

    return (
        <FormModal title="Upload Image" show={props.show} setShow={props.setShow} onSave={handleSubmit} onClose={() => {
            setData(undefined);
        }}>
            <Form.Group>
                <Form.Label>Files</Form.Label>
                <Form.Control type="file" multiple accept="image/*" onChange={onFilesChange} />
            </Form.Group>
        </FormModal>
    );
}