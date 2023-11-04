// import Sidebar from "../common/sidebar";

import Navbar from "./Navbar";

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
    return (
        <>
            <Navbar />
            <div className="mt-14">
                {/* <div className="sidebar"><Sidebar /></div> */}
                <div className="content">{children}</div>
                {/* <footer>this is footer</footer> */}
            </div>
        </>
    );
}

export default Layout;