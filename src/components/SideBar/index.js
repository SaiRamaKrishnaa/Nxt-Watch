import {Link, withRouter} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  NavigationMenuContainerWrapper,
  NavigationItemsContainer,
  EachNavigationContainer,
  NavigationRouteNames,
  NavigationContactContainer,
  NavigationContactImages,
  NavigationContainerFootLine,
  Icon,
} from './StyledComponent'

const navItemsList = [
  {id: 'home', path: '/', icon: AiFillHome, name: 'Home'},
  {id: 'trending', path: '/trending', icon: HiFire, name: 'Trending'},
  {id: 'gaming', path: '/gaming', icon: SiYoutubegaming, name: 'Gaming'},
  {
    id: 'saved-videos',
    path: '/saved-videos',
    icon: MdPlaylistAdd,
    name: 'Saved videos',
  },
]

const SideBar = props => {
  const {match} = props

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {lightTheme} = value

        return (
          <NavigationMenuContainerWrapper value={lightTheme}>
            <NavigationItemsContainer>
              {navItemsList.map(navItem => (
                <li key={navItem.id}>
                  <EachNavigationContainer
                    as={Link}
                    to={navItem.path}
                    selection={match.path === navItem.path}
                    theme={lightTheme}
                  >
                    <Icon
                      as={navItem.icon}
                      selection={match.path === navItem.path}
                    />
                    <NavigationRouteNames>{navItem.name}</NavigationRouteNames>
                  </EachNavigationContainer>
                </li>
              ))}
            </NavigationItemsContainer>

            <NavigationContactContainer value={lightTheme}>
              <p>CONTACT US</p>
              <div>
                <NavigationContactImages
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <NavigationContactImages
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <NavigationContactImages
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </div>
              <NavigationContainerFootLine>
                Enjoy! Now to see your channels and recommendations!
              </NavigationContainerFootLine>
            </NavigationContactContainer>
          </NavigationMenuContainerWrapper>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default withRouter(SideBar)
