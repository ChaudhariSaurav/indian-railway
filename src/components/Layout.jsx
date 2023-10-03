// import Sidebar from "../common/sidebar";

import Navigation from "./Navbar";

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
    return (
        <div className="layout">
            <Navigation />
            {/* <div className="sidebar"><Sidebar /></div> */}
            <div className="content">{children}</div>
            {/* <footer>this is footer</footer> */}
        </div>
    );
}

export default Layout;