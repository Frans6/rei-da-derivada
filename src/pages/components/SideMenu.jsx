import React, { useState } from 'react';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';

const SideMenu = ({ items, defaultSelected }) => {
    const [current, setCurrent] = useState(defaultSelected);
    const navigate = useNavigate();

    const onClick = (e) => {
        setCurrent(e.key);
        navigate(`/${e.key}`);
    };

    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
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