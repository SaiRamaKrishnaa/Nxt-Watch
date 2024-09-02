import NxtWatchContext from '../../context/NxtWatchContext'
import {
  ErrorImage,
  ErrorMessage,
  TroubleText,
  RetryBtn,
} from './StyledComponent'

const ErrorView = ({retryFunction}) => {
  const handleRetry = () => {
    retryFunction()
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {errorImage, errorAlt} = value.getThemeAttributes()

        return (
          <>
            <ErrorImage
              isLight={value.lightTheme}
              src={errorImage}
              alt={errorAlt}
            />
            <ErrorMessage isLight={value.lightTheme}>
              Oops! Something Went Wrong
            </ErrorMessage>
            <TroubleText>
              We&apos;re experiencing issues processing your request. Please try
              again.
            </TroubleText>
            <RetryBtn type="button" onClick={handleRetry}>
              Retry
            </RetryBtn>
          </>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default ErrorView
