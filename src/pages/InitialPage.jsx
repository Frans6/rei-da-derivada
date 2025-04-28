import React from 'react';
import HeaderComponent from './components/Header';
import SideMenu from './components/SideMenu';
import { Layout, Typography, Card, Space } from 'antd';
import { initialPageMenu } from './config/menuItems.jsx';

const { Content, Sider } = Layout;
const { Title, Paragraph } = Typography;

const InitialPage = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <HeaderComponent />
            <Layout>
                <Sider
                    width={256}
                    style={{
                        background: '#fff',
                        overflow: 'auto',
                        height: 'auto',
                        borderRight: '1px solid #f0f0f0'
                    }}
                >
                    <SideMenu 
                        items={initialPageMenu} 
                        defaultSelected="home"
                    />
                </Sider>
                <Layout style={{ padding: '24px' }}>
                    <Content
                        style={{
                            minHeight: '100%',
                            background: '#fff'
                        }}
                    >
                        <Space direction="vertical" size="large" style={{ width: '100%' }}>
                            <Card>
                                <Title level={2}>Bem-vindo ao Rei da Derivada!</Title>
                                <Paragraph>
                                    Esta é uma plataforma educacional dedicada ao estudo de cálculo 
                                    diferencial. Aqui você encontrará diversos exercícios e desafios 
                                    para aprimorar seus conhecimentos em derivadas.
                                </Paragraph>
                                <Paragraph>
                                    Comece sua jornada explorando os módulos disponíveis e 
                                    teste seus conhecimentos através dos exercícios interativos.
                                </Paragraph>
                            </Card>
                        </Space>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default InitialPage;