import { useAuth0 } from '@auth0/auth0-react'

export default function FeatureForm({ onSubmitNewFeature, inputNewFeature }) {
  const { isAuthenticated, loginWithRedirect } = useAuth0()

  return (
    <form className="flex items-center space-x-2" onSubmit={onSubmitNewFeature}>
      {/*<button type="button" onClick={() => logout()}>*/}
      {/*  Logout*/}
      {/*</button>*/}

      <input
        className="input"
        type="text"
        ref={inputNewFeature}
        placeholder="Enter a new feature request?"
      />

      {!isAuthenticated && (
        <button
          className="button"
          type="button"
          onClick={() => loginWithRedirect()}
        >
          Login
        </button>
      )}
    </form>
  )
}