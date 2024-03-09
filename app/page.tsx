import home from "@/lib/home.json";
import post from "@/lib/blog.json";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* hero */}
      <div className="-mt-24 relative w-full py-12 px-12 bg-yellow-900">
        <div className="relative z-10 text-center py-24 md:py-48">
          <h1 className="text-white text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-12">
            {/* {home.title} */}A taste of every lifestyle
          </h1>
          <a
            href="/"
            className="inline-block bg-yellow-800 text-white uppercase text-sm tracking-widest font-heading px-8 py-4"
          >
            {/* {home.button_text} */}Read the blog
          </a>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl flex justify-between uppercase text-white font-heading tracking-widest text-sm">
          <a href="/" className="border-b border-white">
            {/* {home.link_one_text} */}Find out more
          </a>
          <a href="/" className="border-b border-white">
            {/* {home.link_two_text} */}Get in touch
          </a>
        </div>

        <Image
          src={home.image}
          alt=""
          className="w-full h-full absolute inset-0 object-cover opacity-70"
          layout="fill"
          // objectFit="contain"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-white p-12 md:p-24 flex justify-end items-center">
          <a href="/">
            <Image
              src={post.post3.image}
              alt=""
              className="object-cover"
              width={500}
              height={500}
              // objectFit="contain"
            />
          </a>
        </div>

        {/* section post right */}
        <div className="bg-gray-100 p-12 md:p-24 flex justify-start items-center">
          <div className="max-w-md">
            <div className="w-24 h-2 bg-yellow-800 mb-4"></div>
            <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl mb-6">
              {post.post3.title}
            </h2>
            <p className="font-light text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
              {post.post3.description}
            </p>
            <a
              href="/"
              className="inline-block border-2 border-yellow-800 font-light text-yellow-800 text-sm uppercase tracking-widest py-3 px-8 hover:bg-yellow-800 hover:text-white"
            >
              Read more
            </a>
          </div>
        </div>
      </div>

      {/* section image */}
      <Image
        src={home.full_screen_image}
        alt=""
        className="w-full h-screen object-cover"
        width={500}
        height={500}
      />

      {/* section quotes */}
      <div className="max-w-xl mx-auto text-center py-24 md:py-32">
        <div className="w-24 h-2 bg-yellow-800 mb-4 mx-auto"></div>
        <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
          {/* {home.cta_title} */}We love to travel
        </h2>
        <p className="font-light text-gray-600 mb-6 leading-relaxed">
          {/* {home.cta_description} */}Iterative approaches to corporate
          strategy foster collaborative thinking to further the overall value
          proposition.
        </p>
      </div>

      {/* section */}
      <div className="flex flex-wrap bg-black">
        <a
          href="/"
          className="bg-black relative w-full md:w-auto md:flex-1 flex items-center justify-center h-72 font-heading text-white uppercase tracking-widest hover:opacity-75"
        >
          <div className="relative z-10"> {post.post1.category} </div>
          <Image
            src={post.post1.categoryimage}
            alt=""
            layout="fill"
            className=" object-cover"
          />
          {/* <img src="{{ category.data.image }}" className="absolute inset-0 w-full h-full object-cover opacity-50" /> */}
        </a>
        <a
          href="/"
          className="bg-black relative w-full md:w-auto md:flex-1 flex items-center justify-center h-72 font-heading text-white uppercase tracking-widest hover:opacity-75"
        >
          <div className="relative z-10"> {post.post2.category} </div>
          <Image
            src={post.post2.categoryimage}
            alt=""
            layout="fill"
            className=" object-cover"
          />
          {/* <img src="{{ category.data.image }}" className="absolute inset-0 w-full h-full object-cover opacity-50" /> */}
        </a>
        <a
          href="/"
          className="bg-black relative w-full md:w-auto md:flex-1 flex items-center justify-center h-72 font-heading text-white uppercase tracking-widest hover:opacity-75"
        >
          <div className="relative z-10"> {post.post3.category} </div>
          <Image
            src={post.post3.categoryimage}
            alt=""
            layout="fill"
            className=" object-cover"
          />
          {/* <img src="{{ category.data.image }}" className="absolute inset-0 w-full h-full object-cover opacity-50" /> */}
        </a>
      </div>

      {/* section post left*/}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-white p-12 md:p-24 flex justify-start items-center">
          <a href="/">
            <Image
              src={post.post2.image}
              alt=""
              className="object-cover"
              width={500}
              height={500}
            />
          </a>
        </div>
        <div className="md:order-first bg-gray-100 p-12 md:p-24 flex justify-end items-center">
          <div className="max-w-md">
            <div className="w-24 h-2 bg-yellow-800 mb-4"></div>
            <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl mb-6">
              {post.post2.title}
            </h2>
            <p className="font-light text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
              {post.post2.description}
            </p>
            <a
              href="/"
              className="inline-block border-2 border-yellow-800 font-light text-yellow-800 text-sm uppercase tracking-widest py-3 px-8 hover:bg-yellow-800 hover:text-white"
            >
              Read more
            </a>
          </div>
        </div>
      </div>

      {/* section */}
      <div className="relative w-full py-12 px-12">
        <div className="relative z-10 text-center py-12 md:py-24">
          <h1 className="text-white text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6">
            {/* {home.footer_cta_title} */}Endlessly customizable
          </h1>
          <p className="text-white mb-10 text-base md:text-lg font-bold">
            {/* {home.footer_cta_description} */}Organically grow the holistic
            world view of disruptive innovation via workplace diversity and
            empowerment.
          </p>
          <a
            href="/"
            className="inline-block bg-yellow-800 text-white uppercase text-sm tracking-widest font-heading px-8 py-4"
          >
            {/* {home.footer_cta_button_text} */}Find out more
          </a>
        </div>

        {/* <img src="{{ home.footer_cta_image }}" className="w-full h-full absolute inset-0 object-cover" /> */}
        <Image
          src={home.footer_cta_image}
          alt=""
          className="w-full h-full absolute inset-0 object-cove"
          layout="fill"
        />
      </div>
    </main>
  );
}
