import React, { useState } from 'react';
import { Card, Typography, List, Button, Badge, Space, Grid, Divider } from 'antd';
import { CheckCircleOutlined, EyeOutlined, ReloadOutlined, TrophyOutlined } from '@ant-design/icons';

const { Text, Paragraph } = Typography;
const { useBreakpoint } = Grid;

const PastEventsComponent = () => {
  const screens = useBreakpoint();
  const isMobile = !screens.md;
  const [loading, setLoading] = useState(false);

  // Dados mockados para eventos passados
  const [pastEvents, setPastEvents] = useState([
    {
      id: 1,
      name: "Campeonato de Derivadas - Turma C",
      status: "Finalizado",
      role: "Participante",
      endDate: "2024-01-10",
      result: "2º Lugar"
    },
    {
      id: 2,
      name: "Desafio Limites Infinitos",
      status: "Finalizado",
      role: "Staff",
      endDate: "2024-01-05",
      result: ""
    },
    {
      id: 3,
      name: "Torneio de Integrais - Turma A",
      status: "Finalizado",
      role: "Participante",
      endDate: "2023-12-28",
      result: "1º Lugar"
    },
    {
      id: 4,
      name: "Rei da Derivada - Matemática II",
      status: "Finalizado",
      role: "Participante",
      endDate: "2023-12-15",
      result: "3º Lugar"
    }
  ]);

  const handleViewEvent = (eventId) => {
    console.log('Visualizar evento passado:', eventId);
    // Aqui você implementaria a navegação para os resultados do evento
  };

  const handleRefresh = () => {
    setLoading(true);
    // Simula uma chamada de API
    setTimeout(() => {
      console.log('Lista de eventos passados atualizada');
      setLoading(false);
    }, 2000);
  };

  const getStatusColor = (role) => {
    return role === 'Staff' ? 'blue' : 'green';
  };

  const getResultColor = (result) => {
    if (result.includes('1º')) return '#ffd700';
    if (result.includes('2º')) return '#c0c0c0';
    if (result.includes('3º')) return '#cd7f32';
    return '#52c41a';
  };

  return (
    <Card
      title={
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ color: '#1890ff', fontSize: 18, fontWeight: 700 }}>Eventos Passados</Text>
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
      {pastEvents.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '20px 0' }}>
          <Paragraph style={{ fontSize: 14, color: '#999' }}>
            Nenhum evento passado encontrado
          </Paragraph>
        </div>
      ) : (
        <>
          <Paragraph style={{ fontSize: 14, marginBottom: 16 }}>
            Você participou de {pastEvents.length} evento{pastEvents.length > 1 ? 's' : ''} finalizado{pastEvents.length > 1 ? 's' : ''}.
          </Paragraph>
          
          <List
            dataSource={pastEvents}
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
                      icon={<EyeOutlined />}
                      onClick={() => handleViewEvent(event.id)}
                      size="small"
                      style={{ 
                        backgroundColor: '#52c41a',
                        borderColor: '#52c41a',
                        borderRadius: '6px',
                        fontWeight: 500,
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#73d13d';
                        e.currentTarget.style.borderColor = '#73d13d';
                        e.currentTarget.style.transform = 'translateY(-1px)';
                        e.currentTarget.style.boxShadow = '0 4px 8px rgba(82, 196, 26, 0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#52c41a';
                        e.currentTarget.style.borderColor = '#52c41a';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      {isMobile ? '' : 'Ver Resultado'}
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
                          status="success" 
                          color={getStatusColor(event.role)}
                        />
                      )
                    }
                    title={
                      isMobile ? (
                        <div style={{ 
                          display: 'flex', 
                          flexDirection: 'column', 
                          gap: '6px',
                          alignItems: 'center',
                          textAlign: 'center'
                        }}>
                          <Text strong style={{ fontSize: 14 }}>
                            {event.name}
                          </Text>
                          <Badge 
                            count={event.result}
                            style={{ 
                              backgroundColor: getResultColor(event.result),
                              color: '#000',
                              fontSize: '9px',
                              fontWeight: 'bold'
                            }} 
                          />
                        </div>
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
                          <Badge 
                            count={event.result}
                            style={{ 
                              backgroundColor: getResultColor(event.result),
                              color: '#000',
                              fontSize: '10px'
                            }} 
                          />
                        </div>
                      )
                    }
                    description={
                      <Space size={4}>
                        <CheckCircleOutlined style={{ fontSize: 12, color: '#52c41a' }} />
                        <Text style={{ fontSize: 12, color: '#52c41a' }}>
                          Finalizado em {new Date(event.endDate).toLocaleDateString('pt-BR')}
                        </Text>
                      </Space>
                    }
                  />
                </List.Item>
                {index < pastEvents.length - 1 && (
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

export default PastEventsComponent;