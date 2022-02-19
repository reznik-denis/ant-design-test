import { Typography, Space, Switch, Divider, Row, Col  } from 'antd';
import { useState } from 'react';

const { Title, Paragraph: P, Link: L, Text } = Typography;

export default function Home() {
    const [ellipsis, setEllipsis] = useState(true);
    return <>
    <Typography>
    <P>
        In the process of internal desktop applications development, many different design specs and
        implementations would be involved, which might cause designers and developers difficulties and
        duplication and reduce the efficiency of development.
    </P>
    <P>
        In the process of internal desktop applications development, many different design specs and
        implementations would be involved, which might cause designers and developers difficulties and
        duplication and reduce the efficiency of development.
    </P>
    <Divider />
    <Row justify="start">
        <Col span={6}>
            <Title level={3}>Ant Design</Title>
            <P>
                <ul>
                    <li>
                        <L href="/">Item 1</L>
                    </li>
                    <li>
                        <L href="/">Item 2</L>
                    </li>
                    <li>
                        <L href="/">Item 3</L>
                    </li>
                </ul>
            </P>   
        </Col>
        <Col span={6}>
            <Space direction="vertical">
                <Text type="secondary">Ant Design (secondary)</Text>
                <Text type="success">Ant Design (success)</Text>
                <Text type="warning">Ant Design (warning)</Text>
                <Text type="danger">Ant Design (danger)</Text>
                <Text disabled>Ant Design (disabled)</Text>
                <Text mark>Ant Design (mark)</Text>
                <Text code>Ant Design (code)</Text>
                <Text keyboard>Ant Design (keyboard)</Text>
                <Text underline>Ant Design (underline)</Text>
                <Text delete>Ant Design (delete)</Text>
                <Text strong>Ant Design (strong)</Text>
                    <Text italic>Ant Design (italic)</Text>
                <L href="https://ant.design" target="_blank">Ant Design (Link)</L>
            </Space>
        </Col> 
        <Col span={12}>
             <Switch
            checked={ellipsis}
            onChange={() => {
            setEllipsis(!ellipsis);
                }}
            />
            <P ellipsis={ellipsis ? { rows: 2, expandable: true, symbol: 'more' } : false}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deleniti nisi suscipit temporibus architecto, eius, esse nemo quo perferendis illo magni, dolorem quasi eaque voluptas fugiat blanditiis omnis sequi in!
                Enim sed officia exercitationem adipisci animi quae. Pariatur, sapiente! Earum vero, sint maiores optio itaque quis perferendis aperiam illum necessitatibus harum magnam eligendi commodi recusandae illo, saepe odio quo dicta.
                Ullam id sit commodi nemo nisi ad soluta enim ut libero, eum vitae? Laboriosam provident pariatur quibusdam, repellat modi voluptatibus in adipisci magnam quia laudantium optio voluptate? Quia, alias iste.
                Officia eum repudiandae ipsum autem excepturi molestias dolorem voluptatem quae! Dolor cumque sapiente magni necessitatibus, laudantium aspernatur quia officiis non reiciendis ut ullam. Laudantium mollitia a minima, cumque earum ipsam.
                Libero ullam sequi sit eveniet autem sint amet voluptatem ut eaque blanditiis cupiditate esse fugiat eius, culpa eos et totam? Dicta id laborum fuga accusamus, cum fugiat qui maiores unde?
                Laborum ut necessitatibus modi commodi consequuntur et deleniti veritatis laudantium, suscipit voluptatibus unde eaque incidunt sunt totam accusantium! Libero quisquam culpa at sint nulla molestiae deleniti facere impedit maiores magnam.
                Adipisci beatae neque suscipit, dignissimos, reprehenderit ad tenetur voluptates enim magni eius eos nobis vero modi porro cupiditate eligendi. Hic quo autem similique, accusamus cupiditate magnam inventore corrupti magni molestias.
                Veritatis corporis ab, doloribus dolore hic aliquid, molestiae unde natus excepturi odio officiis nobis nisi! Voluptates mollitia accusantium officia nihil ratione temporibus qui esse obcaecati iusto! Excepturi aliquam alias aut.
                Delectus nam dicta nulla modi aspernatur, eos numquam fugiat molestiae. Officiis, a accusantium beatae sunt expedita eaque temporibus sit odio. Molestias hic vero ut a minima beatae quaerat dicta officiis!
                Deleniti voluptatibus dicta dolorem, id quas minus harum qui vitae, aperiam voluptatem nihil ipsa eius rem sint molestias enim ipsam eveniet excepturi rerum odio dolorum earum delectus eligendi. Placeat, tempore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda dolores impedit autem expedita, veniam odit porro nulla maxime et blanditiis quo debitis temporibus doloribus soluta itaque unde dicta, officia aliquam.
            </P>
        </Col>        
    </Row>
    <Divider />
    </Typography>
</>
}
    