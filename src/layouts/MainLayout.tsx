import { PropsWithChildren } from "react";
import Header from "../partials/Header";
import { Container } from "react-bootstrap";
import Footer from "../partials/Footer";

export default function MainLayout(props: PropsWithChildren) {
    return (
        <>
            <Header />
            <Container fluid="md" className='p-1 p-md-3 shadow-lg' style={{minHeight: "100vh"}}>
                {props.children}
            </Container>
            <Footer />
        </>
    );
}