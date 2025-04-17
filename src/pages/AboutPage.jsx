import { Button, Card, Space, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <Card title="About Us">
      <Title level={4}>Project Information</Title>
      <p>This is the detailed information page.</p>
      <Space>
        <Button onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </Space>
    </Card>
  );
}