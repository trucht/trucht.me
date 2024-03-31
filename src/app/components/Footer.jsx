import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full p-4 bg-primary">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="font-bold text-xl text-white" href={"/"}>
          trucht
        </Link>
        <p className="text-white font-semibold">@2024</p>
      </div>
    </footer>
  );
};

export default Footer;
