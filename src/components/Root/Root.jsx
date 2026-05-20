import React from 'react';
import Home from '../Home/Home';
import { Outlet } from 'react-router';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';
import '/Root.css'
import { useNavigation } from 'react-router';
const Root = () => {
    const navigation = useNavigation();
    const isNavigation = Boolean(navigation.location)
    return (
        <div>
            <Header></Header>
            <div className='root-main'>
                <SideBar></SideBar>
                {
                    isNavigation && <p>loading...</p>
                }
                <Outlet></Outlet>
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default Root;