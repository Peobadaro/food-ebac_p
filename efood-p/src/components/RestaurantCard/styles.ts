import styled from 'styled-components'

export const Card = styled.div`
  background-color: #fff;
  border: 1px solid #e66767;
  padding: 8px;
  border-radius: 8px;
`

export const Image = styled.div`
  background-size: cover;
  background-position: center;
  height: 200px;
  border-radius: 8px 8px 0 0;
  position: relative;
`

export const Infos = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  gap: 4px;
`

export const Title = styled.h3`
  font-size: 18px;
  margin: 8px 0 4px;
`

export const Description = styled.p`
  font-size: 14px;
  color: #555;
`

export const Rating = styled.span`
  font-weight: bold;
  color: #e66767;
  font-size: 16px;
`
