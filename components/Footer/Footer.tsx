import React from "react";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Services",
    link: "/#",
  },
  {
    id: 3,
    name: "About",
    link: "/#",
  },
  {
    id: 4,
    name: "Contact",
    link: "/#",
  },
];

function Footer() {
  return (
    <div className="bg-[url('/images/h2.jpg')] bg-center bg-no-repeat bg-cover h-full w-full">
      <div className="bg-black/40 min-h-[400px]">
        <div className="container grid md:grid-cols-3 pb-20 pt-5">
          <div className="py-8 px-4">
            <a className="font-semibold text-2xl md:text-3xl font-pacifico">
              CoffeePub
            </a>
            <p className="pt-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
              voluptas nobis rerum, ratione laudantium consequatur ipsa
              delectus, culpa ad ipsam rem voluptatum.
            </p>
          </div>

          <div className="col-span-2 grid grid-cols-2 md:pl-10 sm:grid-cols-3">
            <div className="py-8 px-4">
              <h1 className="text-xl font-semibold text-white">
                Important Links
              </h1>
              <ul className="space-y-3 mt-4">
                {Menu.map((data, index) => (
                  <li key={index}>
                    <a
                      className="inline-block text-light hover:scale-110 transition duration-500"
                      href={data.link}
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="py-8 px-4">
              <h1 className="text-xl  font-semibold text-white">Quick Links</h1>
              <ul className="space-y-3 mt-4">
                {Menu.map((data, index) => (
                  <li key={index}>
                    <a
                      className="inline-block text-light hover:scale-110 transition duration-500"
                      href={data.link}
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-semibold text-white">Address</h1>
              <div className="mt-4 space-y-4 text-light">
                <p>Turkey Istanbul</p>
                <p>+90 111 222 33 44</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
