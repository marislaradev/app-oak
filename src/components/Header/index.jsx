import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-greenLetter w-full h-16 text-slate-950 text-xl flex items-center justify-between fixed top-0 pr-10 pl-10">
      <Link to="/">
        <img className="h-40" src="panvel-logo.png"/>
      </Link>

      <nav>
        <Link to="/deliveries/monthly" className="text-greenBtn font-semibold text-xl hover:text-2xl transition-trans duration-200 ease-out">
          Filtrar entregas 🔍
        </Link>
      </nav>
    </header>
  );
}

export default Header;
