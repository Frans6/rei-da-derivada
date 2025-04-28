import React from 'react';
import { Layout, Typography, Avatar } from 'antd';
import { mockUser } from '../../mock/userData';

const { Header } = Layout;
const { Title, Text } = Typography;

const LOGO_URL = "https://rei-da-derivada.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.f28d5551.png&w=384&q=75";

const HeaderComponent = () => {
    return (
        <Header 
            style={{
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(12px)',
                padding: '20px 36px',
                height: 'auto',
                width: 'auto',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flex: '0 0 auto' }}>
                <Avatar 
                    size={80}
                    src={mockUser.picture_url}
                    alt="Foto de perfil do usuário"
                    style={{ borderRadius: '10px' }}
                />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Text type="secondary" style={{ fontSize: '16px' }}>
                    Seja bem-vindo(a)
                </Text>
                <Title level={4} style={{ margin: 0 }}>
                    {mockUser.first_name}
                </Title>
            </div>
            </div>

            <div style={{ flex: '0 0 auto' }}>
                <img
                    src={LOGO_URL}
                    alt="Logo do evento"
                    style={{ height: '60px', width: 'auto' }}
                />
            </div>
        </Header>
    );
};

export default HeaderComponent;