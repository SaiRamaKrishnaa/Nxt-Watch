import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
`
export const ContentContainer = styled.div`
  background-color: ${props => (props.value === true ? '#f9f9f9' : '#181818')};
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 576px) {
    height: 120vh;
    overflow-y: scroll;
  }
`

export const BannerWrapper = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  margin: 0;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  min-height: 230px;
`

export const BannerContent = styled.div`
  width: 90%;
  @media screen and (min-width: 768px) {
    width: 60%;
  }
`
export const BannerLogo = styled.img`
  width: 30%;
`
export const BannerMessage = styled.p`
  font-size: 20px;
  color: #1e293b;
  font-weight: 500;
  margin-bottom: 40px;
`
export const BannerButton = styled.button`
  background-color: transparent;
  padding: 8px;
  border: 1.5px solid #00306e;
  color: #00306e;
  font-weight: bold;
  outline: orange;
  cursor: pointer;
`
export const BannerCloseIcon = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 20px;
`
export const MainContent = styled.div`
  padding: 0;
  flex-grow: 1;
  @media screen and (min-width: 576px) {
    padding: 20px;
  }
`
export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  @media screen and (min-width: 576px) {
    width: 70%;
    justify-content: flex-start;
  }
  @media screen and (min-width: 768px) {
    width: 60%;
  }
`

export const SearchInput = styled.input`
  width: 80%;
  height: 35px;
  font-size: 16px;
  border: 1px solid #cccccc;
  outline: none;
  padding: 10px;
`
export const SearchIconButton = styled.button`
  cursor: pointer;
  height: 35px;
  width: 60px;
  background-color: #f4f4f4;
  border: 1px solid #cccccc;
  outline: none;
`
export const StatusWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 97vh;
  background-color: ${props => (props.value === true ? '#f9f9f9' : '#181818')};

  @media screen and (min-width: 768px) {
    height: 100%;
  }
`
export const LoaderWrapper = styled.div`
  display: flex;
`
export const NoResultsImage = styled.img`
  width: 30%;
  min-width: 300px;
  margin: 0;
`
export const NoResultsText = styled.h1`
  font-size: 25px;
  margin-bottom: 0;
  color: ${props => (props.value === true ? null : '#ffffff')};
`

export const RetryText = styled.p`
  color: #475569;
  font-weight: 500;
`
export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  border: none;
  outline: none;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
`

export const VideoList = styled.ul`
  padding-left: 0;
  list-style-type: none;
  width: 100%;

  @media screen and (min-width: 576px) {
    display: flex;
    flex-wrap: wrap;
  }
`
export const VideoItem = styled.li`
  width: 100%;

  @media screen and (min-width: 576px) {
    width: 47%;
    margin-bottom: 40px;
    margin-right: 15px;
  }
  @media screen and (min-width: 768px) {
    width: 30%;
    margin-right: 16px;
  }
`
export const VideoThumbnail = styled.img`
  width: 100%;
`
export const VideoLinkWrapper = styled.div`
  text-decoration: none;
`
export const VideoInfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
`
export const ChannelLogo = styled.img`
  width: 10%;
  margin-top: 20px;
`

export const VideoDetailsContainer = styled.div`
  padding-left: 15px;
  margin: 0;
  padding-top: 0px;
`
export const VideoTitle = styled.p`
  color: ${props => (props.value === true ? '#1e293b' : '#f1f1f1')};
  font-weight: 600;
  margin-bottom: 0;
  padding-bottom: 0;
`
export const VideoMetadata = styled.div`
  color: #475569;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  @media screen and (min-width: 576px) {
    flex-wrap: wrap;
  }
`

export const ChannelName = styled.p`
  padding-top: 0;
  padding-right: 5px;
  padding-bottom: 10px;
  margin-top: 0;
  margin-bottom: 0;
  @media screen and (min-width: 576px) {
    width: 100%;
    padding-bottom: 0;
  }
`
export const VideoStatsContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 0;
  margin-top: 0;
`

export const VideoStatText = styled.p`
  margin-top: 0px;
  padding-top: 5px;
  padding-right: 5px;
`

export const HiddenDot = styled.p`
  padding-right: 5px;
  padding-bottom: 5px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const Dot = styled.p`
  padding-right: 5px;
  padding-bottom: 5px;
`

export const FailureImage = styled.img`
  width: 30%;
  min-width: 300px;
  margin: 0;
`

export const ErrorText = styled.h1`
  font-size: 25px;
  margin-bottom: 0;
`

export const TroubleText = styled.p`
  color: #475569;
  font-weight: 500;
`
