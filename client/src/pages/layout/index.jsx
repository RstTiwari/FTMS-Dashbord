import React, { useState ,useEffect} from 'react';
import { Layout } from 'antd';
import { useMediaQuery } from '@mui/material';
import { useCookies } from 'react-cookie';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import { Outlet } from 'react-router-dom';

const { Header, Content } = Layout;

const CustomLayout = ({profile}) => {
    const isLaptop = useMediaQuery('(min-width: 600px)');
    const [isSideBarClosed, setIsSidebarClosed] = useState(false); // State to manage sidebar open/close    
    const contentWidth = window.innerWidth- (isSideBarClosed ? 80 : 200)
    const contentMarginLeft = isSideBarClosed ? 80 :200

    console.log(profile,"==");

    return (
        <Layout style={{ minHeight: "100vh" }}>
            {/* Sidebar */}
            <Sidebar
                drawerWidth="200px"
                isSideBarClosed={isSideBarClosed} // Pass current state to Sidebar
                setIsSidebarClosed={setIsSidebarClosed} // Pass setter function to Sidebar
                isLaptop={isLaptop}
                sidebar = {profile?.tenant?.sidebar}
                tenantId ={profile?.tenant?.tenantId}
            />

            {/* Main content area */}

            <div
                style={{
                    marginLeft: `${contentMarginLeft}px`,
                    width: `${contentWidth}px`,

                }}
            >
                <Navbar user={profile.user}  width = {contentWidth} margin = {contentMarginLeft}  />
                <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
                    <div
                        className="site-layout-background"
                        style={{ padding: 24, minHeight: 360, width:contentWidth }}
                    >
                        <Outlet/>
                    </div>
                </Content>
            </div>
        </Layout>
    );
};

export default CustomLayout;
