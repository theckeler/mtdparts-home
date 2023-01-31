import MenuLoop from "./Loop";
import MenuMainExtras from "./Extras";
import MenuMainSearch from "../Search";

const Nav = ({ menuData }) => {
  return (
    <div
      className="overflow-scroll remove-scrollbar min-vh-100 min-w-100 mh-0 max-vh-100 min-vh-0 bg-white"
      id="main-menu"
    >
      <div className="container-xxl">
        <ul className="list-unstyled p-2 pb-5 mb-0" aria-label="Main Menu">
          <MenuLoop
            menuData={menuData}
            footerNav={false}
            addClass="text-black"
          />

          <li className="nav-item text-align-left w-100 border-bottom py-1 px-2">
            <MenuMainExtras />
          </li>
          <li className="nav-item text-align-left w-100 pb-5 px-3">
            <MenuMainSearch darkTheme={true} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
