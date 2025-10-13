import Image from "next/image";
import { GoShield } from "react-icons/go";
import { IoHardwareChipOutline } from "react-icons/io5";
import { LuMonitorCog, LuMonitorDot } from "react-icons/lu";
import { MdNetworkCheck } from "react-icons/md";
import { PiMonitor } from "react-icons/pi";
import * as motion from "motion/react-client";

export default function Home() {
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
    <main>
      <section className="px-4 pt-[100px] min-[550px]:px-12" id="landingPage">
        <div className="min-[605px]:mx-auto min-[605px]:max-w-[605px] min-[800px]:mx-0 min-[800px]:max-w-none min-[800px]:flex flex-row-reverse">
          <div className="min-[800px]:flex-[1_1_50%]">
            <em className="not-italic py-10 block font-bold text-lg max-w-[308px] min-[1000px]:text-3xl min-[1000px]:max-w-[500px]">
              Driving Business Growth Through Customized Technologies Solutions.
            </em>

            <p className="text-sm pb-8 max-w-[420px] min-[1000px]:text-lg min-[1000px]:max-w-[500px]">
              As a versatile Enterprise Transformation and Technologies
              Consulting firm, we leverage our broad expertise and industry
              knowledge to provide innovative solutions and measurable value for
              our clients.
            </p>

            <button
              type="button"
              className="block cursor-pointer w-[140px] h-[35px] min-[1000px]:w-[160px] min-[1000px]:h-[45px] min-[1000px]:text-lg bg-[var(--primary-color)] text-white rounded-lg"
            >
              Our Solutions
            </button>
          </div>

          <motion.div
            initial={{ rotate: 0 }}
            whileInView={{ rotate: 360 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7 }}
            className="overflow-x-hidden"
          >
            <Image
              src="/image 1.webp"
              alt="Cubes"
              width={792}
              height={822}
              priority
              className="block min-[800px]:flex-[1_1_50%] min-[1250px]:flex-[1_1_40%]"
            />
          </motion.div>
        </div>
      </section>

      <section className="p-4 min-[550px]:px-12 min-[605px]:mx-auto min-[665px]:px-0 max-w-[605px] min-[800px]:max-w-none min-[800px]:p-4">
        <h2 className="text-center font-bold text-xl py-10 min-[800px]:text-2xl text-[var(--primary-color)]">
          Why Choose Us?
        </h2>

        <p className="text-justify min-[800px]:text-center min-[800px]:pb-12 min-[800px]:max-w-[600px] min-[800px]:mx-auto">
          At Mugama Technologies, we deliver innovative, secure, and reliable
          solutions tailored to your industry. With a proven track record and
          client-focused approach, we prioritize your success across every
          sector.
        </p>

        <div className="min-[800px]:flex justify-center items-center gap-4 max-w-[1000px] mx-auto">
          <motion.article
            className="p-8 my-8 text-justify rounded-2xl  min-h-[200px] min-[800px]:mt-0 flex-[1_1_30%] shadow-[0px_5px_15px_rgba(0,0,0,0.15)]"
            variants={myAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-[var(--primary-color)] text-2xl font-semibold pb-3">
              Innovation
            </h3>
            <p>
              We drive solutions through creativity and innovation, constantly
              exceeding expectations.
            </p>
          </motion.article>

          <motion.article
            className="p-8 mb-8 text-justify rounded-2xl min-h-[200px] flex-[1_1_30%] shadow-[0px_5px_15px_rgba(0,0,0,0.15)]"
            variants={myAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-[var(--primary-color)] text-2xl font-semibold pb-3">
              Excellence
            </h3>
            <p>
              We uphold unwavering standards of quality, precision, at all
              times.
            </p>
          </motion.article>

          <motion.article
            className="p-8 mb-8 text-justify rounded-2xl min-h-[200px] flex-[1_1_30%] shadow-[0px_5px_15px_rgba(0,0,0,0.15)]"
            variants={myAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-[var(--primary-color)] text-2xl font-semibold pb-3">
              Integrity
            </h3>
            <p>
              We champion honesty, transparency, and trust in all fostering
              ethical practices.
            </p>
          </motion.article>
        </div>
      </section>

      <section className="p-4 min-[550px]:px-12 min-[800px]:p-4 bg-[#F5F4F4] min-[1000px]:flex justify-center items-center">
        <div className="min-[605px]:mx-auto max-w-[605px] min-[800px]:mx-0 min-[800px]:max-w-[1000px] min-[800px]:grid min-[800px]:grid-cols-2 justify-center items-center gap-4">
          <div>
            <p>Welcome to Mugama Technologies</p>

            <h2 className="font-semibold text-xl py-4 text-[var(--primary-color)]">
              About Our Company
            </h2>

            <motion.div
              className="bg-[var(--primary-color)] rounded-l-4xl"
              variants={myAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="bg-[#F5F4F4] ml-2 text-justify p-4 rounded-l-4xl">
                <p>
                  Mugama Technologies is a dynamic, multi-faceted enterprise
                  specializing in transformational technology consulting
                  services. We excel in crafting technology solutions tailored
                  to the diverse needs of our clients. Our expertise spans
                  various industries and business functions, enabling us to
                  deliver exceptional value to both private and public sector
                  organizations.
                </p>

                <p className="pt-8">
                  At Mugama Technologies, we focus on cultivating
                  high-performance enterprises and solving mid-tier challenges,
                  the vital space where IT managers grapple with technology
                  upgrades, application rollouts, and complex business dilemmas
                  that demand external resources.
                </p>
              </div>
            </motion.div>

            <button
              type="button"
              className="block my-8 cursor-pointer w-[140px] h-[42px] bg-[var(--primary-color)] text-white rounded-lg"
            >
              Learn More
            </button>
          </div>

          <motion.div
            variants={myAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/Frame 9.webp"
              alt="Two women smiling while shaking hands"
              width={359}
              height={274}
              priority
              className="mx-auto block w-full"
            />
          </motion.div>
        </div>
      </section>

      <div>
        <h2 className="text-center font-bold text-xl py-10 min-[800px]:text-2xl text-[var(--primary-color)]">
          Our Services
        </h2>

        <p className="text-justify max-w-[450px] p-4 mx-auto min-[800px]:text-center min-[800px]:pb-12 min-[800px]:max-w-[600px] min-[800px]:mx-auto">
          Mugama Technologies specializes in the following services, each
          designed to enhance your business&apos;s technological capabilities:
        </p>
      </div>

      <section className="p-4 min-[550px]:px-12 min-[605px]:mx-auto max-w-[605px] min-[665px]:px-0 min-[800px]:py-12 min-[800px]:px-4 min-[800px]:max-w-[1000px] min-[800px]:grid grid-cols-3 gap-4">
        <motion.article
          className="p-6 mt-8 min-[800]:mt-0 mb-4 text-justify rounded-4xl  min-h-[270px] shadow-[0px_0px_15px_rgba(0,0,0,0.3)]"
          variants={myAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-[var(--primary-color)] text-xl font-semibold pb-3">
            <PiMonitor className="text-4xl mb-4" />
            IT Consultation
          </h3>
          <p>
            We offer expert guidance to help you make strategic technology
            decisions, ensuring your IT infrastructure aligns with your business
            goals.
          </p>
        </motion.article>

        <motion.article
          className="p-6 mb-4 text-justify rounded-4xl  min-h-[270px] shadow-[0px_0px_15px_rgba(0,0,0,0.3)]"
          variants={myAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-[var(--primary-color)] text-xl font-semibold pb-3">
            <IoHardwareChipOutline className="text-4xl mb-4" />
            Hardware Solutions
          </h3>
          <p>
            Mugama Technologies offers a range of high-quality IT hardware, from
            servers to peripherals, to support your technology infrastructure.
          </p>
        </motion.article>

        <motion.article
          className="p-6 mb-4 text-justify rounded-4xl  min-h-[270px] shadow-[0px_0px_15px_rgba(0,0,0,0.3)]"
          variants={myAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-[var(--primary-color)] text-xl font-semibold pb-3">
            <LuMonitorCog className="text-4xl mb-4" />
            Managed IT Services
          </h3>
          <p>
            Our team provides reliable support and maintenance to keep your
            systems running smoothly, minimizing downtime and optimizing
            performance.
          </p>
        </motion.article>

        <motion.article
          className="p-6 mb-4 text-justify rounded-4xl  min-h-[270px] shadow-[0px_0px_15px_rgba(0,0,0,0.3)]"
          variants={myAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-[var(--primary-color)] text-xl font-semibold pb-3">
            <MdNetworkCheck className="text-4xl mb-4" />
            Network Solutions
          </h3>
          <p>
            We design and implement robust network infrastructures, enabling
            seamless communication and data transfer within your organization.
          </p>
        </motion.article>

        <motion.article
          className="p-6 mb-4 text-justify rounded-4xl  min-h-[270px] shadow-[0px_0px_15px_rgba(0,0,0,0.3)]"
          variants={myAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-[var(--primary-color)] text-xl font-semibold pb-3">
            <GoShield className="text-4xl mb-4" />
            Cybersecurity
          </h3>
          <p>
            Protect your digital assets with our comprehensive cybersecurity
            solutions, safeguarding your business from evolving online threats.
          </p>
        </motion.article>

        <motion.article
          className="p-6 mb-4 text-justify rounded-4xl  min-h-[270px] shadow-[0px_0px_15px_rgba(0,0,0,0.3)]"
          variants={myAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-[var(--primary-color)] text-xl font-semibold pb-3">
            <LuMonitorDot className="text-4xl mb-4" />
            Software Development{" "}
          </h3>
          <p>
            Our cloud computing solutions empower scalability, flexibility, and
            cost-efficiency, allowing you to harness the full potential of cloud
            technology.
          </p>
        </motion.article>
      </section>
    </main>
  );
}
