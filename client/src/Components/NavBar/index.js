import { Nav, NavItem, NavLink } from 'reactstrap';


export default function NavBar() {

    return (
        <div style={{ backgroundColor: 'var(--BG1)' }}>
            <Nav >
                <NavItem>
                    <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Another Link</NavLink>
                </NavItem>
            </Nav>

        </div>
    );

}