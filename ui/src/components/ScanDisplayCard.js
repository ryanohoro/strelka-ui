import React, { useState } from "react";

import { Button, Typography } from "antd";
import { DataDisplayObj } from "../components/DataDisplay";

const { Title, Text } = Typography;

const ScanDisplayCard = ({ scanner_name, data }) => {
  const [expanded, setExpanded] = useState(false);

  const item_key = scanner_name
    .match(/Scan(.+)/)
    .map((v) => v.toLowerCase())[1]

  const scanner_key = "scan_" + item_key

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%"
        }}
      >
        <div>
          <Typography>
            <Title level={5}>{scanner_name}</Title>
            <Text>Took {data[scanner_key].elapsed} seconds</Text>
          </Typography>
        </div>
        <div>
          <Button onClick={() => setExpanded(!expanded)}>{expanded ? "Hide" : "Show"}</Button>
        </div>
      </div>
        <div style={{
            height: expanded ? "auto" : "0px",
            overflowX: "auto",
            width: "100%"
        }}>
            <br />
        <DataDisplayObj
          value={
            data[scanner_key]
          }
        />
        </div>
      <br />
    </div>
  );
};

export default ScanDisplayCard;
