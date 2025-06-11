import React, { useState } from 'react';
import { Card, Typography, Input, Button, Form, message } from 'antd';
import { TeamOutlined } from '@ant-design/icons';

const { Text, Paragraph } = Typography;

const StaffLoginComponent = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    setLoading(true);
    
    // Simulando uma operação assíncrona
    setTimeout(() => {
      console.log('Login de staff:', values);
      message.success('Login de staff realizado com sucesso!');
      form.resetFields();
      setLoading(false);
    }, 1000);
  };

  return (
    <Card
      title={<Text strong style={{ color: '#1890ff', fontSize: 20 }}>Entrar como Staff</Text>}
      headStyle={{ backgroundColor: "#e6f7ff", minHeight: 40 }}
      bordered={false}
      hoverable
      style={{ 
        width: '100%', 
        maxWidth: 400, 
        marginBottom: 24,
        transition: 'transform 0.3s, box-shadow 0.3s',
      }}
      bodyStyle={{ padding: 24 }}
      onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
      >
        <Paragraph style={{ fontSize: 14, marginBottom: 16 }}>
          Insira abaixo o e-mail utilizado na inscrição do evento e o token.
        </Paragraph>

        <Form.Item
          name="email"
          rules={[{ 
            required: true, 
            message: 'Por favor, insira o e-mail', 
            type: 'email'
          }]}
        >
          <Input 
            placeholder="Ex: example@email.com" 
            size="large"
            style={{ marginBottom: 16 }}
          />
        </Form.Item>

        <Form.Item
          name="token"
          rules={[{ required: true, message: 'Por favor, insira o token' }]}
        >
          <Input 
            placeholder="Ex: RRDD-TOKEN-1234" 
            size="large"
          />
        </Form.Item>

        <Form.Item style={{ marginBottom: 0, marginTop: 16 }}>
          <Button
            type="primary"
            htmlType="submit"
            icon={<TeamOutlined />}
            loading={loading}
            block
            size="large"
          >
            Entrar como Staff
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default StaffLoginComponent;