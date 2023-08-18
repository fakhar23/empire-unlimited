interface Props {}
import "./Header.scss";

function Header(prop: Props) {
  console.log("prop: ", prop);
  return (
    <header className="pt-[34px] pb-[28px] pb-6 pt-6 bg-background-black text-white text-center text-[5rem] header-text">
      Empire Unlimited
    </header>
  );
}

export default Header;
