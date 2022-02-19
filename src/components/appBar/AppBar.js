import { Outlet } from 'react-router-dom';
// import s from './appBar.module.css';
import { Layout, Typography } from 'antd';
import { useState } from "react";

import Navigation from '../navigation/Navigation'
// import { Footer } from "Components/Footer";

const { Header, Content, Footer, Sider } = Layout;
const { Title} = Typography;


export default function AppBar() {

    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
    setCollapsed(!collapsed);
    };

    return (<Layout style={{ minHeight: '100vh' }}>
        <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={toggleCollapsed}
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
                top: 0,
                bottom: 0,
            }}>
            <Navigation />
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
            <Header className="site-layout-background" style={{ padding: 0 }}>
                <Typography>
                    <Title className='title'>This is a traning aplication for Ant Design</Title>
                </Typography>
            </Header>
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                <Outlet/>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2022 Created by RDO</Footer>
        </Layout>
    </Layout>
    )
}