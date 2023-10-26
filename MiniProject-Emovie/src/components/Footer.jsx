import Logo from "../assets/logo.png";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-yellow-700 text-white py-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/2">
            <img className="w-40 h-auto mb-4 rounded-3xl " src={Logo} alt="" />
          </div>
          <div className="md:w-1/2">
            <section className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">Media Sosial</h3>
              <div className="flex items-center gap-5 pt-2">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="text-white hover:text-gray-400 text-3xl" />
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="text-white hover:text-gray-400 text-3xl" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-white hover:text-gray-400 text-3xl" />
                </a>
              </div>
            </section>
          </div>

          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Kontak Kami</h3>
            <p className="mb-2">Nama : Egin Tia Yulanda</p>
            <p className="mb-2">Nomor Telepon: +62 852 6610 1045</p>
            <p>Alamat: Palembang, Sumatra Selatan </p>
          </div>
        </div>
      </div>
      <p className="text-center text-black pb-1 pt-2">
        &copy; 2023 Egin Zarafa . All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
