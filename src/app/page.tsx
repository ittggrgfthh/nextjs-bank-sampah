import Image from "next/image";
import Script from "next/script";

export default function Home() {
  return (
    <>
      {/* <!--Nav--> */}
      <nav id="header" className="fixed w-full z-30 top-0 text-white">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
          <div className="pl-4 flex items-center">
            <a
              className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
              href="#"
            >
              Bank Sampah v.0.1.0
            </a>
          </div>
          <div className="block lg:hidden pr-4">
            <button
              id="nav-toggle"
              className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            >
              <svg
                className="fill-current h-6 w-6"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
            id="nav-content"
          >
            <ul
              id="nav-subs"
              className="list-reset lg:flex justify-end flex-1 items-center text-white"
            >
              <li className="mr-3">
                <a
                  className="inline-block  no-underline hover:font-semibold hover:scale-105 py-2 px-4"
                  href="#features"
                >
                  Fitur
                </a>
              </li>
              <li className="mr-3">
                <a
                  className="inline-block  no-underline hover:font-semibold hover:scale-105 py-2 px-4"
                  href="#download"
                >
                  Unduh
                </a>
              </li>
            </ul>
            <a href="https://github.com/ittggrgfthh/bank_sampah/releases/">
              <button
                id="navAction"
                className="mx-auto lg:mx-0 hover:underline align-middle bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-4 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out flex flex-row justify-center"
              >
                <Image
                  width={8}
                  height={8}
                  alt="Picture of the author"
                  className="md:w-4/5 max-w-[30px] max-h-[30px] pr-2"
                  src="github-mark.svg"
                />
                <p className="">GitHub</p>
              </button>
            </a>
          </div>
        </div>
        <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
      </nav>
      {/* <!--Hero--> */}
      <div className="py-24">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          {/* <!--Left Col--> */}
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
            <h1 className="my-4 text-5xl font-bold leading-tight">
              Kumpulkan sampah, tukar Rupiah
            </h1>
            <p className="leading-normal text-2xl mb-8">
              Dengan aplikasi Bank Sampah, jadilah bagian dari solusi untuk
              lingkungan yang hijau. Dapatkan tunai melalui kontribusi anda,
              peroleh manfaat dari sampah anda.
            </p>
            <a href="bank_sampah_v0.1.1.apk">
              <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                Unduh
              </button>
            </a>
          </div>
          {/* <!--Right Col--> */}
          <div className="w-fit md:w-3/5 md:pr-24 py-6 text-center flex justify-end">
            <Image
              width={270}
              height={600}
              alt="Picture of the author"
              className="md:w-4/5 max-w-[230px] max-h-[510px]"
              src="/whatever.png"
            />
          </div>
        </div>
      </div>
      <div className="relative -mt-12 lg:-mt-24">
        <svg
          viewBox="0 0 1428 174"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g
              transform="translate(-2.000000, 44.000000)"
              fill="#FFFFFF"
              fill-rule="nonzero"
            >
              <path
                d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                opacity="0.100000001"
              ></path>
              <path
                d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                opacity="0.100000001"
              ></path>
              <path
                d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                id="Path-4"
                opacity="0.200000003"
              ></path>
            </g>
            <g
              transform="translate(-4.000000, 76.000000)"
              fill="#FFFFFF"
              fill-rule="nonzero"
            >
              <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
            </g>
          </g>
        </svg>
      </div>
      <section id="features" className="bg-white border-b py-8">
        <div className="container max-w-5xl mx-auto m-8">
          <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Fitur
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          {/* warga */}
          <div className="flex flex-wrap">
            <div className="w-5/6 sm:w-1/2 p-6">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                Warga
              </h3>
              <ul className="text-black">
                <li>Melihat saldo saat ini</li>
                <li>Melihat jumlah sampah yang sudah di depositkan</li>
                <li>Melihat riwayat transaksi</li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 p-6">
              <Image
                width={8}
                height={8}
                alt="Picture of the author"
                className="md:w-4/5 w-full max-h-[200px]"
                src="warga.svg"
              />
            </div>
          </div>
          {/* staff */}
          <div className="flex flex-wrap flex-col-reverse sm:flex-row">
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <Image
                width={8}
                height={8}
                alt="Picture of the author"
                className="md:w-4/5 w-full max-h-[200px]"
                src="staff.svg"
              />
            </div>
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <div className="align-middle">
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                  Staff
                </h3>
                <ul className="text-black">
                  <li>Mencatat deposit sampah warga</li>
                  <li>
                    Memodifikasi catatan deposit sampah warga dalam jangka waktu
                    yang sudah ditentukan
                  </li>
                  <li>
                    Melihat daftar transaksi yang telah dilakukan `deposit
                    sampah` atau `tarik saldo`
                  </li>
                  <li>Melakukan penarikan saldo warga</li>
                </ul>
              </div>
            </div>
          </div>
          {/* admin */}
          <div className="flex flex-wrap">
            <div className="w-5/6 sm:w-1/2 p-6">
              n
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                Admin
              </h3>
              <ul className="text-black">
                <li>Melihat laporan bulanan berdasarkan desa yang dipilih</li>
                <li>
                  Mencetak laporan bulanan berdasarkan desa yang dipilih `pdf`
                </li>
                <li>Membuat pengguna baru</li>
                <li>Memodifikasi pengguna lama</li>
                <li>
                  Mengetahui semua daftar pengguna `warga`, `staff` dan `admin`
                </li>
                <li>Mengubah harga sampah organik dan an-organik per kg</li>
                <li>
                  Mengetahui riwayat perubahan harga sampah organik maupun
                  an-organik
                </li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 p-6">
              <Image
                width={8}
                height={8}
                alt="Picture of the author"
                className="md:w-4/5 w-full max-h-[200px]"
                src="admin.svg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Change the colour #f8fafc to match the previous section colour --> */}
      <svg
        className="wave-top"
        viewBox="0 0 1439 147"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(-1.000000, -14.000000)" fill-rule="nonzero">
            <g className="wave" fill="#f8fafc">
              <path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"></path>
            </g>
            <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
              <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                <path
                  d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                  opacity="0.100000001"
                ></path>
                <path
                  d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                  opacity="0.100000001"
                ></path>
                <path
                  d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                  opacity="0.200000003"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
      <section className="container mx-auto text-center py-6 mb-12">
        <h2
          id="download"
          className="w-full my-2 text-5xl font-bold leading-tight text-center text-white"
        >
          Tunggu apa lagi?
        </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <h3 className="my-4 text-3xl leading-tight">
          Dapatkan aplikasinya sekarang!
        </h3>
        <a href="bank_sampah_v0.1.1.apk">
          <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            Unduh Sekarang!
          </button>
        </a>
      </section>
      {/* <!--Footer--> */}
      <footer className="bg-white">
        <div className="container mx-auto px-8 text-black flex justify-center">
          <p>© Developer Team | Bank Sampah 2023. All Right Reserved</p>
        </div>
        <a
          href="https://www.freepik.com/free-photos-vectors/background"
          className="text-gray-500"
        >
          Background vector created by freepik - www.freepik.com
        </a>
      </footer>
      {/* <!-- jQuery if you need it <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> --> */}
      <Script src="/js/home.js"></Script>
    </>
  );
}
