import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

export const Main = styled.div`
  margin-left: 56px;
  flex: 1 1 auto;
  width: calc(100vw - 56px);
  transition: all 0.3s ease-in-out, margin 0ms linear;
`;
