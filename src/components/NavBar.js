function NavBar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <img
            src="https://i.imgur.com/AfD3qAs.png"
            className="logo"
            alt="dinneflix-logo"
          />
        </li>
        <li>
          <a href="/">Home</a>
        </li>
        {/*       <li>
          <a href="/">
            <img
              className="searchHeader"
              src="https://i.imgur.com/lDAMUAV.png"
              alt="netflix header"
            />
          </a>
        </li> */}
      </ul>
    </div>
  )
}
export default NavBar
