import React from "react";
import { Card } from "antd";

export default function CardTemplate(props) {
  const { data } = props;
  return (
    <div>
      {data.map((item, index) => {
        return (
          <Card
            key={index}
            title={item.title}
            type="inner"
            className={item.className}
          >
            <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
          </Card>
        );
      })}
    </div>
  );
}
