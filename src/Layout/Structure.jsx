import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button, Layout, theme } from 'antd';
import Sidenav from './Sidenav';
import "../Styles/Layout/index.css"
import HeaderContent from './Header';
import FooterContent from './Footer';
const { Header, Sider, Content, Footer } = Layout;

const Structure = ({ children }) => {

  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (

    <Layout className='layout' >
      <Sider trigger={null} collapsible collapsed={collapsed} style={{ borderRadius: '10px', flex: "0 0 300px" }}>
        <Sidenav />
      </Sider>

      <Layout>
        {/* <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display:"flex"
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <HeaderContent/>
        </Header> */}
        {/* <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
          }}
        /> */}
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,

            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Structure;