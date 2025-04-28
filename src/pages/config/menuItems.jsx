import { 
    HomeOutlined,
    CalendarOutlined,
    PlusCircleOutlined
} from '@ant-design/icons';

export const initialPageMenu = [
    {
        label: 'Página Inicial',
        key: 'home',
        icon: <HomeOutlined />
    },
    {
        label: 'Meus Eventos',
        key: 'events',
        icon: <CalendarOutlined />,
        children: [
            {
                label: 'Teste 1',
                key: 'intro'
            },
            {
                label: 'Teste 2',
                key: 'basics'
            }
        ]
    },
    {
        label: 'Novo Evento',
        key: 'new-event',
        icon: <PlusCircleOutlined />
    }
];