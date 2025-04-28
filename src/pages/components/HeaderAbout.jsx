import React from 'react';
import { Layout, Typography, Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

const { Header } = Layout;
const { Title } = Typography;

const LOGO_URL = "https://rei-da-derivada.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.f28d5551.png&w=384&q=75";

const HeaderSaibaMais = ({ onBack }) => {
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
                <Button
                    type="text"
                    icon={<ArrowLeftOutlined />}
                    onClick={onBack}
                    style={{ fontSize: '16px', color: '#1890ff' }}
                >
                    Voltar
                </Button>
                <Title level={3} style={{ margin: 0 }}>
                    Saiba Mais
                </Title>
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

export default HeaderSaibaMais;
