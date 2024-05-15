import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function Home() {
  const subject = [
    { name: "HS-103", img: "/img.jpg", link: "" },
    { name: "HS-101", img: "/img.jpg", link: "" },
    { name: "HS-102", img: "/img.jpg", link: "" },
    { name: "HS-104", img: "/img.jpg", link: "" },
    { name: "HS-105", img: "/img.jpg", link: "" },
    { name: "HS-106", img: "/img.jpg", link: "" },
    { name: "HS-107", img: "/img.jpg", link: "" },
  ];
  return (
    <div className="p-6">
      <Navbar />
      <section className="mt-6  p-6 rounded-md flex border-2 border-black md:flex-row flex-col">
        <div className="img-section w-1/2 flex justify-center">
          <img src="/img.jpg" alt="" className="studyimage max-w-full" />
        </div>
        <div className="content-section w-1/2 flex flex-col justify-center gap-8">
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
      <section className="">
        <h1 className="mt-6 text-2xl font-bold">1st Year Notes</h1>
        <div className="subjects flex flex-wrap justify-between ">
          {subject.map((sub) => (
            <a href={sub.link}>
              <div className="subject mt-6">
                <h2 className="subtitle">{sub.name}</h2>
                <img src={sub.img} alt="" className="subimg" />
              </div>
            </a>
          ))}
        </div>
      </section>
      <section className="questionpaper flex min-h-screen items-center">
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img src="/img.jpg" alt="" className="studyimage max-w-full" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-6">
          <h1 className="mt-6 text-2xl font-bold">Question Papers</h1>
          <span className="">
            Download question papers from the following botton
          </span>
          <a
            href="https://somanshubhardwaj.notion.site/Question-Papers-2d0c4e4c5e3e4d8b9c1f5f4b0f1e4a4b"
            target="_blank"
          >
            <button className="bg-blue-500 text-white p-2 rounded-md w-min">
              Download
            </button>
          </a>
        </div>
      </section>
      <hr />
      <Footer />
    </div>
  );
}

