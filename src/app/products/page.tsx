import Image from "next/image";
import { CiMedicalCase } from "react-icons/ci";
import { FaServer } from "react-icons/fa";
import { GrCloudSoftware, GrDatabase, GrStorage } from "react-icons/gr";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { LiaCubesSolid } from "react-icons/lia";
import { MdSecurity } from "react-icons/md";
import { TbCloudFog, TbDeviceDesktopCog, TbDoorEnter } from "react-icons/tb";
import { TfiWorld } from "react-icons/tfi";
import * as motion from "motion/react-client";

const Products = () => {
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
    <main className="pt-[100px] max-w-[1400px] mx-auto">
      <section className="grid grid-cols-2 grid-rows-1 justify-center items-center h-[150px] bg-[#000000]">
        <p className="text-white text-center col-start-1 col-end-3 row-start-1 row-end-1 z-1 max-w-[400px] mx-auto font-semibold p-4 min-[800px]:text-lg min-[800px]:max-w-[500px]">
          We put our customers&apos; needs first and continually strive to
          deliver outstanding service.
        </p>

        <Image
          src="/image 3.webp"
          alt="World"
          width={184}
          height={84}
          priority
          className="block col-start-1 col-end-3 row-start-1 row-end-1 h-full w-full min-[800px]:col-start-2"
        />

        <Image
          src="/Rectangle 2.webp"
          alt="Blue rectangle"
          width={393}
          height={84}
          priority
          className="block col-start-1 col-end-3 row-start-1 row-end-1 h-full w-full"
        />
      </section>

      <section className="p-4 min-[550px]:px-12">
        <h2 className="bg-[var(--primary-color)] max-w-[250px] min-[800px]:max-w-[350px] mx-auto text-center text-white text-lg uppercase h-[50px] font-semibold my-8 flex justify-center items-center">
          OEM Products
        </h2>

        <div className="mb-16 grid justify-center items-center grid-cols-1 min-[800px]:grid-cols-2 min-[800px]:gap-4 min-[1000px]:grid-cols-3">
          <motion.article
            className="p-6 mt-8 min-[800]:mt-0 mb-4 max-w-[500px] mx-auto text-justify rounded-4xl  min-h-[270px] bg-[#F5F4F4] shadow-[0px_0px_15px_rgba(0,0,0,0.3)]"
            variants={myAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-[var(--primary-color)] text-xl pb-3 flex items-center gap-2">
              <GrStorage />
              Storage
            </h3>
            <p>
              Comprehensive storage solutions: Disk, Flash, and Tape systems,
              software, SAN, NAS, and SME-focused storage.
            </p>
          </motion.article>

          <motion.article
            className="p-6 mt-8 min-[800]:mt-0 mb-4 max-w-[500px] mx-auto text-justify rounded-4xl  min-h-[270px] bg-[#F5F4F4] shadow-[0px_0px_15px_rgba(0,0,0,0.3)]"
            variants={myAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-[var(--primary-color)] text-xl pb-3 flex items-center gap-2">
              <IoCloudDownloadOutline />
              Cloud
            </h3>
            <p>
              Cloud Advisory Services, Infrastructure as a Service (IaaS), Cloud
              Strategy, and Private Cloud.
            </p>
          </motion.article>

          <motion.article
            className="p-6 mt-8 min-[800]:mt-0 mb-4 max-w-[500px] mx-auto text-justify rounded-4xl  min-h-[270px] bg-[#F5F4F4] shadow-[0px_0px_15px_rgba(0,0,0,0.3)]"
            variants={myAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-[var(--primary-color)] text-xl pb-3 flex items-center gap-2">
              <TfiWorld />
              Big Data
            </h3>
            <p>
              From software to hardware and services, we provide end-to-end Big
              Data solutions.
            </p>
          </motion.article>

          <motion.article
            className="p-6 mt-8 min-[800]:mt-0 mb-4 max-w-[500px] mx-auto text-justify rounded-4xl  min-h-[270px] bg-[#F5F4F4] shadow-[0px_0px_15px_rgba(0,0,0,0.3)]"
            variants={myAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-[var(--primary-color)] text-xl pb-3 flex items-center gap-2">
              <MdSecurity />
              Security Products
            </h3>
            <p>
              From application and data protection to network security, SIEM,
              and authentication, we deliver comprehensive security solutions.
            </p>
          </motion.article>

          <motion.article
            className="p-6 mt-8 min-[800]:mt-0 mb-4 max-w-[500px] mx-auto text-justify rounded-4xl  min-h-[270px] bg-[#F5F4F4] shadow-[0px_0px_15px_rgba(0,0,0,0.3)]"
            variants={myAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-[var(--primary-color)] text-xl pb-3 flex items-center gap-2">
              <LiaCubesSolid />
              Infrastructure Management
            </h3>
            <p>
              We work with leading technology providers such as Oracle, IBM,
              EMC, Commvault, VMware, Nimble Storage, SafeNet, Hitachi, Dell,
              Microsoft, and NetApp.
            </p>
          </motion.article>

          <motion.article
            className="p-6 mt-8 min-[800]:mt-0 mb-4 max-w-[500px] mx-auto text-justify rounded-4xl  min-h-[270px] bg-[#F5F4F4] shadow-[0px_0px_15px_rgba(0,0,0,0.3)]"
            variants={myAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-[var(--primary-color)] text-xl pb-3 flex items-center gap-2">
              <TbDeviceDesktopCog />
              Applications
            </h3>
            <p>
              From enhancing customer experiences to optimizing enterprise
              performance, we deliver robust application product lines and
              tailored industry solutions.
            </p>
          </motion.article>

          <motion.article
            className="p-6 mt-8 min-[800]:mt-0 mb-4 max-w-[500px] mx-auto text-justify rounded-4xl  min-h-[270px] bg-[#F5F4F4] shadow-[0px_0px_15px_rgba(0,0,0,0.3)]"
            variants={myAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-[var(--primary-color)] text-xl pb-3 flex items-center gap-2">
              <TbDoorEnter />
              Middleware
            </h3>
            <p>
              Our offerings span from Business Process Management and Data
              Integration to Cloud Application Foundation, Identity and Mobile
              Platforms, as well as WebCenter and WebLogic solutions.
            </p>
          </motion.article>

          <motion.article
            className="p-6 mt-8 min-[800]:mt-0 mb-4 max-w-[500px] mx-auto text-justify rounded-4xl  min-h-[270px] bg-[#F5F4F4] shadow-[0px_0px_15px_rgba(0,0,0,0.3)]"
            variants={myAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-[var(--primary-color)] text-xl pb-3 flex items-center gap-2">
              <CiMedicalCase />
              Enterprise Management
            </h3>
            <p>
              From cloud and applications to databases, middleware, hardware,
              virtualization, and lifecycle oversight, we deliver comprehensive
              management services.
            </p>
          </motion.article>

          <motion.article
            className="p-6 mt-8 min-[800]:mt-0 mb-4 max-w-[500px] mx-auto text-justify rounded-4xl  min-h-[270px] bg-[#F5F4F4] shadow-[0px_0px_15px_rgba(0,0,0,0.3)]"
            variants={myAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-[var(--primary-color)] text-xl pb-3 flex items-center gap-2">
              <GrDatabase />
              Database
            </h3>
            <p>
              Our database solutions cover Oracle Database, MySQL, Data
              Warehousing, Real Application Clusters, and advanced Database
              Security.
            </p>
          </motion.article>

          <motion.article
            className="p-6 mt-8 min-[800]:mt-0 mb-4 max-w-[500px] mx-auto text-justify rounded-4xl  min-h-[270px] bg-[#F5F4F4] shadow-[0px_0px_15px_rgba(0,0,0,0.3)]"
            variants={myAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-[var(--primary-color)] text-xl pb-3 flex items-center gap-2">
              <FaServer />
              Server
            </h3>
            <p>
              Our server portfolio includes Blade Systems, Hyperscale Servers,
              Rack and Tower Servers, SMB Servers, SPARC, x86, and Netra
              solutions.
            </p>
          </motion.article>

          <motion.article
            className="p-6 mt-8 min-[800]:mt-0 mb-4 max-w-[500px] mx-auto text-justify rounded-4xl  min-h-[270px] bg-[#F5F4F4] shadow-[0px_0px_15px_rgba(0,0,0,0.3)]"
            variants={myAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-[var(--primary-color)] text-xl pb-3 flex items-center gap-2">
              <TbCloudFog />
              Virtualization
            </h3>
            <p>
              We deliver secure and efficient virtualization solutions through
              Oracle Secure Global Desktop, VM Server for x86, and VM Server for
              SPARC.
            </p>
          </motion.article>

          <motion.article
            className="p-6 mt-8 min-[800]:mt-0 mb-4 max-w-[500px] mx-auto text-justify rounded-4xl  min-h-[270px] bg-[#F5F4F4] shadow-[0px_0px_15px_rgba(0,0,0,0.3)]"
            variants={myAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-[var(--primary-color)] text-xl pb-3 flex items-center gap-2">
              <GrCloudSoftware />
              Software
            </h3>
            <p>
              Our expertise spans the full IT spectrum—from Application
              Lifecycle Management and Big Data Analytics to Enterprise
              Security, IT Service Management, Software-Defined Data Centers,
              and advanced Mobile Solutions.
            </p>
          </motion.article>
        </div>
      </section>
    </main>
  );
};

export default Products;
