export default function Navbar() {
  return (
    <nav className="navigation">
      <ul className="navigation--list">
        <li className="navigation--list--items"> About Me </li>
        <li className="navigation--list--items"> Skills </li>
        <li className="navigation--list--items"> Portfolio </li>
        <a href="https://www.linkedin.com/in/nikos-dritsakos/">
          <li className="navigation--list--items navigation--list--items--contact">
            GET IN TOUCH
          </li>
        </a>
      </ul>
    </nav>
  );
}
