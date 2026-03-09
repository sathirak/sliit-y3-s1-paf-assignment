import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = () => {
    return (
        <div className="layout">
            <Navbar />
            <div className="layout-body">
                <Sidebar />
                <main className="main-content">
                    <Outlet />
                    <Footer />
                </main>
            </div>
        </div>
    );
};

export default Layout;
