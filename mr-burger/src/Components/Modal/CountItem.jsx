import React from 'react';
import styled from 'styled-components';

const CountWrapper = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  margin-top: 20px;
`;

const CountInput = styled.input`
	width: 100px;
	font-size: 20px;
`;

const ButtonCount = styled.button`
	background-color: transparent;
	width: 24px;
`;

export const CountItem = function ({ count, setCount, onChange }) {
  return (
    <CountWrapper>
      <span>Amount</span>
			<div>
				<ButtonCount disabled={count <= 1} onClick={() => setCount(count - 1)}>
        -
      	</ButtonCount>
      	<CountInput type="number" min="1" value={count <1 ? 1 : count} onChange={onChange} />
      	<ButtonCount onClick={() => setCount(count + 1)}> + </ButtonCount>
			</div>
     
    </CountWrapper>
  );
};