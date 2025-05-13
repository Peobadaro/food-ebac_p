import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderBar = styled.header`
  background-color: #fff;
  padding: 16px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  border-bottom: 1px solid #eee;
`

export const Logo = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #e66767;
`

export const BackLink = styled(Link)`
  font-size: 16px;
  color: #e66767;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`
