import {Component} from 'react'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'

import {GoPrimitiveDot} from 'react-icons/go'
import {HiFire} from 'react-icons/hi'

import HeaderComponent from '../HeaderComponent'
import SideBar from '../SideBar'
import FailureViewComponent from '../FailureViewComponent'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  MainContentWrapper,
  StatusWrapper,
  TrendingWrapper,
  LoaderWrapper,
  TrendingHeader,
  TrendingIcon,
  VideoListContainer,
  VideoItemWrapper,
  VideoThumbnail,
  VideoLinkWrapper,
  VideoInfoWrapper,
  ChannelLogo,
  VideoDetailsWrapper,
  VideoTitle,
  VideoStats,
  ChannelName,
  StatsWrapper,
  HiddenDot,
  Dot,
  StatsText,
} from './StyledComponent'

const FetchStatus = {
  initial: 'INITIAL',
  loading: 'LOADING',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class Trending extends Component {
  state = {
    listOfVideosDetails: [],
    dataFetchStatus: FetchStatus.initial,
  }

  componentDidMount = () => {
    this.getListOfVideosData()
  }

  getListOfVideosData = async () => {
    this.setState({dataFetchStatus: FetchStatus.loading})
    const response = await fetch('https://apis.ccbp.in/videos/trending', {
      method: 'GET',
      headers: {authorization: `Bearer ${Cookies.get('jwt_token')}`},
    })
    if (response.ok) {
      const data = await response.json()

      this.setState({
        listOfVideosDetails: data.videos,
        dataFetchStatus: FetchStatus.success,
      })
    } else {
      this.setState({dataFetchStatus: FetchStatus.failure})
    }
  }

  renderContent = lightTheme => {
    const {dataFetchStatus, listOfVideosDetails} = this.state

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
            <TrendingHeader value={lightTheme}>
              <TrendingIcon as={HiFire} />
              <h1>Trending</h1>
            </TrendingHeader>

            <VideoListContainer theme={lightTheme} data-testid="trending">
              {listOfVideosDetails.map(each => {
                const {channel} = each

                return (
                  <VideoItemWrapper key={each.id}>
                    <VideoLinkWrapper as={Link} to={`/videos/${each.id}`}>
                      <VideoThumbnail
                        src={each.thumbnail_url}
                        alt="video thumbnail"
                      />
                      <VideoInfoWrapper>
                        <ChannelLogo
                          src={channel.profile_image_url}
                          alt="channel logo"
                        />
                        <VideoDetailsWrapper>
                          <VideoTitle value={lightTheme}>
                            {each.title}
                          </VideoTitle>
                          <VideoStats>
                            <ChannelName>{channel.name}</ChannelName>
                            <StatsWrapper>
                              <HiddenDot as={GoPrimitiveDot} />
                              <StatsText>{each.view_count} views</StatsText>
                              <Dot as={GoPrimitiveDot} />
                              <StatsText>
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
                              </StatsText>
                            </StatsWrapper>
                          </VideoStats>
                        </VideoDetailsWrapper>
                      </VideoInfoWrapper>
                    </VideoLinkWrapper>
                  </VideoItemWrapper>
                )
              })}
            </VideoListContainer>
          </>
        )
      default:
        return null
    }
  }

  render() {
    return (
      <div>
        <HeaderComponent />
        <MainContentWrapper>
          <SideBar />
          <NxtWatchContext.Consumer>
            {value => {
              const {lightTheme} = value

              return (
                <TrendingWrapper data-testid="trending">
                  {this.renderContent(lightTheme)}
                </TrendingWrapper>
              )
            }}
          </NxtWatchContext.Consumer>
        </MainContentWrapper>
      </div>
    )
  }
}

export default Trending
