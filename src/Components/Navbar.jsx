import Logo from "../Assets/Logo.svg";



const Navbar = () => {
  
  return (
    <nav>
      <div className="nav-logo-container" id="navbar">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#review">Review</a>
        <a href="#contact">Contact</a>    
        <button className="primary-button">Bookings Now</button>
      </div>
      
    </nav>
  );
};

export default Navbar;
