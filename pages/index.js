import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'



export default function Home() {
  return (
    <div>
      <Head>
        <title>LANCOME - Wear the code </title>
        <meta name="description" content="lancome.com - Wear the Code" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div>
        <img src="/hannah-morgan-ycVFts5Ma4s-unsplash.jpg" alt="" height={800} width={1600} />
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Wear the Code with LANCOME.COM</h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">This website is an attempt to deliver amazing products at a good and reasonable price. This website is powerd by NextJs + React + MongoDB for storing the data. For the server side logic, we use NextJs built in SSR, buy yourself a trendy geek Tshirt from LANCOME ;) !</p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <img src="https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C91aqk1bABZL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX679_.png" alt="" />
                <p>Binary Tree Coding Computer Programmer Tee Shirt T-Shirt</p>
                <p>₹499</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <img src="https://m.media-amazon.com/images/I/71MaUamBf8L._AC_UL480_FMwebp_QL65_.jpg" alt="" />
                <p>Funny Joke Programming If Coding Headphones Focus T-Shirt</p>
                <p>₹499</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <img src="https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C61bAzVntOaL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX679_.png" alt="" />
                <p>Debugging Definition T-Shirt | Funny Coding Programming Tee</p>
                <p>₹499</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <img src="https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C816kkvsvaaL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX466_.png" alt="" />
                <p>Hello World Coding, Computer Programming Languages T-Shirt</p>
                <p>₹499</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <img src="https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C81RX3Kenm4L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX679_.png" alt="" />
                <p>Computer Science Python Programmer Eat Code Sleep T-Shirt</p>
                <p>₹499</p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <img src="https://m.media-amazon.com/images/I/A13usaonutL._CLa%7C2140%2C2000%7C71pr1YlaHHL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX466_.png" alt="" />
                <p>Software Development T-Shirt | Funny Coding Programming Tee</p>
                <p>₹499</p>
              </div>
            </div>
          </div>
          <Link href={'/tshirts'}><a>
            <button className="flex mx-auto mt-16 text-white bg-violet-500 border-0 py-2 px-8 focus:outline-none hover:bg-violet-700 rounded text-lg">Shop</button>
          </a></Link>
        </div>
      </section>

    </div>
  )
}
