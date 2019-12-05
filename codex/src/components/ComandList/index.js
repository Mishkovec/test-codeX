import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

function ComandListComponent (e) {  
        return (
            <div>
                <Title level={2}>Command List</Title>
                <Title level={4}>C w h</Title>
                <Title level={4}>L x1 y1 x2 y2</Title>
                <Title level={4}>R x1 y1 x2 y2</Title>
                <Title level={4}>B x y c</Title>
                <Title level={2}>Commands Example</Title>
                <Title level={4}>C 20 4 - create canvas</Title>
                <Title level={4}>L 1 2 6 2 - create line</Title>
                <Title level={4}>R 16 1 20 3 - create rechtangle</Title>
                <Title level={4}>B 10 3 o - bucket fill (color o)</Title>
                <Title level={3}>!!! BucketFill only for empty areas</Title>
            </div> 
        )
}
export default ComandListComponent;