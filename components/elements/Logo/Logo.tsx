import Link from "next/link";

const Logo = () => {
  return (
    <Link className="logo" href="/">
      <img className="logo_img" src="/img/logo.svg" alt="Online market" />
    </Link>
  );
};

export default Logo;
