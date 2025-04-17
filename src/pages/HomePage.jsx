import { Button, Card, Col, Flex, Row, Typography } from "antd";
import { useNavigate } from 'react-router-dom';
const { Title, Paragraph, Text } = Typography;

export default function HomePage() {
  const navigate = useNavigate();
    
      return (
        <Flex vertical align="center" gap={40} style={{ padding: 40 }}>
          {/* Logo e Título */}
          <Flex vertical align="center" gap={10}>
            <img
              src="https://rei-da-derivada.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.f28d5551.png&w=384&q=75"
              alt="Logo"
              style={{ height: 60 }}
            />
            <Title level={2}>Rei/Rainha da Derivada</Title>
          </Flex>
    
          {/* Texto principal */}
          <Flex vertical align="center" gap={16}>
            <Title level={1}>ALGUM TEXTO AQUI</Title>
            <Button type="primary" onClick={() => navigate('/about')}>Saiba Mais</Button>
          </Flex>
    
          {/* Cartões de Objetivo */}
          <Row gutter={16} justify="center">
            {[1, 2, 3].map((item) => (
              <Col key={item} xs={24} sm={12} md={6}>
                <Card
                  title={<Text strong style={{ color: '#1890ff' }}>Objetivo</Text>}
                  headStyle={{ backgroundColor: "#e6f7ff" }}
                  bordered={false}
                >
                  <Paragraph>Incentivar o estudo do cálculo de forma dinâmica</Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
    
          {/* Texto final e botão Google */}
          <Flex vertical align="center" gap={16}>
            <Paragraph style={{ fontSize: 18, textAlign: "center" }}>
              ALGO DO TIPO, PARA PARTICIPAR DO RRDD<br />
              ENTRE COM SUA CONTA GOOGLE
            </Paragraph>
            <Button type="primary">Entrar com Google</Button>
          </Flex>
        </Flex>
      );
    }