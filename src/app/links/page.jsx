import React from "react";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const Page = () => {
  const links = [{ name: "Google", url: "https://www.google.com", img: "/img.jpg"}
    ,{ name: "Facebook", url: "https://www.facebook.com", img: "/img.jpg"},
    { name: "Twitter", url: "https://www.twitter.com", img: "/img.jpg"},
    { name: "Instagram", url: "https://www.instagram.com", img: "/img.jpg"},
    { name: "LinkedIn", url: "https://www.linkedin.com", img: "/img.jpg"},
    { name: "Pinterest", url: "https://www.pinterest.com", img: "/img.jpg"},
    { name: "Reddit", url: "https://www.reddit.com", img: "/img.jpg"},
    { name: "Snapchat", url: "https://www.snapchat.com", img: "/img.jpg"},
    { name: "Tumblr", url: "https://www.tumblr.com", img: "/img.jpg"},
    { name: "WhatsApp", url: "https://www.whatsapp.com", img: "/img.jpg"},
    { name: "YouTube", url: "https://www.youtube.com", img: "/img.jpg"},
    { name: "Amazon", url: "https://www.amazon.com", img: "/img.jpg"},
    { name: "eBay", url: "https://www.ebay.com", img: "/img.jpg"},
    { name: "Etsy", url: "https://www.etsy.com", img: "/img.jpg"},
    { name: "Walmart", url: "https://www.walmart.com", img: "/img.jpg"},
    { name: "Best Buy", url: "https://www.bestbuy.com", img: "/img.jpg"},
    { name: "Target", url: "https://www.target.com", img: "/img.jpg"},
    { name: "Home Depot", url: "https://www.homedepot.com", img: "/img.jpg"},
    { name: "Lowe's", url: "https://www.lowes.com", img: "/img.jpg"},
    { name: "IKEA", url: "https://www.ikea.com", img: "/img.jpg"},
    { name: "Costco", url: "https://www.costco.com", img: "/img.jpg"},
    { name: "Sams Club", url: "https://www.samsclub.com", img: "/img.jpg"},
    { name: "Starbucks", url: "https://www.starbucks.com", img: "/img.jpg"},
    { name: "McDonald's", url: "https://www.mcdonalds.com", img: "/img.jpg"},
    { name: "Burger King", url: "https://www.burgerking.com", img: "/img.jpg"},
  ];
  return (
    <div className="p-6">
      <Navbar />
      <h1 className="text-2xl font-bold mt-6 p-6">Useful Links</h1>
      <hr />
      <div className="flex flex-wrap justify-evenly">
        {links.map((link) => (
          <div className="box h-[250px] w-[200px] p-6 m-6 bg-red-100 flex justify-center items-center flex-col rounded">
            <img src={link.img} alt={link.name} className="w-[150px]" />
            <h1 className="">{link.name}</h1>
            <a href={link.url} target="_blank" rel="noreferrer">
              <button className="bg-blue-500 text-white p-2 rounded-md w-min">
                Visit
              </button>
            </a>
          </div>
        ))}
      </div>

      <hr />
      <Footer />
    </div>
  );
};

export default Page;
