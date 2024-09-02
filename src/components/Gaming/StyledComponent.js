import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
`

export const ContentWrapper = styled.div`
  background-color: ${props => (props.lightTheme ? '#f9f9f9' : '#0f0f0f')};
  padding: 0;
  flex-grow: 1;
`

export const LoaderWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 97vh;
  background-color: ${props => (props.lightTheme ? '#f9f9f9' : '#0f0f0f')};

  @media screen and (min-width: 768px) {
    height: 100%;
  }
`

export const GamingHeader = styled.div`
  display: flex;
  align-items: center;
  color: ${props => (props.lightTheme ? '#000000' : '#ffffff')};
  background-color: ${props => (props.lightTheme ? '#f9f9f9' : '#0f0f0f')};
  padding-left: 10px;
  margin: 0;
`

export const GamingIcon = styled.p`
  background-color: #e2e8f0;
  font-size: 50px;
  padding: 10px;
  border-radius: 25px;
  margin: 10px;
  color: #ff0b37;
`

export const HeaderTitle = styled.h1`
  color: ${props => (props.lightTheme ? '#000000' : '#ffffff')};
`

export const GameListContainer = styled.ul`
  padding-left: 0;
  list-style: none;
  width: 100%;
  background-color: ${props => (props.lightTheme ? '#f9f9f9' : '#0f0f0f')};
  margin: 0;
  display: flex;
  flex-wrap: wrap;

  @media screen and (min-width: 576px) {
    padding-left: 20px;
    padding-top: 20px;
    height: 110vh;
    overflow-y: scroll;
  }
`

export const GameItemWrapper = styled.div`
  width: 40%;
  margin-right: 20px;

  @media screen and (min-width: 576px) {
    margin-bottom: 20px;
    margin-right: 3%;
    width: 30%;
  }
`

export const GameLinkWrapper = styled.div`
  text-decoration: none;
`

export const GameThumbnail = styled.img`
  width: 100%;
  @media screen and (min-width: 576px) {
    padding-top: 20px;
  }
`

export const GameTitle = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  padding: 0;
  color: ${props => (props.lightTheme ? '#000000' : '#ffffff')};
`

export const GameStats = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #7e858e;
  padding: 0;
  margin: 0;
`
