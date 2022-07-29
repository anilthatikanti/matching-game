import './index.css'

const Navbar = props => {
  const {score, seconds} = props
  return (
    <nav>
      <ul className="navbarBg">
        <li>
          <img
            className="websiteLogo"
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            alt="website logo"
          />
        </li>
        <li className="NavbarScoreCard">
          <p className="scoreStyle">
            Score: <span className="NavbarItems">{score}</span>
          </p>

          <div className="navbarTimer">
            <img
              className="timer"
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
            />

            <p className="NavbarItems">{seconds} sec</p>
          </div>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar
