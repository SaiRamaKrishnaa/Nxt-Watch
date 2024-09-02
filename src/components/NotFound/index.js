import HeaderComponent from '../HeaderComponent'
import SideBar from '../SideBar'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  NavigationAndComponentContainer,
  LoaderOrFailureContainer,
  FailureViewImage,
  NotFoundHeading,
} from './StyledComponent'

const NotFound = () => (
  <>
    <HeaderComponent />
    <NavigationAndComponentContainer>
      <SideBar />
      <NxtWatchContext.Consumer>
        {value => {
          const {notFoundImage, notFoundAlt} = value.getThemeAttributes()

          return (
            <LoaderOrFailureContainer value={value.lightTheme}>
              <FailureViewImage
                src={notFoundImage}
                alt={notFoundAlt}
                value={value.lightTheme}
              />
              <NotFoundHeading value={value.lightTheme}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundHeading value={value.lightTheme} as="p">
                we are sorry, the page you requested could not be found.
              </NotFoundHeading>
            </LoaderOrFailureContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    </NavigationAndComponentContainer>
  </>
)

export default NotFound
