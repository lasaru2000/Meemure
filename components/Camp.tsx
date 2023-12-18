import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
  backgroundImage : string;
  title : string;
  subtitle : string;
  reviews : string
}

const CampSite = ({backgroundImage,title,subtitle,reviews}: CampProps) =>{
  return(
    <div className={`flex  h-[250px] w-[380px] lg:h-[600px] lg:w-[1100px] ${backgroundImage} bg-cover bg-no-repeat rounded-3xl lg:rounded-5xl 2xl:rounded-5xl lg:pr-[50] mx-auto`}>
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flex justify-center items-center">
        <div className="rounded-full bg-green-50 p-2 lg:p-3">
          <Image
          src="/folded-map.svg"
          alt="map"
          width={28}
          height={28}
          />
        </div>
        <div className="flex flex-col">
          <h4 className="bold-18 text-white pl-2 ">{title}</h4>
          <p className="regular-14 text-white pl-2">{subtitle}</p>

        </div>
        </div>
        <div className="flex justify-center gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
              className="inline-block h-10 w-10 rounded-full"
              src={url}
              key={url}
              alt="person"
              width={52}
              height={52}

              />

            ))}

          </span>

        </div>
      </div>
      </div>

  )
}

const camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite 
          backgroundImage="bg-bg-img-1"
          title="Putuk Truno Camp"
          subtitle="Prigen, Pasuruan"
          reviews="50+ Joined"
        />
      </div>
    </section>
  )
}

export default camp