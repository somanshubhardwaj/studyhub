export default function Home() {
  const subject=[{name:"HS-103",img:"/img.jpg",link:""},
  {name:"HS-101",img:"/img.jpg",link:""},
  {name:"HS-102",img:"/img.jpg",link:""},
  {name:"HS-104",img:"/img.jpg",link:""},
  {name:"HS-105",img:"/img.jpg",link:""},
  {name:"HS-106",img:"/img.jpg",link:""},
  {name:"HS-107",img:"/img.jpg",link:""},
  ]
  return (
    <div className="p-6">
      <nav>
        <h1 className="font-bold text-4xl">StudyHub</h1>
      </nav>
      <section className="mt-6  p-6 rounded-md flex border-2 border-black">
        <div className="img w-1/2 flex justify-center">
          <img src="/img.jpg" alt="" className="studyimage max-w-full" />
        </div>
        <div className="content w-1/2 flex flex-col justify-center gap-8">
          <h1 className="font-semibold text-4xl">Study Material</h1>
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
          {subject.map((sub)=>(
            <a href={sub.link}>
              <div className="subject mt-6">
                <h2 className="subtitle">{sub.name}</h2>
                <img src={sub.img} alt="" className="subimg" />
              </div>
            </a>
          ))}
       
        </div>
      </section>


      <section className="bg-black text-white text-xl flex justify-center">
        site under development
      </section>
    </div>
  );
}
