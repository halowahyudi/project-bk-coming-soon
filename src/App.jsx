import React from "react";
import "./App.css";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>Peduli Siswa</title>
        <meta
          name="description"
          content="Halaman ini sedang dikembangkan oleh tim kami yang terdiri
                  dari para profesional dan ahli dalam bidangnya. Kami akan
                  menghadirkan sesuatu yang luar biasa untuk Pendidikan di
                  Indonesia. Kembali lagi nanti untuk melihat apa yang baru!"
        />
      </Helmet>
      <div className="isolate bg-white flex justify-center h-screen">
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
          <svg
            className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9089FC" />
                <stop offset={1} stopColor="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <main>
          <div className="App">
            <div className="flex justify-center items-center h-screen bg-no-repeat bg-cover bg-center ">
              <div className="flex flex-col text-center">
                <h1 className="text-5xl md:text-7xl font-bold">COMING SOON</h1>
                <p className="text-md px-5 md:px-20 mt-3 text-slate-600">
                  Halaman ini sedang dikembangkan oleh tim kami yang terdiri
                  dari para profesional dan ahli dalam bidangnya. Kami akan
                  menghadirkan sesuatu yang luar biasa untuk Pendidikan di
                  Indonesia. Kembali lagi nanti untuk melihat apa yang baru!
                </p>

                <p className="text-xl mt-5">- pedulisiswa.com, Peduli Siswa.</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
