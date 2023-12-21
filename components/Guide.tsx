import Image from 'next/image'


const Guide = () => {
  return (
    <section className="flex flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="uppercase regular-18 mt-1 mb-3 text-green-50">
          we are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 ">
          <h2 className="uppercase bold-32 lg:bold-64 xl:max-w-[390px] ">
            guide you to exiting adventure
          </h2>
          <p className=" pt-6 regular-16 text-gray-30 xl:max-w-[520px]">
            Meemure Nature Camp allows guests to experience what it's like to
            live in the ancient isolated village of Meemure - one of the few
            pristine locations in Sri Lanka. The village is located deep within
            the Knuckles Wilderness in Kandy, where the locals have maintained
            their strong bonds with nature. We invite you to witness it
            first-hand, embrace Meemure while engaging in unique experiences!
          </p>
        </div>
      </div>
      <div className="flex justify-center max-container relative w-full">
        <Image
          src="/guide3.jpg"
          alt="guide"
          width={1440}
          height={280}
          className=" mr-6 md:mr-0 lg:mr-0 xl:mr-0 2xl:mr-0 md:w-full md:h-[400px] lg:h-full xl:h-full 2xl:h-full rounded-r-5xl w-full md:p-3 lg:p-3 xl:p-4 2xl:p-6 object-cover object-center md:rounded-5xl lg:rounded-5xl 2xl:rounded-5xl "
        />
      </div>
    </section>
  );
}

export default Guide