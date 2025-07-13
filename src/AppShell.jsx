import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './component/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './component/Footer';

function AppShell() {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Durasi animasi dalam milidetik
          once: false, // Animasi hanya dijalankan sekali saat scroll
        });
    }, []);
    
    return (
        <div className="overflow-x-hidden overflow-y-hidden relative">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default AppShell;