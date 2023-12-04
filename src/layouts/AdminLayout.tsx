import { PropsWithChildren } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminSidebar from "../partials/AdminSidebar";

export default function AdminLayout(props: PropsWithChildren) {
    return (
        <Container fluid className="pt-1 pb-1" style={{ minHeight: "100vh" }}>
            <Row>
                <Col md={3}>
                    <AdminSidebar />
                </Col>
                <Col>
                    <div className="p-3 border rounded">
                        {props.children}
                    </div>
                </Col>
            </Row>
            {/* <PopoutLandingButton/> */}
        </Container>
    );
}