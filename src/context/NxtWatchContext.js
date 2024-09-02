import React from 'react'

const NxtWatchContext = React.createContext({
  lightTheme: true,
  toggleTheme: () => {},
  getThemeAttributes: () => {},
  likedList: [],
  dislikedList: [],
  savedList: [],
  handleLikeToggle: () => {},
  handleDislikeToggle: () => {},
  handleSavedVideosToggle: () => {},
})

export default NxtWatchContext
