import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="min-h-screen bg-[#af92db] p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-[#1F0831] mb-6">
          About Senti
        </h1>
        <p className="text-lg text-slate-900 leading-relaxed mb-6">
          Welcome to <span className="font-semibold">Senti</span>, your go-to
          destination for all things trendy and fashionable! At Senti, we
          believe in providing high-quality products at affordable prices, all
          while ensuring a delightful shopping experience for our customers.
        </p>
        <p className="text-lg text-slate-900 leading-relaxed mb-6">
          Founded in 2023, our mission is to revolutionize the e-commerce
          industry by offering a wide range of products, from fashion to
          electronics, with an emphasis on sustainability and customer
          satisfaction.
        </p>

        <section className="bg-[#533977] p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-white leading-relaxed">
            At Senti, we are committed to providing products that cater to
            modern lifestyle needs. We work with eco-friendly suppliers to
            ensure that our products not only meet your expectations but also
            contribute to a sustainable future. Our goal is to create a shopping
            experience that is as easy, enjoyable, and responsible as possible.
          </p>
        </section>

        <section className="bg-[#533977] p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="team-member bg-gray-50 p-4  rounded-lg text-center shadow-md">
              <img
                src="https://t4.ftcdn.net/jpg/06/48/39/19/240_F_648391979_uMz6EwAlKNIJnK9r46UpTiM17nT8GuLl.jpg"
                alt="CEO"
                className="rounded-full w-40 h-40 object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-black">Alex Johnson</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="team-member bg-gray-50 p-4 rounded-lg text-center shadow-md">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMdBuvbsYu7WYAAUY2AqSQRGNESsYdkucDkQ&s"
                alt="CTO"
                className="rounded-full mx-auto w-40 h-40 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-black">Maria Smith</h3>
              <p className="text-gray-600">Chief Technology Officer</p>
            </div>
            <div className="team-member bg-gray-50 p-4 rounded-lg text-center shadow-md">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8G2oi3aNCD1iZHvfd71DcolfLbAX8kVnZTolpganItxmVIPqKMx5Vi-tjDOEn0ARFCj8&usqp=CAU"
                alt="CMO"
                className="rounded-full mx-auto  w-40 h-40 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-black">John Doe</h3>
              <p className="text-gray-600">Chief Marketing Officer</p>
            </div>
          </div>
        </section>

        <div className="mt-8 text-center">
          <p className="text-lg text-black">
            Want to know more about us? Feel free to{" "}
            <span className="text-blue-500 cursor-pointer">contact us</span> or
            explore our{" "}
            <Link to={"/store"} className="text-blue-500 cursor-pointer">
              shop
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
