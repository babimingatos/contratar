import { BsArrowLeftShort } from "react-icons/bs";

const Navbar = () => {
  return (
    <div class="navbar">
      <div class="arrow" style={{ color: 'white' }}>
        <BsArrowLeftShort size={32} />
      </div>
      <p class="center navtxt">Contratar</p>
    </div>

  );
}

export default Navbar