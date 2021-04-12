import styled from 'styled-components';

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  p {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 14px;
  }

  * {
    margin-left: 10px;
  }
`;

export const HotNews = styled.span<{ isNew?: boolean }>`
  display: block;
  padding: 5px;
  font-size: 10px;
  background-color: ${({ theme, isNew }) =>
    isNew ? theme.colors.primary : theme.colors.darkCyan_2};
  text-transform: uppercase;
  color: #fff;
  border-radius: 10px;
`;
