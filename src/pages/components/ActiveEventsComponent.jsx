import React, { useState } from 'react';
import { Card, Typography, List, Button, Badge, Space, Grid, Divider } from 'antd';
import { PlayCircleOutlined, EyeOutlined, UserOutlined, ReloadOutlined, LoginOutlined } from '@ant-design/icons';

const { Text, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const ActiveEventsComponent = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.md;
  const [loading, setLoading] = useState(false);

  // Dados mockados para eventos ativos
  const [activeEvents, setActiveEvents] = useState([
    {
      id: 1,
      name: "Campeonato de Derivadas - Turma A",
      participants: 25,
      status: "Ativo",
      role: "Participante",
      startDate: "2024-01-15",
      description: "Evento focado em exercícios de derivadas básicas"
    },
    {
      id: 2,
      name: "Desafio Cálculo Avançado",
      participants: 18,
      status: "Ativo",
      role: "Staff",
      startDate: "2024-01-20",
      description: "Competição de cálculo diferencial avançado"
    },
    {
      id: 3,
      name: "Rei da Derivada - Matemática I",
      participants: 32,
      status: "Ativo",
      role: "Participante",
      startDate: "2024-01-22",
      description: "Evento introdutório para novos estudantes"
    }
  ]);

  const handleViewEvent = (eventId) => {
    console.log('Visualizar evento:', eventId);
    // Aqui você implementaria a navegação para o evento específico
  };

  const handleRefresh = () => {
    setLoading(true);
    // Simula uma chamada de API
    setTimeout(() => {
      console.log('Lista de eventos atualizada');
      setLoading(false);
    }, 1000);
  };

  const getStatusColor = (role) => {
    return role === 'Staff' ? 'blue' : 'green';
  };

  return (
    <Card
      title={
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ color: '#1890ff', fontSize: 18, fontWeight: 700 }}>Eventos Ativos</Text>
          <Button
            type="text"
            icon={<ReloadOutlined />}
            loading={loading}
            onClick={handleRefresh}
            style={{ color: '#1890ff' }}
            size="small"
          >
            {!isMobile && 'Atualizar'}
          </Button>
        </div>
      }
      headStyle={{ backgroundColor: "#e6f7ff", minHeight: 40, borderRadius: 0 }}
      bordered={false}
      style={{ 
        width: '100%', 
        maxWidth: 'none', 
        marginBottom: 0,
        borderRadius: 0,
      }}
      bodyStyle={{ padding: isMobile ? 16 : 24 }}
    >
      {activeEvents.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '20px 0' }}>
          <Paragraph style={{ fontSize: 14, color: '#999' }}>
            Nenhum evento ativo encontrado
          </Paragraph>
        </div>
      ) : (
        <>
          <Paragraph style={{ fontSize: 14, marginBottom: 16 }}>
            Você tem {activeEvents.length} evento(s) ativo(s) no momento.
          </Paragraph>
          
          <List
            dataSource={activeEvents}
            renderItem={(event, index) => (
              <>
                <List.Item
                  style={{
                    padding: isMobile ? '16px 12px' : '20px 16px',
                    borderRadius: '8px',
                    marginBottom: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    border: '1px solid transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#f8f9fa';
                    e.currentTarget.style.borderColor = '#e6f7ff';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.borderColor = 'transparent';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  actions={[
                    <Button
                      type="primary"
                      icon={<LoginOutlined />}
                      onClick={() => handleViewEvent(event.id)}
                      size="small"
                      style={{ 
                        backgroundColor: '#1890ff',
                        borderColor: '#1890ff',
                        borderRadius: '6px',
                        fontWeight: 500,
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#40a9ff';
                        e.currentTarget.style.borderColor = '#40a9ff';
                        e.currentTarget.style.transform = 'translateY(-1px)';
                        e.currentTarget.style.boxShadow = '0 4px 8px rgba(24, 144, 255, 0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#1890ff';
                        e.currentTarget.style.borderColor = '#1890ff';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      {isMobile ? '' : 'Entrar'}
                    </Button>
                  ]}
                >
                  <List.Item.Meta
                    avatar={
                      <Badge 
                        status="processing" 
                        color={getStatusColor(event.role)}
                      />
                    }
                    title={
                      <Space direction={isMobile ? 'vertical' : 'horizontal'} size="small">
                        <Text strong style={{ fontSize: isMobile ? 14 : 16 }}>
                          {event.name}
                        </Text>
                        <Badge 
                          count={event.role} 
                          style={{ 
                            backgroundColor: event.role === 'Staff' ? '#1890ff' : '#52c41a',
                            fontSize: '10px'
                          }} 
                        />
                      </Space>
                    }
                    description={
                      <Space direction="vertical" size={4}>
                        <Text type="secondary" style={{ fontSize: 12 }}>
                          {event.description}
                        </Text>
                        <Space size="middle">
                          <Space size={4}>
                            <UserOutlined style={{ fontSize: 12, color: '#999' }} />
                            <Text style={{ fontSize: 12, color: '#999' }}>
                              {event.participants} participantes
                            </Text>
                          </Space>
                          <Space size={4}>
                            <PlayCircleOutlined style={{ fontSize: 12, color: '#52c41a' }} />
                            <Text style={{ fontSize: 12, color: '#52c41a' }}>
                              Desde {new Date(event.startDate).toLocaleDateString('pt-BR')}
                            </Text>
                          </Space>
                        </Space>
                      </Space>
                    }
                  />
                </List.Item>
                {index < activeEvents.length - 1 && (
                  <Divider style={{ margin: '8px 0', borderColor: '#f0f0f0' }} />
                )}
              </>
            )}
          />
        </>
      )}
    </Card>
  );
};

export default ActiveEventsComponent;