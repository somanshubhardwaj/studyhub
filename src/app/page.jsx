import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function Home() {
  const subject = [
    { name: "HS-103", img: "/book.png", link: "https://somanshubhardwaj.notion.site/b06321d17876429db23175e7e53c01a3?v=64e32df24244406b8f939acd82ba43fc" },
    { name: "HS-101", img: "/book.png", link: "https://somanshubhardwaj.notion.site/c3ce8d922b1941a1b58766834978c15a?v=9dba6120bdc949afa8681372854d9e0f" },
    { name: "ME-101", img: "/book.png", link: "https://somanshubhardwaj.notion.site/b634684302044adc8f3e9ceee7614b71?v=62a1fc6f604b4245bd96908441a42b2c" },
    { name: "CS-111", img: "/book.png", link: "https://somanshubhardwaj.notion.site/7362d2e2575942feaa719ab6d1de5c7b?v=1b7c9d7271f14ca8828e7996184957ae" },
    { name: "CS-121", img: "/book.png", link: "https://somanshubhardwaj.notion.site/INTRODUCTION-TO-PYTHON-AND-DATA-STRUCTURES-b6f05419b8074042a3c0d872c7e25419" },
  ];
  return (
    <div className="p-6">
      <Navbar />

      <section className="">
        <h1 className="mt-6 text-2xl font-bold">1st Year Notes</h1>
        <div className="subjects flex flex-wrap justify-around ">
          {subject.map((sub) => (
            <a href={sub.link}>
              <div className="subject mt-6">
                <h2 className="subtitle">{sub.name}</h2>
                <img src={sub.img} alt="" className="subimg p-3" />
              </div>
            </a>
          ))}
        </div>
      </section>

      <div className="flex md:flex-row flex-col p-2 min-h-screen items-center justify-center">
        <section className=" flex  items-center flex-col md:w-1/2">
          <div className="w-full  flex justify-center items-center">
            <img src="/exam.png" alt="" className="studyimage max-w-full" />
          </div>
          <div className="w-full  flex flex-col justify-center gap-8">
            <h1 className="mt-6 text-2xl font-bold">
              Previous Year Question Papers
            </h1>
            <span className="">
              Download question papers from the following botton
            </span>
            <a
              href="https://library.nith.ac.in/library/exam.php"
              target="_blank"
            >
              <button className="bg-blue-500 text-white p-2 rounded-md w-min">
                Download
              </button>
            </a>
          </div>
        </section>
        <section className=" w-full flex  flex-col md:w-1/2">
          <div className="img-section  flex justify-center">
            <img
              src="/books.png"
              alt=""
              className="studyimage max-w-full p-6"
            />
          </div>
          <div className="content-section  flex flex-col justify-center gap-8">
            <h1 className="font-semibold text-4xl mt-6">Study Material</h1>
            <span className="">
              Download study material from the following botton
            </span>
            <a
              href="https://somanshubhardwaj.notion.site/Books-and-other-study-materials-26ff09346be14e8797c58601cb26a32a"
              target="_blank"
            >
              <button className="bg-blue-500 text-white p-2 rounded-md w-min">
                Download
              </button>
            </a>
          </div>
        </section>
      </div>

      <hr />
      <Footer />
    </div>
  );
}
