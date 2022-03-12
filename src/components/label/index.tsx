import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import './label.scss';

interface LabelContentProps {
  colorValue?: string;
}

const LabelContent = styled.div`
  background-color: ${({ colorValue }: LabelContentProps): string =>
    colorValue ? colorValue : '#000000'};
`;

const Label = (): ReactElement => {
  const [labelValue, setLabelValue] = useState('');
  const [colorValue, setColorValue] = useState('#000000');

  return (
    <section className="label-container">
      <div className="label-modifiers">
        <input type="text" value={labelValue} onChange={e => setLabelValue(e.target.value)} />
        <input type="text" value={colorValue} onChange={e => setColorValue(e.target.value)} />
      </div>
      <LabelContent colorValue={colorValue}>{labelValue}</LabelContent>
    </section>
  );
};

export default Label;
