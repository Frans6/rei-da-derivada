import { Button, Card, Col, Flex, Row, Typography, Grid } from "antd";
import { useNavigate } from 'react-router-dom';

const { Title, Paragraph, Text } = Typography;
const { useBreakpoint } = Grid;

export default function HomePage() {
  const navigate = useNavigate();
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  return (
    <div style={{ background: '#fff', minHeight: '100vh', padding: isMobile ? '20px' : '40px' }}>
      <Flex vertical align="center" gap={isMobile ? 24 : 40}>
        <Flex vertical align="center" gap={10}>
          <img
            src="https://rei-da-derivada.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.f28d5551.png&w=384&q=75"
            alt="Logo"
            style={{ height: isMobile ? 80 : 100 }}
          />
          <Title level={2} style={{ fontSize: isMobile ? 22 : 28, textAlign: "center" }}>
            Rei/Rainha da Derivada
          </Title>
        </Flex>

        <Flex vertical align="center" gap={16} style={{ maxWidth: 800, textAlign: 'center' }}>
          <Title level={1} style={{ fontSize: isMobile ? 22 : 28 }}>
            Uma Metodologia Ativa para Aprender com Engajamento
          </Title>
          <Paragraph style={{ fontSize: isMobile ? 14 : 16 }}>
            O Rei/Rainha da Derivada é mais do que um jogo — é uma estratégia de ensino que transforma a aprendizagem em uma experiência ativa, dinâmica e colaborativa. Ideal para ser adaptado a diversos conteúdos, de matemática a ciências humanas.
          </Paragraph>
          <Button
            type="default"
            size="large"
            style={{
              backgroundColor: '#fff',
              borderColor: '#1890ff',
              color: '#1890ff',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#096dd9';
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.borderColor = '#096dd9';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#fff';
              e.currentTarget.style.color = '#1890ff';
              e.currentTarget.style.borderColor = '#1890ff';
            }}
            onClick={() => navigate('/about')}
          >
            Saiba Mais
          </Button>



        </Flex>

        <Row gutter={[24, 24]} justify="center" style={{ marginTop: isMobile ? 20 : 40, width: '100%' }}>
          {[
            {
              title: 'Aprendizagem Ativa',
              description: 'Estimula o protagonismo do aluno com desafios que exigem pensamento crítico e colaboração.'
            },
            {
              title: 'Gamificação',
              description: 'A estrutura de “reinado” cria uma competição saudável, motivando alunos de diferentes perfis.'
            },
            {
              title: 'Multidisciplinar',
              description: 'Pode ser adaptado para qualquer área do conhecimento — não só cálculo!'
            },
          ].map((item, index) => (
            <Col key={index} xs={24} sm={12} md={7}>
              <Card
                title={<Text strong style={{ color: '#1890ff' }}>{item.title}</Text>}
                headStyle={{ backgroundColor: "#e6f7ff", minHeight: 40 }}
                bordered={false}
                hoverable
                style={{
                  height: 160,
                  transition: 'transform 0.3s, box-shadow 0.3s',
                }}
                bodyStyle={{ padding: 16 }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <Paragraph style={{ fontSize: 14, marginBottom: 0 }}>{item.description}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>

        <Flex vertical align="center" gap={16} style={{ marginTop: isMobile ? 40 : 60, padding: isMobile ? '0 10px' : 0 }}>
          <Paragraph style={{ fontSize: isMobile ? 16 : 18, textAlign: "center", maxWidth: 600 }}>
            Para participar do RRDD, entre com sua conta Google e comece agora sua jornada.
          </Paragraph>
          <Button
            type="primary"
            size="large"
            onClick={() => navigate('/initial')}
          >
            Entrar com Google
          </Button>
        </Flex>
      </Flex>
    </div>
  );
}
