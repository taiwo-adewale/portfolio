export default function Home() {
  return (
    <main className="text-dark dark:text-light flex items-center">
      <div className="conatainer flex justify-center">
        <div className="w-full pt-8 md:w-[80%] lg:w-[70%] xxl:w-[55%]">
          <div className="text-center">
            <h1 className="font-bold leading-9 tracking-tight text-black dark:text-white text-2xl sm:leading-10 md:text-3xl lg:text-4xl xl:text-[40px] xxl:text-5xl md:leading-14 mb-3 md:mb-6">
              Taiwo Adewale
            </h1>

            <a
              href="mailto:adewaletaiwo08@gmail.com"
              className="text-primary hover:underline font-medium lg:text-lg"
            >
              adewaletaiwo08@gmail.com
            </a>
          </div>

          <div className="py-12">
            <p className="mb-6 lg:text-lg">
              Taiwo Adewale is a product focused software engineer who likes the
              thrill of working with startups. His technical interests include
              web development, mobile application development and contributing
              to open source software.
            </p>

            <p className="mb-10 lg:text-lg">
              In his free time, he reads, plays the piano, watches anime and
              takes long walks.
            </p>

            <h2 className="font-bold leading-9 tracking-tight text-black dark:text-white text-lg sm:leading-10 md:text-xl lg:text-2xl xl:text-3xl xxl:text-4xl md:leading-14 mb-3 md:mb-6">
              Currently building
            </h2>

            <ul className="list-disc pl-4 md:pl-8 xxl:pl-12">
              <li className="lg:text-lg">
                <a
                  href="https://microdosingsupport.com/"
                  className="text-primary underline"
                >
                  microdosingsupport.com
                </a>{" "}
                - a website that links people to mental health professionals to
                help in microdosing of psychedelics.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
