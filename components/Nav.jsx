import Image from "next/image";

const Nav = () => {
  return (
    <nav className="flex-between w-full mb-5 pt-3">
      <Image
        src="/assets/images/logo.jpeg"
        alt="logo"
        width={80}
        height={80}
        className="object-contain"
      />
    </nav>
  );
};

export default Nav;
