import { Button, Card, Space } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <Card title="Home Page">
      <Space>
        <Button 
          type="primary" 
          onClick={() => navigate('/about')}
        >
          Learn More
        </Button>
      </Space>
    </Card>
  );
}