import { Button, Tooltip, Radio, Space } from 'antd';
import { SearchOutlined, DownloadOutlined, PoweroffOutlined } from '@ant-design/icons';
import {RadioChangeEvent} from 'antd/es';
import { ButtonSize } from 'antd/es/button';
import { useState } from 'react';
import '../App.css';

type T = boolean;

function Buttonlayouts() {
  const [size, setSize] = useState<ButtonSize>("large");
  const [loadings, setLoadings] = useState<Array<T>>([]);

  const handleSizeChange = (e: RadioChangeEvent) => {
    setSize(e.target.value);
  };

  const enterLoading = (index: number) => {
    setLoadings((loadings) => {
      const newLoadings = [...loadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((loadings) => {
        const newLoadings = [...loadings];
        newLoadings[index] = false;

        return newLoadings;
      });
    }, 6000);
  };

  return (
    <div className="App">
      <h1>Test Ant Design</h1>
      <Tooltip title="search">
        <Button type="primary" icon={<SearchOutlined />}>Primary Button</Button>
      </Tooltip>
      <br />
      <br />
      <br />
      <Radio.Group value={size} onChange={handleSizeChange}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
      </Radio.Group>
      <br />
        <br />
        <Button type="primary" size={size}>
          Primary
        </Button>
        <Button size={size}>Default</Button>
        <Button type="dashed" size={size}>
          Dashed
        </Button>
        <br />
        <Button type="link" size={size}>
          Link
        </Button>
        <br />
        <Button type="primary" icon={<DownloadOutlined />} size={size} />
        <Button type="primary" shape="circle" icon={<DownloadOutlined />} size={size} />
        <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size} disabled/>
        <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size} danger>
          Download
        </Button>
        <Button type="primary" icon={<DownloadOutlined />} size={size}>
          Download
        </Button>
      <br />
      <br />
      <br />
        <Space>
          <Button type="primary" loading>
            Loading
          </Button>
        </Space>

        <Space>
          <Button type="primary" loading={loadings[0]} onClick={() => enterLoading(0)}>
            Click me!
          </Button>
          <Button
            type="primary"
            icon={<PoweroffOutlined />}
            loading={loadings[1]}
            onClick={() => enterLoading(1)}
          >
            Click me!
          </Button>
          <Button
            type="primary"
            icon={<PoweroffOutlined />}
            loading={loadings[2]}
            onClick={() => enterLoading(2)}
          />
        </Space>
    </div>
  );
}

export default Buttonlayouts;