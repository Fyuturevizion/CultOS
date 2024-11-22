import { Link } from "@remix-run/react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-8">
      <nav className="bg-[#ECEDED]/85 py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="nav-text text-4xl text-gray-800">
            CultOS
          </Link>

          <div className="flex items-center gap-8">
            <Link
              to="/$CULT"
              className="nav-text text-gray-700 hover:text-gray-900 text-2xl"
            >
              $CULT
            </Link>
            <Link
              to="/grove"
              className="nav-text text-gray-700 hover:text-gray-900 text-2xl"
            >
              The Grove
            </Link>
            <Link
              to="/alpha"
              className="nav-text text-gray-700 hover:text-gray-900 text-2xl"
            >
              Alpha
            </Link>
            {/* <Button
              variant="secondary"
              className="bg-gray-800 text-white hover:bg-gray-700"
            >
              Connect
            </Button> */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
