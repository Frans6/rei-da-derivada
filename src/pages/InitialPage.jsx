import React, { useState } from 'react';
import HeaderComponent from './components/Header';
import SideMenu from './components/SideMenu';
import { Layout, Typography, Space, Grid, Menu, Row, Col } from 'antd';
import { initialPageMenu } from './config/menuItems.jsx';
import { useNavigate, useLocation } from 'react-router-dom';
import JoinEventComponent from './components/JoinEventComponent';
import CreateEventComponent from './components/CreateEventComponent';
import StaffLoginComponent from './components/StaffLoginComponent';
import ActiveEventsComponent from './components/ActiveEventsComponent.jsx';

const { Content, Sider } = Layout;
const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const InitialPage = () => {
    const screens = useBreakpoint();
    const isMobile = !screens.md;
    const navigate = useNavigate();
    const location = useLocation();
    
    const getActiveComponent = () => {
        const path = location.pathname.replace('/', '');
        
        switch(path) {
            case 'new-event':
                return <CreateEventComponent />;
            case 'join-event':
                return <JoinEventComponent />;
            case 'active-events':
                return <ActiveEventsComponent />;
            case 'staff':
                return <StaffLoginComponent />;
            case 'home':
            case 'initial':
            default:
                return <JoinEventComponent />;
        }
    };

    // Verifica se deve mostrar o texto de boas-vindas
    const shouldShowWelcomeText = () => {
        const path = location.pathname.replace('/', '');
        return !['active-events', 'past-events'].includes(path);
    };

    const renderHorizontalMenu = () => {
        const createMenuItems = () => {
            return initialPageMenu.map(item => {
                if (item.children) {
                    return (
                        <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
                            {item.children.map(child => (
                                <Menu.Item key={child.key} icon={child.icon}>
                                    {child.label}
                                </Menu.Item>
                            ))}
                        </Menu.SubMenu>
                    );
                } else {
                    return (
                        <Menu.Item key={item.key} icon={item.icon}>
                            {item.label}
                        </Menu.Item>
                    );
                }
            });
        };

        return (
            <div style={{ 
                width: '100%', 
                overflowX: 'auto', 
                WebkitOverflowScrolling: 'touch',
                msOverflowStyle: '-ms-autohiding-scrollbar',
            }}>
                <Menu 
                    mode="horizontal" 
                    defaultSelectedKeys={["initial"]} 
                    selectedKeys={[location.pathname.replace('/', '') || 'initial']}
                    onClick={(e) => navigate(`/${e.key}`)}
                    style={{ 
                        borderBottom: '1px solid #f0f0f0',
                        marginBottom: '10px',
                        display: 'flex',
                        justifyContent: 'flex-start',
                        flexWrap: 'nowrap',
                        minWidth: isMobile ? initialPageMenu.length * 130 : 'auto',
                    }}
                >
                    {createMenuItems()}
                </Menu>
            </div>
        );
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <HeaderComponent />
            <Layout>
                {isMobile ? (
                    <div style={{ width: '100%', background: '#fff' }}>
                        {renderHorizontalMenu()}
                    </div>
                ) : (
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
                            defaultSelected="initial"
                        />
                    </Sider>
                )}
                <Layout style={{ padding: isMobile ? '16px' : '24px' }}>
                    <Content
                        style={{
                            minHeight: '100%',
                            background: shouldShowWelcomeText() ? '#fff' : 'transparent',
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <div style={{ 
                            maxWidth: isMobile ? '100%' : shouldShowWelcomeText() ? '800px' : 'none', 
                            width: '100%'
                        }}>
                            <Space direction="vertical" size="large" style={{ width: '100%', background: '#fff' }}>
                                {/* Texto de boas-vindas - apenas para certas páginas */}
                                {shouldShowWelcomeText() && (
                                    <div style={{ 
                                        textAlign: 'center', 
                                        padding: '20px', 
                                        backgroundColor: '#fff',
                                        marginBottom: isMobile ? '20px' : 0,
                                    }}>
                                        <Title level={isMobile ? 3 : 2}>
                                            Bem-vindo ao Rei da Derivada!
                                        </Title>
                                        <Paragraph style={{ 
                                            fontSize: isMobile ? 14 : 16,
                                        }}>
                                            Esta é uma plataforma educacional dedicada ao estudo de cálculo 
                                            diferencial. Aqui você encontrará diversos exercícios e desafios 
                                            para aprimorar seus conhecimentos em derivadas.
                                        </Paragraph>
                                        <Paragraph style={{ 
                                            fontSize: isMobile ? 14 : 16,
                                        }}>
                                            Comece sua jornada explorando os módulos disponíveis e 
                                            teste seus conhecimentos através dos exercícios interativos.
                                        </Paragraph>
                                    </div>
                                )}
                                
                                {/* Componente centralizado com fundo diferente em mobile */}
                                <div style={{ 
                                    backgroundColor: isMobile ? '#f5f5f5' : '#fff',
                                    padding: isMobile ? '20px 0' : 0,
                                    marginTop: isMobile && shouldShowWelcomeText() ? '-20px' : 0,
                                    width: '100%'
                                }}>
                                    <Row justify="center">
                                        <Col xs={24} sm={22} md={24} lg={24} xl={24} style={{ display: 'flex', justifyContent: 'center' }}>
                                            {getActiveComponent()}
                                        </Col>
                                    </Row>
                                </div>
                            </Space>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default InitialPage;