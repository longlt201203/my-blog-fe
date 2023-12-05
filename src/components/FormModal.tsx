import { PropsWithChildren } from "react";
import { Button, Form, Modal } from "react-bootstrap";

export default function FormModal(props: PropsWithChildren<{
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    title?: string;
    onSave?: React.MouseEventHandler<HTMLButtonElement>
}>) {
    return (
        <Modal show={props.show}>
            <Modal.Header>
                <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    {props.children}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onSave}>Save</Button>
                <Button onClick={() => props.setShow(false)} variant="danger">Cancel</Button>
            </Modal.Footer>
        </Modal>
    );
}