import { PropsWithChildren } from "react";
import { Button, Modal } from "react-bootstrap";

export default function ConfirmModal(props: PropsWithChildren<{
    show?: boolean;
    text?: string;
    handleYes?: () => void;
    handleCancel?: () => void;
}>) {
    return (
        <Modal show={props.show}>
            <Modal.Header>
                <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.text}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={(e) => {
                    if (props.handleYes) {
                        props.handleYes();
                    }
                }}>Yes</Button>
                <Button variant="danger" onClick={(e) => {
                    if (props.handleCancel) {
                        props.handleCancel();
                    }
                }}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    );
}