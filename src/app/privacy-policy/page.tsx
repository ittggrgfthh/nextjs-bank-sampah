import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Kebijakan Privasi apikasi bank sampah',
};

export default function PrivacyPolicy() {
  return (
    <>
      <section className="m-10">
        <div className="my-4">
          <h1 className="text-3xl font-bold">Tentang Kebijakan Privasi</h1>
          <p className="mt-2">
            Kebijakan privasi ini menjelaskan tentang kebijakan aplikasi &quotBank Sampah&quot. Kami sebagai pembuat aplikasi Bank Sampah menghargai
            privasi pengguna dan berkomitmen untuk selalu menjaga informasi penting yang diberikan pengguna kepada kami. Kami akan menjelaskan jenis
            informasi yang kami ambil dan bagaimana cara kami mendapatkan informasi tersebut.
          </p>
        </div>

        <div className="my-4">
          <h1 className="text-3xl font-bold">Informasi yang kami ambil</h1>
          <p className="mt-2">
            Secara umum, kami mendapat informasi melalui data form offline yang pengguna berikan kepada kami, kemudian kami akan mencatatnya kedalam
            database. Informasi yang kami ambil berupa identitas pengguna. Penggunaan informasi yang kami ambil. Kami menggunakan data pengguna untuk
            mempermudah proses bisnis yang dilakukan. dalam hal aplikasi Bank Sampah, kami mempermudah karyawan kami untuk melakukan proses transaksi
            yang dilakukan pengguna.
          </p>
        </div>

        <div className="my-4">
          <h1 className="text-3xl font-bold">Penggunaan informasi yang kami ambil</h1>
          <p className="mt-2">
            Kami menggunakan data pengguna untuk mempermudah proses bisnis yang dilakukan. dalam hal aplikasi Bank Sampah, kami mempermudah karyawan
            kami untuk melakukan proses transaksi yang dilakukan pengguna.
          </p>
        </div>

        <div className="my-4">
          <h1 className="text-3xl font-bold">Cara kami mengamankan informasi.</h1>
          <p className="mt-2">
            Kami berkomitmen untuk melindungi informasi penting milik pengguna kami. Kami menerapkan langkah-langkah teknis dan organisasi yang sesuai
            untuk membantu melindungi keamanan informasi penting pengguna. Namun, perlu diketahui bahwa tidak ada sistem yang benar-benar aman. kami
            menerapkan beberapa langkah pengamanan untuk melindungi dari akses yang tidak sah.
          </p>
        </div>

        <div className="my-4">
          <h1 className="text-3xl font-bold">Cara menghubungi kami.</h1>
          <p className="mt-2">
            Jika anda memiliki pertanyaan atau masalah apapun tentang Kebijakan ini, tolong hubungi kami melalui email{' '}
            <a className="text-blue-500 no-underline hover:font-semibold hover:scale-105" href="mailto:kuuhaku.1332@gmail.com">
              kuuhaku.1332@gmail.com
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
