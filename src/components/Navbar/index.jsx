import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SwitchButton from '../SwitchButton';
import { Menu } from 'antd';
import { HomeOutlined, AppstoreOutlined, TeamOutlined } from '@ant-design/icons';
import ThemeContext from '../../ThemeContext';
import '../../App.scss';

const Navbar = () => {
  const theme = useContext(ThemeContext);
  return (
    <Menu mode="horizontal" theme={theme.currentTheme} style={{ display: 'flex', justifyContent:"space-between", alignItems:"center"}}>
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <Link to={`/`}>Home</Link>
        </Menu.Item>
        <Menu.Item key="about" icon={<TeamOutlined />}>
          <Link to={`/about`}>L'agence</Link>
        </Menu.Item>
        <Menu.Item key="works" icon={<AppstoreOutlined />}>
          <Link to={`/works`}>Nos projets</Link>
        </Menu.Item>
      <SwitchButton/>
    </Menu>
  )
}
export default Navbar;