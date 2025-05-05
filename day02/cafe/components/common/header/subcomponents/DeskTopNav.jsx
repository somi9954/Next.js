import NavLink from "./NavLink";

const DesktopNav = () => {
  return (
    <ul className="hidden md:flex items-center gap-8">
      <NavLink link={"/story"} navName={"STORY"} />
      <NavLink link={"/menu"} navName={"MENU"} />
      <NavLink link={"/store"} navName={"STORE"} />
      <NavLink link={"/content"} navName={"CONTENT"} />
    </ul>
  );
};

export default DesktopNav;
