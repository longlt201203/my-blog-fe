import { Container } from "react-bootstrap";

export default function Footer() {
    return (
        <Container fluid className="bg-light p-3">
            <p className="text-muted text-center mb-0">
                Le Thanh Long
            </p>
            <p className="text-center mb-0">
                <a href="">Donate me a Front-End 😥🥹</a>
            </p>
        </Container>
    );
}