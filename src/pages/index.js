import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import TrioLogo from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireUs from "@/components/HireUs";
import LightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex items-center w-full min-h-screen dark:text-light">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image
                src={TrioLogo}
                alt="Trio Software logo"
                className="w-full h-auto"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              ></Image>
            </div>

            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="TRIO: Where code and design meet innovation."
                className="!text-6xl !text-left"
              />

              <p className="my-4 text-base font-medium">
                TRIO is a software company that specializes in turning ideas
                into innovative web applications. We use our expertise in code
                and design to create solutions that are both user-friendly and
                effective.
              </p>

              <div className="flex items-center self-start mt-2">
                <Link
                  href="/dummy.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
                  download={true}
                >
                  Resume <LinkArrow className="w-6 ml-1" />
                </Link>

                <Link
                  href="mailto:contact@trio.software"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireUs />

        <div className=" absolute right-8 bottom-8 inline-block w-24">
          <Image
            src={LightBulb}
            alt="Trio Software"
            className="w-full h-auto"
          ></Image>
        </div>
      </main>
    </>
  );
}
