import styled from 'styled-components'

export const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => (props.value === true ? null : '#0f0f0f')};
`

export const LoginCard = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  box-shadow: 0px 0px 5px 5px #ebebeb;
  padding: 40px;
  border-radius: 10px;
`
export const LogoImage = styled.img`
  width: 50%;
  margin-bottom: 30px;
  align-self: center;
`

export const Label = styled.label`
  color: ${props => (props.value === true ? '#616e7c' : '#cccccc')};
  font-weight: 500;
  margin: 20px 0px 10px 0px;
`

export const InputField = styled.input`
  width: 100%;
  border: 1px solid #cbd5e1;
  font-size: 18px;
  padding: 10px;
  outline: none;
  border-radius: 5px;
`

export const ShowPasswordContainer = styled.div`
  margin: 10px 0px;
`
export const ShowPassword = styled.label`
  font-weight: 600;
  color: ${props => (props.value === false ? '#ebebeb' : null)};
`
export const LoginButton = styled.button`
  font-size: 15px;
  width: 100%;
  color: #ffffff;
  background-color: #3b82f6;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 10px;
  font-weight: bold;
  margin-top: 20px;
`
export const ErrorMessageText = styled.p`
  color: '#ff0000;
`
