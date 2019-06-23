import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components/macro';

export default function PanelGroup() {
  const [expand, setExpand] = useState(false);
  const [height, setHeight] = useState(0);
  const panelBodyRef = useRef();

  useEffect(() => {
    if (expand) {
      setHeight(panelBodyRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [expand]);

  return (
    <div>
      <Panel>
        <PanelHeading
          onClick={() => {
            setExpand(!expand);
          }}
        >
          <PanelTitle>
            <a href="#collapseOne">Collapsible Group Item #1</a>
          </PanelTitle>
        </PanelHeading>
        <Collapsing
          ref={panelBodyRef}
          style={{
            height: `${height}px`,
          }}
        >
          <PanelBody>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. 3 wolf moon officia aute, non cupidatat
            skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
            Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid
            single-origin coffee nulla assumenda shoreditch et. Nihil anim
            keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
            sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings
            occaecat craft beer farm-to-table, raw denim aesthetic synth
            nesciunt you probably haven't heard of them accusamus labore
            sustainable VHS.
          </PanelBody>
        </Collapsing>
      </Panel>
    </div>
  );
}

const Panel = styled.div`
  margin-bottom: 0px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
`;

const PanelHeading = styled.div`
  font-size: 14px;
  color: #333;
  background-color: #f5f5f5;
  padding: 10px 15px;
`;

const PanelTitle = styled.h4`
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 0;

  a {
    text-decoration: none;
    color: rgb(51, 51, 51);
  }
`;

const PanelBody = styled.div`
  padding: 15px;
  border-top: 1px solid #ddd;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`;

const Collapsing = styled.div`
  overflow: hidden;
  transition-property: height;
  transition-duration: 3s;
  transition-timing-function: ease;
`;
