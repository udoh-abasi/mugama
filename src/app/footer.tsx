import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const date = new Date();

  return (
    <footer className="p-4 pb-16 text-white bg-[var(--primary-color)]">
      <div className="max-w-[1000px] mx-auto">
        <Image
          src="/mugama_logo_blue_bg 1.png"
          alt="Cubes"
          width={74}
          height={37}
          priority
          className="w-[70px] py-16"
        />

        <div className="min-[800px]:grid grid-cols-4 gap-10">
          <p className="pb-10 text-justify max-w-[570px] min-[800px]:text-left">
            As a top technology company in Africa, Mugama Technologies
            specializes in creating tailored solutions that align perfectly with
            your business goals.
          </p>

          <article>
            <h3 className="text-xl font-semibold pb-6">Our Company</h3>
            <ul className="flex flex-col gap-4 text-lg pb-10">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/products">Product & Services</Link>
              </li>
              <li>
                <Link href="/">Clients</Link>
              </li>
              <li>
                <Link href="/">Partners</Link>
              </li>
            </ul>
          </article>

          <article>
            <h3 className="text-xl font-semibold pb-6">Community</h3>
            <ul className="flex flex-col gap-4 text-lg pb-10">
              <li>
                <Link href="/">News</Link>
              </li>
              <li>
                <Link href="/products">Blog</Link>
              </li>
              <li>
                <Link href="/">Careers</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </article>

          <article>
            <h3 className="text-xl font-semibold pb-6">Our Social Media</h3>
            <p className="text-lg pb-6">
              Connect with us on our social media handles
            </p>
            <ul className="flex gap-4 text-3xl pb-10">
              <li>
                <Link href="/">
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <FaLinkedin />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <FaXTwitter />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <FaInstagram />
                </Link>
              </li>
            </ul>
          </article>
        </div>

        <small>
          Copyright {date.getFullYear()} &copy; Mugama Technologies. All rights
          reserved.
        </small>
      </div>
    </footer>
  );
};
export default Footer;
