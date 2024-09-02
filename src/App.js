import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/Protected'

import NxtWatchContext from './context/NxtWatchContext'

import './App.css'

class App extends Component {
  state = {
    lightTheme: true,
    likedList: [],
    dislikedList: [],
    savedList: [],
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      lightTheme: !prevState.lightTheme,
    }))
  }

  getThemeAttributes = () => {
    const {lightTheme} = this.state

    const themeAttributes = lightTheme
      ? {
          logoImage:
            'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png',
          failureImage:
            'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png',
          notFoundImage:
            'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png',
        }
      : {
          logoImage:
            'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png',
          failureImage:
            'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png',
          notFoundImage:
            'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png',
        }

    return {
      ...themeAttributes,
      logoAlt: 'website logo',
      failureAlt: 'failure view',
      notFoundAlt: 'not found',
    }
  }

  handleLikeToggle = id => {
    this.setState(prevState => {
      const updatedLikedList = prevState.likedList.includes(id)
        ? prevState.likedList.filter(each => each !== id)
        : [...prevState.likedList, id]

      const updatedDislikedList = prevState.dislikedList.filter(
        each => each !== id,
      )

      return {
        likedList: updatedLikedList,
        dislikedList: updatedDislikedList,
      }
    })
  }

  handleDislikeToggle = id => {
    this.setState(prevState => {
      const updatedDislikedList = prevState.dislikedList.includes(id)
        ? prevState.dislikedList.filter(each => each !== id)
        : [...prevState.dislikedList, id]

      const updatedLikedList = prevState.likedList.filter(each => each !== id)

      return {
        dislikedList: updatedDislikedList,
        likedList: updatedLikedList,
      }
    })
  }

  handleSavedVideosToggle = videoDetails => {
    this.setState(prevState => {
      const isVideoSaved = prevState.savedList.some(
        each => each.id === videoDetails.id,
      )

      const updatedSavedList = isVideoSaved
        ? prevState.savedList.filter(each => each.id !== videoDetails.id)
        : [...prevState.savedList, videoDetails]

      return {savedList: updatedSavedList}
    })
  }

  render() {
    const {lightTheme, likedList, dislikedList, savedList} = this.state

    return (
      <NxtWatchContext.Provider
        value={{
          lightTheme,
          toggleTheme: this.toggleTheme,
          getThemeAttributes: this.getThemeAttributes,
          likedList,
          dislikedList,
          savedList,
          handleLikeToggle: this.handleLikeToggle,
          handleDislikeToggle: this.handleDislikeToggle,
          handleSavedVideosToggle: this.handleSavedVideosToggle,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
