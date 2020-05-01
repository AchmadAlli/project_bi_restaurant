import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100% - 240px);
  margin-left: auto;
  padding: 24px 0;
  z-index: 9999;
`;

export const Legal = styled.p`
  font-size: .9em;
  color: #4A4A4A;
`;
