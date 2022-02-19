import { Link } from "react-router-dom";
import { Menu } from 'antd';
import {
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  InsertRowRightOutlined,
} from '@ant-design/icons';

export default function Navigation() {
  return <Menu
          defaultSelectedKeys={['1']}
          mode="inline"
          theme="dark"
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
             <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            <Link to="/button">Button</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<InsertRowRightOutlined />}>
            <Link to="/colums">Colums</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<ContainerOutlined />}>
            <Link to="/page-header">Page header</Link>
          </Menu.Item>
        </Menu>
}

