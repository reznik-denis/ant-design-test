import { Row, Col, Slider } from 'antd';
import { useState } from 'react';

const gutters: {[k:number]:number} = {};
const vgutters: {[k:number]:number} = {};
const colCounts: {[k:number]:number} = {};

;[8, 16, 24, 32, 40, 48].forEach((value, i) => {
  gutters[i] = value;
});
;[8, 16, 24, 32, 40, 48].forEach((value, i) => {
  vgutters[i] = value;
});
;[2, 3, 4, 6, 8, 12].forEach((value, i) => {
  colCounts[i] = value;
});

export default function Columns () {
    const [gutterKey, setGutterKey] = useState(1);
    const [vgutterKey, setVgutterKey] = useState(1);
    const [colCountKey, setColCountKey] = useState(2);
    

  const onGutterChange = (gutterKey: number) => {
    setGutterKey(gutterKey);
  };

  const onVGutterChange = (vgutterKey: number) => {
    setVgutterKey(vgutterKey);
  };

  const onColCountChange = (colCountKey: number) => {
    setColCountKey(colCountKey);
    };
    
  const cols = [];
  const colCount = colCounts[colCountKey];
  for (let i = 0; i < colCount; i++) {
    cols.push(
      <Col key={i.toString()} span={24 / colCount}>
        <div>Column</div>
      </Col>,
    );
  }

 return (<>
            <span>Horizontal Gutter (px): </span>
            <div style={{ width: '50%' }}>
                <Slider
                    min={0}
                    max={Object.keys(gutters).length - 1}
                    value={gutterKey}
                    onChange={onGutterChange}
                    marks={gutters}
                    step={null}
                    tipFormatter={(value: any) => gutters[value]}
                />
            </div>
            <span>Vertical Gutter (px): </span>
            <div style={{ width: '50%' }}>
                <Slider
                    min={0}
                    max={Object.keys(vgutters).length - 1}
                    value={vgutterKey}
                    onChange={onVGutterChange}
                    marks={vgutters}
                    step={null}
                    tipFormatter={(value: any) => vgutters[value]}
                />
            </div>
            <span>Column Count:</span>
            <div style={{ width: '50%', marginBottom: 48 }}>
                <Slider
                    min={0}
                    max={Object.keys(colCounts).length - 1}
                    value={colCountKey}
                    onChange={onColCountChange}
                    marks={colCounts}
                    step={null}
                    tipFormatter={(value: any) => colCounts[value]}
                />
            </div>
            <Row  className='colums-slider' gutter={[gutters[gutterKey], vgutters[vgutterKey]]}>
                {cols}
                {cols}
            </Row>
 </>
 )
}