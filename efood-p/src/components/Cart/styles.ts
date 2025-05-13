import styled from 'styled-components'

export const CartButton = styled.button`
  position: fixed;
  top: 16px;
  right: 16px;
  background: #e66767;
  color: white;
  border: none;
  padding: 10px 14px;
  border-radius: 8px;
  cursor: pointer;
  z-index: 10;
`

export const CartBox = styled.div`
  position: fixed;
  top: 60px;
  right: 16px;
  background: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  max-width: 300px;
  z-index: 9;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 8px;
  }
`
