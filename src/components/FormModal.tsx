import { PropsWithChildren } from "react";
import { Button, Form, Modal } from "react-bootstrap";

export default function FormModal(props: PropsWithChildren<{
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    title?: string;
    onSave?: () => void,
    onClose?: () => void,
    onSubmit?: React.FormEventHandler<HTMLFormElement>
}>) {
    return (
        <Modal show={props.show}>
            <Modal.Header>
                <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={(e) => {
                    e.preventDefault();
                    if (props.onSubmit) {
                        props.onSubmit(e);
                    } else if (props.onSave) {
                        props.onSave();
                    }
                }}>
                    {props.children}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onSave}>Save</Button>
                <Button onClick={(e) => {
                    if (props.onClose) {
                        props.onClose();
                    }
                    props.setShow(false);
                }} variant="danger">Cancel</Button>
            </Modal.Footer>
        </Modal>
    );
}