import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  strong {
    margin-left: 10px;
    font-size: 18px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.darkCyan_2};
  }

  div p {
    display: inline-block;
    font-size: 10px;
    color: gray;
    margin-left: 10px;
  }
`;
