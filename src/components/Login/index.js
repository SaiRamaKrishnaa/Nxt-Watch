import {Component} from 'react'

import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  LoginPage,
  LoginCard,
  LogoImage,
  Label,
  InputField,
  ShowPassword,
  LoginButton,
  ShowPasswordContainer,
  ErrorMessageText,
} from './StyledComponent'

class Login extends Component {
  state = {
    showPassword: false,
    username: '',
    password: '',
    showErrorMessage: false,
    errorMessage: '',
  }

  onChangeShowPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  userAuthentication = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const response = await fetch('https://apis.ccbp.in/login', {
      method: 'POST',
      body: JSON.stringify(userDetails),
    })
    const data = await response.json()
    if (response.ok) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 20})
      const {history} = this.props
      history.replace('/')
    }
    if (!response.ok) {
      this.setState({showErrorMessage: true, errorMessage: data.error_msg})
    }
  }

  render() {
    if (Cookies.get('jwt_token') !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {lightTheme, getThemeAttributes} = value
          const {showPassword, showErrorMessage} = this.state
          const {errorMessage} = this.state

          const passwordInputType = showPassword ? 'text' : 'password'

          const {logoImage, logoAlt} = getThemeAttributes()

          return (
            <LoginPage value={lightTheme}>
              <LoginCard onSubmit={this.userAuthentication}>
                <LogoImage src={logoImage} alt={logoAlt} />

                <Label value={lightTheme} htmlFor="inputUsername">
                  USERNAME
                </Label>
                <InputField
                  type="text"
                  id="inputUsername"
                  placeholder="Username"
                  onChange={this.onChangeUsername}
                />

                <Label value={lightTheme} htmlFor="inputPassword">
                  PASSWORD
                </Label>
                <InputField
                  type={passwordInputType}
                  id="inputPassword"
                  placeholder="Password"
                  onChange={this.onChangePassword}
                />

                <ShowPasswordContainer>
                  <input
                    id="showPasswordInputField"
                    type="checkbox"
                    onChange={this.onChangeShowPassword}
                  />
                  <ShowPassword
                    value={lightTheme}
                    htmlFor="showPasswordInputField"
                  >
                    Show Password
                  </ShowPassword>
                </ShowPasswordContainer>
                <LoginButton type="submit">Login</LoginButton>
                {showErrorMessage && (
                  <ErrorMessageText>*{errorMessage}</ErrorMessageText>
                )}
              </LoginCard>
            </LoginPage>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Login
