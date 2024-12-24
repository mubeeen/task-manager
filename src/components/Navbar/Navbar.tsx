interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const navLogo = "Task Manager System";

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand">{navLogo}</a>
      </div>
    </nav>
  );
};

export default Navbar;
