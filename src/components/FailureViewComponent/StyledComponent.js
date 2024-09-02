import styled from 'styled-components'

export const ErrorImage = styled.img`
  width: 30%;
  min-width: 300px;
  margin: 0;
  background-color: ${({isLight}) => (isLight ? null : '#0f0f0f')};
`

export const ErrorMessage = styled.h1`
  font-size: 25px;
  margin-bottom: 0;
  color: ${({isLight}) => (isLight ? null : '#f4f4f4')};
`

export const TroubleText = styled.p`
  color: #475569;
  font-weight: 500;
`

export const RetryBtn = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  border: none;
  outline: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
`
