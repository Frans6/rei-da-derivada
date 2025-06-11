import React from 'react';
import { Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';

const SideMenu = ({ items, defaultSelected }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname.replace('/', '') || defaultSelected;

    const onClick = (e) => {
        navigate(`/${e.key}`);
    };

    return (
        <Menu
            onClick={onClick}
            selectedKeys={[currentPath]}
            mode="inline"
            style={{ 
                width: 256,
                height: '100%',
                borderRight: '1px solid #f0f0f0'
            }}
            items={items}
        />
    );
};

export default SideMenu;