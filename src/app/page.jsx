import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function Home() {
  const subject = [
    { name: "HS-103", img: "/book.png", link: "" },
    { name: "HS-101", img: "/book.png", link: "" },
    { name: "HS-102", img: "/book.png", link: "" },
    { name: "HS-104", img: "/book.png", link: "" },
    { name: "HS-105", img: "/book.png", link: "" },
    { name: "HS-106", img: "/book.png", link: "" },
    { name: "HS-107", img: "/book.png", link: "" },
  ];
  return (
    <div className="p-6">
      <Navbar />

      <section className="">
        <h1 className="mt-6 text-2xl font-bold">1st Year Notes</h1>
        <div className="subjects flex flex-wrap justify-between ">
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
