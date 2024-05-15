import Link from "next/link";
const Navbar = () => {
    return (
      <nav className="md:flex md:justify-between">
        <h1 className="font-bold text-4xl">StudyHub</h1>
        <div className="flex gap-2 items-center">
          <Link href="/">Home</Link>
          <Link href="/knowmore">Know More</Link>
          <Link href="/links">Useful links</Link>
  
  
        </div>
      </nav>
    );
  };
    export default Navbar;