import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Description = styled.p`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Btn = styled(Link)`
  margin-left: 15px;
  max-width: 70px;
  display: inline-flex;
  justify-content: center;
  background-color: #b19cd9;
  color: #fff;
  padding: 5px 15px;
  border: none;
  text-decoration: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #9376b0;
  }
`;
