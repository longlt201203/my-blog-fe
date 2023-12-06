import { Form } from "react-bootstrap";
import FormModal from "./FormModal";
import { PropsWithChildren, useEffect, useState } from "react";
import ITag from "@/entities/Tag";



export default function TagEditModal(props: PropsWithChildren<{
    tag?: ITag;
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
}>) {
    const [title, setTitle] = useState("Create Tag");
    useEffect(() => {
        if (props.tag) {
            setTitle("Update Tag");
            console.log(props.tag);
        } else {
            setTitle("Create Tag");
        }
    }, [props.tag]);

    return (
        <FormModal title={title} show={props.show} setShow={props.setShow}>
            <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" value={props.tag?.name} />
            </Form.Group>
            <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" name="description" rows={5} value={props.tag?.description} />
            </Form.Group>
        </FormModal>
    );
}