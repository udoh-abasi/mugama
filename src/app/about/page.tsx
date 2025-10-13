import Image from "next/image";
import * as motion from "motion/react-client";

const About = () => {
  const myAnimation = {
    hidden: {
      opacity: 0,
      transform: "translateY(100px)",
    },

    visible: {
      opacity: 1,
      transform: "translateY(0px)",
    },
  };

  return (
    <main className="px-4 pt-[150px] min-[550px]:px-12 max-w-[1400px] mx-auto">
      <Image
        src="/about us _img.webp"
        alt="Youth professional men and women"
        width={1314}
        height={841}
        priority
        className="block"
      />

      <section>
        <h1 className="text-center font-bold text-2xl py-10 min-[800px]:text-3xl text-[var(--primary-color)]">
          About Us
        </h1>

        <p className="text-justify">
          From its inception as a private limited liability company, Mugama
          Technologies has earned a sterling reputation, attributed to our
          exceptional team of professionals and consultants who tirelessly serve
          our clients. Our team boasts of collective industry experience,
          spanning diverse sectors of the economy. Our competencies encompass
          business transformation, financial advisory, software engineering,
          communication technology, e-business development, government
          transformations (e-Government), application integration, IT
          consulting, migration services, and process reengineering.
        </p>
      </section>

      <section className="min-[800px]:grid grid-cols-2 gap-4 min-[1000px]:gap-16">
        <motion.article
          className="p-6 my-8 rounded-3xl shadow-[0px_5px_15px_rgba(0,0,0,0.15)]"
          variants={myAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="mb-8 mt-4 mx-auto w-[160px] h-[52px] bg-[var(--primary-color)] text-white text-xl font-semibold rounded-tl-2xl rounded-br-2xl flex justify-center items-center">
            Mission
          </h3>

          <p className="text-justify">
            At Mugama Technologies, our mission is to empower our clients with
            cutting-edge technology solutions that enhance their efficiency,
            productivity, and competitiveness. We deliver exceptional value by
            aligning our services with the goals of our clients.
          </p>
        </motion.article>

        <motion.article
          className="p-6 my-8 rounded-3xl shadow-[0px_5px_15px_rgba(0,0,0,0.15)]"
          variants={myAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="mb-8 mt-4 mx-auto w-[160px] h-[52px] bg-[var(--primary-color)] text-white text-xl font-semibold rounded-tl-2xl rounded-br-2xl flex justify-center items-center">
            Vision
          </h3>

          <p className="text-justify">
            Our vision is to be a global leader in ICT solutions, recognized for
            our innovation, expertise, and unwavering dedication to customer
            success. We aim to continuously evolve our services to meet the
            ever-changing demands of the digital age.
          </p>
        </motion.article>
      </section>

      <section>
        <h3 className="text-[var(--primary-color)] text-2xl font-semibold border-l-6 pl-6 mb-8 mt-16">
          Paradigm
        </h3>

        <div className="min-[800px]:grid grid-cols-2 gap-4 min-[1000px]:grid-cols-3">
          <motion.p
            className="mb-8 mt-4 mx-auto w-full h-[52px] bg-[var(--primary-color)] text-white text-xl font-semibold rounded-tl-2xl rounded-br-2xl flex justify-center items-center"
            variants={myAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7 }}
          >
            Innovation
          </motion.p>
          <motion.p
            className="mb-8 mt-4 mx-auto w-full h-[52px] bg-[var(--primary-color)] text-white text-xl font-semibold rounded-tl-2xl rounded-br-2xl flex justify-center items-center"
            variants={myAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7 }}
          >
            Excellence
          </motion.p>
          <motion.p
            className="mb-8 mt-4 mx-auto w-full h-[52px] bg-[var(--primary-color)] text-white text-xl font-semibold rounded-tl-2xl rounded-br-2xl flex justify-center items-center"
            variants={myAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7 }}
          >
            Integrity
          </motion.p>
          <motion.p
            className="mb-8 mt-4 mx-auto w-full h-[52px] bg-[var(--primary-color)] text-white text-xl font-semibold rounded-tl-2xl rounded-br-2xl flex justify-center items-center"
            variants={myAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7 }}
          >
            Collaboration
          </motion.p>
          <motion.p
            className="mb-8 mt-4 mx-auto w-full h-[52px] bg-[var(--primary-color)] text-white text-xl font-semibold rounded-tl-2xl rounded-br-2xl flex justify-center items-center"
            variants={myAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7 }}
          >
            Action
          </motion.p>
          <motion.p
            className="mb-8 mt-4 mx-auto w-full h-[52px] bg-[var(--primary-color)] text-white text-xl font-semibold rounded-tl-2xl rounded-br-2xl flex justify-center items-center"
            variants={myAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7 }}
          >
            Privacy
          </motion.p>
          <motion.p
            className="mb-8 mt-4 mx-auto w-full h-[52px] bg-[var(--primary-color)] text-white text-xl font-semibold rounded-tl-2xl rounded-br-2xl flex justify-center items-center"
            variants={myAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7 }}
          >
            Dynamism
          </motion.p>
          <motion.p
            className="mb-8 mt-4 mx-auto w-full h-[52px] bg-[var(--primary-color)] text-white text-xl font-semibold rounded-tl-2xl rounded-br-2xl flex justify-center items-center"
            variants={myAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7 }}
          >
            Specialization
          </motion.p>
          <motion.p
            className="mb-8 mt-4 mx-auto w-full h-[52px] bg-[var(--primary-color)] text-white text-xl font-semibold rounded-tl-2xl rounded-br-2xl flex justify-center items-center"
            variants={myAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7 }}
          >
            Candour
          </motion.p>
        </div>
      </section>
    </main>
  );
};

export default About;
