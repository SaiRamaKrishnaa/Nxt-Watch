import {Component} from 'react'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import {SiYoutubegaming} from 'react-icons/si'
import Loader from 'react-loader-spinner'
import HeaderComponent from '../HeaderComponent'
import SideBar from '../SideBar'
import FailureViewComponent from '../FailureViewComponent'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  LayoutContainer,
  ContentWrapper,
  LoaderWrapper,
  GamingHeader,
  GamingIcon,
  GameListContainer,
  GameItemWrapper,
  GameLinkWrapper,
  GameThumbnail,
  GameTitle,
  GameStats,
  HeaderTitle,
} from './StyledComponent'

const FetchStatus = {
  initial: 'INITIAL',
  loading: 'LOADING',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class Gaming extends Component {
  state = {
    games: [],
    fetchStatus: FetchStatus.initial,
  }

  componentDidMount() {
    this.fetchGames()
  }

  fetchGames = async () => {
    this.setState({fetchStatus: FetchStatus.loading})
    try {
      const response = await fetch('https://apis.ccbp.in/videos/gaming', {
        method: 'GET',
        headers: {Authorization: `Bearer ${Cookies.get('jwt_token')}`},
      })

      if (response.ok) {
        const result = await response.json()
        this.setState({
          fetchStatus: FetchStatus.success,
          games: result.videos,
        })
      } else {
        this.setState({fetchStatus: FetchStatus.failure})
      }
    } catch {
      this.setState({fetchStatus: FetchStatus.failure})
    }
  }

  renderContent = lightTheme => {
    const {fetchStatus, games} = this.state

    switch (fetchStatus) {
      case FetchStatus.loading:
        return (
          <LoaderWrapper lightTheme={lightTheme}>
            <Loader type="ThreeDots" color="#4f46e5" height={50} width={50} />
          </LoaderWrapper>
        )
      case FetchStatus.FAILURE:
        return (
          <LoaderWrapper lightTheme={lightTheme}>
            <FailureViewComponent onRetry={this.fetchGames} />
          </LoaderWrapper>
        )
      case FetchStatus.success:
        return (
          <>
            <GamingHeader lightTheme={lightTheme}>
              <GamingIcon as={SiYoutubegaming} />
              <HeaderTitle lightTheme={lightTheme}>Gaming</HeaderTitle>
            </GamingHeader>
            <GameListContainer lightTheme={lightTheme}>
              {games.map(game => (
                <GameItemWrapper key={game.id}>
                  <GameLinkWrapper as={Link} to={`/videos/${game.id}`}>
                    <GameThumbnail src={game.thumbnail_url} alt="Thumbnail" />
                    <GameTitle lightTheme={lightTheme}>{game.title}</GameTitle>
                    <GameStats>{game.view_count} Watching</GameStats>
                    <GameStats>Worldwide</GameStats>
                  </GameLinkWrapper>
                </GameItemWrapper>
              ))}
            </GameListContainer>
          </>
        )
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <HeaderComponent />
        <LayoutContainer>
          <SideBar />
          <NxtWatchContext.Consumer>
            {({lightTheme}) => (
              <ContentWrapper lightTheme={lightTheme}>
                {this.renderContent(lightTheme)}
              </ContentWrapper>
            )}
          </NxtWatchContext.Consumer>
        </LayoutContainer>
      </>
    )
  }
}

export default Gaming
