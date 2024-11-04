'use client'
import Image from "next/image";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import FunFact from "@/app/ui/FunFact";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import TeamSlider from "@/app/ui/Slider/TeamSlider";
import Spacing from "@/app/ui/Spacing";
import aboutImg from '../../../public/images/about_img_1.jpeg'
import aboutImg2 from '../../../public/images/about_img_2.jpeg'
import aboutImg3 from '../../../public/images/about_img_3.jpeg'
import aboutImg4 from '../../../public/images/about_img_4.jpeg'




const funfaceData = [
  {
    title: 'Líneas de código',
    factNumber: '550M',
  },
  {
    title: 'Proyectos realizados',
    factNumber: '100',
  },
  {
    title: 'Clientes contentos',
    factNumber: '75',
  },
  {
    title: 'Mates tomados',
    factNumber: '50M',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="Nosotros"
        bgSrc="/images/about_hero_bg.jpeg"
        pageLinkText="Nosotros"
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-7">
            <SectionHeading
              title="Creatividad e innovación"
              subtitle="Somos Adue"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                Desde el 2018 venimos construyendo y transitando esta empresa y aventura. Nuestro desarrollo se basa en la búsqueda y en la originalidad de hacer lo que realmente nos gusta.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-xl-2">
            <Image
              src={aboutImg}
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-7">
            <Image
              src={aboutImg2}
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-5">
            <Image
              src={aboutImg3}
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
        </Div>
      </Div>
      {/* End About Section */}

      {/* Start Why Choose Section */}
      <Spacing lg="100" md="80" />
      <Div className="container-fluid bg-accent">
        <Div className="container m-auto">
          <Div className="row">
            <Div className="col-12">
              <SectionHeading
                  title="Nuestro propósito"
                  subtitle=""
                  variant="text-center cs-style1"
              >
                <Spacing lg="30" md="30"/>
                <Div className="cs-separator cs-accent_bg"></Div>
                <Spacing lg="25" md="0"/>
              </SectionHeading>
            </Div>
          </Div>

          <Div className="row">
            <Div className="col-12 col-md-6">
              <p className="cs-m0">
                Imaginamos un futuro en el que cada decisión que tomemos como empresa funcione como un disruptor en el ambiente que nos concibe. Diseñamos y desarrollamos por y para el futuro, para el cambio y el progreso.
              </p>
            </Div>
            <Div className="col-12 col-md-6">
              <p className="cs-m0">
                Sabemos que cuando hay un buen equipo trabajar se vuelve algo placentero, eso es muy importante en el día a día. Ponderamos buen ambiente entre todos los que formamos parte. ¡Nos vemos en la peña Aduense!
              </p>
            </Div>
          </Div>
        </Div>
        <Spacing lg="75" md="55" />
      </Div>
      {/* End Why Choose Section */}

      {/* Start Why Choose Section */}
      <Spacing lg="100" md="80"/>
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <Image
                  src={aboutImg4}
                  alt="About"
                  className="w-100 cs-radius_15"
                />
              </Div>
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            <SectionHeading
              title="Nuestra mirada es en equipo"
              subtitle="¿Por qué Adue?"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                Creemos en el trabajo colaborativo, y que un buen resultado se logra cuando existe una comunicación fluida y bidireccional entre el cliente y nosotros. Creemos que el todo es mayor que la suma de las partes y que siempre lo mejor es trabajar adue.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading>
          </Div>
        </Div>
      </Div>
      {/* End Why Choose Section */}

      <Spacing lg="25" md="0" />

      {/* Start CTA Section */}
      <Div className="container">
        <Cta
            title="Hagámoslo Adue"
            btnText="Agendar reunión"
            btnLink="/contact"
            bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
