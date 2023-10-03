import { Navbar, Nav } from 'rsuite';
import CogIcon from '@rsuite/icons/legacy/Cog';
const Navigation = () => (
    <Navbar>
        <Navbar.Brand link={'/'}>
            INDIA RAILWAY QUERY
        </Navbar.Brand>
        <Nav>
            <Nav.Item href='/getTrain'>Get Train Info</Nav.Item>
            <Nav.Item href='/station'>Get Station</Nav.Item>
            <Nav.Item href='/route'>Get Route</Nav.Item>
            <Nav.Item href='/live'>Get Live</Nav.Item>
            <Nav.Item href='/liverun'>Get Live Running</Nav.Item>
            <Nav.Item icon={<CogIcon />} href='/seat'> Seat Available</Nav.Item>
        </Nav>
        <Nav pullRight>


        </Nav>
    </Navbar>
);

export default Navigation