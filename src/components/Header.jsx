import { CiSearch } from "react-icons/ci";
import { IoMdHand } from "react-icons/io";
const Header = () => {
  return (
    <header className="p-3 text-bg-light  ">
      <div className="container ">
        <div className="Header">
          <h3>
            Hello Gudu jaya Chandra
            <IoMdHand style={{ color: "yellow" }} />
            !!
          </h3>
          <div className="search">
            <CiSearch style={{ fontSize: "22px" }} />
            <input
              type="text"
              placeholder="Search"
              style={{
                margin: "6px 30px 0px 2px",
                border: "none",
                padding: "2px",
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
