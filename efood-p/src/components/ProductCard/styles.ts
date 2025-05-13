import styled from 'styled-components'

export const Card = styled.div`
  background-color: #fff;
  border: 1px solid #e66767;
  padding: 8px;
`

export const Image = styled.div`
  height: 200px;
  background-size: cover;
  background-position: center;
  position: relative;
`

export const TagContainer = styled.div`
  background-color: #e66767;
  color: #fff;
  font-size: 12px;
  padding: 4px 8px;
  position: absolute;
  right: 8px;
  top: 8px;
  border-radius: 4px;
`

export const Infos = styled.div`
  padding: 8px 0;
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  margin-bottom: 8px;
  color: #555;
`

export const Rating = styled.span`
  font-size: 14px;
  color: #e66767;
  font-weight: bold;
`
