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
      status: "Ativo",
      role: "Participante",
      startDate: "2024-01-15"
    },
    {
      id: 2,
      name: "Desafio Cálculo Avançado",
      status: "Ativo",
      role: "Staff",
      startDate: "2024-01-20"
    },
    {
      id: 3,
      name: "Rei da Derivada - Matemática I",
      status: "Ativo",
      role: "Participante",
      startDate: "2024-01-22"
    },
    {
        id: 4,
        name: "Torneio de Integrais - Turma B",
        status: "Ativo",
        role: "Participante",
        startDate: "2024-01-25"
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
    }, 2000);
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
            Você tem {activeEvents.length} evento{activeEvents.length > 1 ? 's' : ''} ativo{activeEvents.length > 1 ? 's' : ''} no momento.
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
                      isMobile ? (
                        <Badge 
                          count={event.role.charAt(0)}
                          style={{ 
                            backgroundColor: event.role === 'Staff' ? '#1890ff' : '#52c41a',
                            fontSize: '10px',
                            minWidth: '20px',
                            height: '20px',
                            lineHeight: '18px',
                            borderRadius: '50%'
                          }} 
                        />
                      ) : (
                        <Badge 
                          status="processing" 
                          color={getStatusColor(event.role)}
                        />
                      )
                    }
                    title={
                      isMobile ? (
                        <Text strong style={{ fontSize: 14 }}>
                          {event.name}
                        </Text>
                      ) : (
                        <div style={{ 
                          display: 'flex', 
                          alignItems: 'center',
                          gap: '8px'
                        }}>
                          <Text strong style={{ fontSize: 16 }}>
                            {event.name}
                          </Text>
                          <Badge 
                            count={event.role}
                            style={{ 
                              backgroundColor: event.role === 'Staff' ? '#1890ff' : '#52c41a',
                              fontSize: '10px'
                            }} 
                          />
                        </div>
                      )
                    }
                    description={
                      <Space size={4}>
                        <PlayCircleOutlined style={{ fontSize: 12, color: '#52c41a' }} />
                        <Text style={{ fontSize: 12, color: '#52c41a' }}>
                          Desde {new Date(event.startDate).toLocaleDateString('pt-BR')}
                        </Text>
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