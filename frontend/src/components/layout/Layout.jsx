import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = () => {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <div style={{ display: 'flex', flex: 1 }}>
                <Sidebar />
                <main style={{ flex: 1, padding: '1.5rem', overflowY: 'auto' }}>
                    <Outlet />
                    <Footer />
                </main>
            </div>
        </div>
    );
};

export default Layout;
