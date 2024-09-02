import {Component} from 'react'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'

import {GrFormClose} from 'react-icons/gr'
import {BsSearch} from 'react-icons/bs'
import {GoPrimitiveDot} from 'react-icons/go'

import HeaderComponent from '../HeaderComponent'
import SideBar from '../SideBar'

import FailureViewComponent from '../FailureViewComponent'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  MainContainer,
  ContentContainer,
  BannerWrapper,
  BannerContent,
  BannerLogo,
  BannerMessage,
  BannerButton,
  BannerCloseIcon,
  MainContent,
  SearchBarContainer,
  SearchInput,
  SearchIconButton,
  StatusWrapper,
  LoaderWrapper,
  NoResultsImage,
  NoResultsText,
  RetryText,
  RetryButton,
  VideoList,
  VideoItem,
  VideoThumbnail,
  VideoLinkWrapper,
  VideoInfoContainer,
  ChannelLogo,
  VideoDetailsContainer,
  VideoTitle,
  VideoMetadata,
  ChannelName,
  VideoStatsContainer,
  VideoStatText,
  HiddenDot,
  Dot,
} from './StyledComponent'

const FetchStatus = {
  initial: 'INITIAL',
  loading: 'LOADING',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class Home extends Component {
  state = {
    showBanner: true,
    searchInput: '',
    videosList: [],
    dataFetchStatus: FetchStatus.initial,
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
    console.log(event.target.value)
  }

  componentDidMount = () => {
    this.getListOfVideosData()
  }

  getListOfVideosData = async () => {
    this.setState({dataFetchStatus: FetchStatus.loading})
    const {searchInput} = this.state
    const homeVideosApiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {authorization: `Bearer ${Cookies.get('jwt_token')}`},
    }
    const response = await fetch(homeVideosApiUrl, options)
    if (response.ok) {
      const data = await response.json()

      this.setState({dataFetchStatus: FetchStatus.success})
      this.setState({videosList: data.videos})
    }
    if (!response.ok) {
      this.setState({dataFetchStatus: FetchStatus.failure})
    }
  }

  closeBanner = () => {
    this.setState({showBanner: false})
  }

  renderVideosList = lightTheme => {
    const {dataFetchStatus, videosList} = this.state

    switch (dataFetchStatus) {
      case FetchStatus.loading:
        return (
          <StatusWrapper data-testid="loader" value={lightTheme}>
            <LoaderWrapper
              as={Loader}
              type="ThreeDots"
              color="#4f46e5"
              height="50"
              width="50"
            />
          </StatusWrapper>
        )
      case FetchStatus.failure:
        return (
          <StatusWrapper value={lightTheme}>
            <FailureViewComponent retryFunction={this.getListOfVideosData} />
          </StatusWrapper>
        )
      case FetchStatus.success:
        return (
          <>
            {videosList.length === 0 ? (
              <StatusWrapper value={lightTheme}>
                <NoResultsImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                  alt="no videos"
                />
                <NoResultsText value={lightTheme}>
                  No Search Results Found
                </NoResultsText>
                <RetryText>
                  Try different key words or remove search filter
                </RetryText>
                <RetryButton type="button" onClick={this.getListOfVideosData}>
                  Retry
                </RetryButton>
              </StatusWrapper>
            ) : (
              <VideoList>
                {videosList.map(each => {
                  const {channel} = each

                  return (
                    <VideoItem key={each.id}>
                      <VideoLinkWrapper as={Link} to={`/videos/${each.id}`}>
                        <VideoThumbnail
                          src={each.thumbnail_url}
                          alt="video thumbnail"
                        />
                        <VideoInfoContainer>
                          <ChannelLogo
                            src={channel.profile_image_url}
                            alt="channel logo"
                          />
                          <VideoDetailsContainer>
                            <VideoTitle value={lightTheme}>
                              {each.title}
                            </VideoTitle>
                            <VideoMetadata>
                              <ChannelName>{channel.name}</ChannelName>
                              <VideoStatsContainer>
                                <HiddenDot as={GoPrimitiveDot} />
                                <VideoStatText>
                                  {each.view_count} views
                                </VideoStatText>
                                <Dot as={GoPrimitiveDot} />
                                <VideoStatText>
                                  {formatDistanceToNow(
                                    new Date(each.published_at),
                                    {
                                      addSuffix: true,
                                    },
                                  )
                                    .split(' ')
                                    .reverse()
                                    .slice(0, 3)
                                    .reverse()
                                    .join(' ')}
                                </VideoStatText>
                              </VideoStatsContainer>
                            </VideoMetadata>
                          </VideoDetailsContainer>
                        </VideoInfoContainer>
                      </VideoLinkWrapper>
                    </VideoItem>
                  )
                })}
              </VideoList>
            )}
          </>
        )
      default:
        return null
    }
  }

  render() {
    const {showBanner} = this.state

    return (
      <>
        <HeaderComponent />
        <MainContainer>
          <SideBar />
          <NxtWatchContext.Consumer>
            {value => {
              const {lightTheme} = value
              return (
                <ContentContainer data-testid="home" value={lightTheme}>
                  {showBanner && (
                    <BannerWrapper data-testid="banner">
                      <BannerContent>
                        <BannerLogo
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <BannerMessage>
                          Buy Nxt Watch Premium prepaid plans with UPI
                        </BannerMessage>
                        <BannerButton type="button">GET IT NOW</BannerButton>
                      </BannerContent>
                      <div>
                        <BannerCloseIcon
                          type="button"
                          data-testid="close"
                          onClick={this.closeBanner}
                        >
                          <GrFormClose />
                        </BannerCloseIcon>
                      </div>
                    </BannerWrapper>
                  )}
                  <MainContent>
                    <SearchBarContainer>
                      <SearchInput
                        type="search"
                        placeholder="Search"
                        onChange={this.onChangeSearchInput}
                      />
                      <SearchIconButton
                        type="button"
                        data-testid="searchButton"
                        onClick={this.getListOfVideosData}
                      >
                        <BsSearch />
                      </SearchIconButton>
                    </SearchBarContainer>
                    <>{this.renderVideosList(lightTheme)}</>
                  </MainContent>
                </ContentContainer>
              )
            }}
          </NxtWatchContext.Consumer>
        </MainContainer>
      </>
    )
  }
}

export default Home
