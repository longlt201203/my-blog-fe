import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function AdminSidebar() {
    return (
        <div className="p-3 border rounded">
            <Nav className="flex-column" variant="pills">
                <Nav.Item>
                    <LinkContainer to={"/admin/dashboard"}>
                        <Nav.Link>Dashboard</Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to={"/admin/posts"}>
                        <Nav.Link>Posts</Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to={"/"}>
                        <Nav.Link>Profile</Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to={"/"}>
                        <Nav.Link>System</Nav.Link>
                    </LinkContainer>
                </Nav.Item>
            </Nav>
        </div>
    );
}