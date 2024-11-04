'use client';
import Cta from '@/app/ui/Cta';
import Div from '@/app/ui/Div';
import FunFact from '@/app/ui/FunFact';
import Hero from '@/app/ui/Hero';
import LogoList from '@/app/ui/LogoList';
import MovingText from '@/app/ui/MovingText';
import SectionHeading from '@/app/ui/SectionHeading';
import PortfolioSlider from '@/app/ui/Slider/PortfolioSlider';
import PostSlider from '@/app/ui/Slider/PostSlider';
import TeamSlider from '@/app/ui/Slider/TeamSlider';
import TestimonialSlider from '@/app/ui/Slider/TestimonialSlider';
import TimelineSlider from '@/app/ui/Slider/TimelineSlider';
import Spacing from '@/app/ui/Spacing';
import VideoModal from '@/app/ui/VideoModal';
import Card from './ui/Card';
import MovingText2 from "@/app/ui/MovingText/MovingText2";

// Hero Social Links
const heroSocialLinks = [
  {
    name: 'Behance',
    links: '/',
  },
  {
    name: 'Twitter',
    links: '/',
  },
];
// FunFact Data
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

const serviceData1 = [
  {
    title: 'Diseño web',
    href: '/service/service-details',
  },
  {
    title: 'Motion graphics',
    href: '/service/service-details',
  },
  {
    title: 'Branding',
    href: '/service/service-details',
  },
];
const serviceData2 = [
  {
    title: 'Desarrollo de Software',
    href: '/service/service-details',
  },
  {
    title: 'Plugins a medida',
    href: '/service/service-details',
  },
  {
    title: 'Sitios web',
    href: '/service/service-details',
  },
  {
    title: 'Ecommerce',
    href: '/service/service-details',
  },
];

// Portfolio Data
const portfolioData = [
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_1.jpeg',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_2.jpeg',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_0.jpg',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_3.jpeg',
  },
];

export default function Home() {
  return (
    <>
      {/* Start Hero Section */}
      <Hero
        title="#LoHacemos<br>Adue"
        subtitle="Ofrecemos una solución distinta y atractiva. Combinamos <u>creatividad</u> y <u>tecnología</u> para brindar soluciones a grandes empresas y PyMES"
        btnText="Conversemos"
        btnLink="/contact"
        scrollDownId="#service"
        socialLinksHeading="Follow Us"
        heroSocialLinks={heroSocialLinks}
        bgImageUrl="/images/hero_bg.jpeg"
      />
      {/* End Hero Section */}

      {/* Start FunFact Section */}
      <div className="container">
        <FunFact
          variant="cs-type1"
          title="ESCUCHAMOS, APRENDEMOS Y PROPONEMOS"
          subtitle="Como empresa jóven tenemos la cualidad de escuchar y atender las propuestas de un modo más abierto, actualizarnos a diario no solo desde lo técnico, sino también desde lo comunicacional."
          data={funfaceData}
        />
      </div>
      {/* End FunFact Section */}

      {/* Start Service Section
      <Spacing lg="150" md="80" />
      <Div id="service">
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Servicios"
                subtitle="¿Qué ofrecemos?"
                btnText="Contactanos"
                btnLink="/contact"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-8">
              <Div className="row">
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="UI/UX design"
                    link="/service/service-details"
                    src="/images/service_1.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="React.js Development"
                    link="/service/service-details"
                    src="/images/service_2.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Digital Marketing"
                    link="/service/service-details"
                    src="/images/service_3.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Technology"
                    link="/service/service-details"
                    src="/images/service_4.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Service Section */}

      {/* Start Services Section */}
      <Spacing lg="145" md="80" />
      <Div id="service" className="container">
        <SectionHeading
            title="¿Qué ofrecemos?"
            subtitle="Servicios"
            variant="cs-style1 text-center"
        />
        <Spacing lg="65" md="45" />
      </Div>
      {/* End Services Section */}

      {/* Start Moving Text Section */}
      <MovingText2 data={serviceData1} />
      <Spacing lg="20" md="10" />
      <MovingText2 reverseDirection data={serviceData2} />
      {/* End Moving Text Section */}

      {/* Start Portfolio Section */}
      <Spacing lg="150" md="50" />
      <Div>
        <Div className="container">
          <SectionHeading
            title="Portfolio"
            subtitle="Últimos trabajos"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
        </Div>
        <PortfolioSlider data={portfolioData} />
      </Div>
      {/* End Portfolio Section */}

      {/* Start Video Block Section */}
      <Spacing lg="130" md="70" />
      <Div className="container my-2">
        <h2 className="cs-font_50 cs-m0 text-center cs-line_height_4">
            Desde el 2018 venimos construyendo y transitando esta empresa y aventura. Nuestro desarrollo se basa en la búsqueda y en la originalidad de hacer lo que realmente nos gusta.
        </h2>
        <Spacing lg="70" md="70" />
        <VideoModal
          videoSrc="https://www.youtube.com/watch?v=VcaAVWtP48A"
          bgUrl="/images/video_bg.jpeg"
        />
      </Div>
      {/* End Video Block Section */}

      {/* Start Testimonial Section */}
      <TestimonialSlider />
      {/* End Testimonial Section */}

      {/* Start Blog Section */}
      <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Últimas publicaciones"
                subtitle="Blog"
                btnText="Ver todas las notas"
                btnLink="/blog"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <Div className="cs-half_of_full_width">
                <PostSlider />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Blog Section */}

      {/* Start MovingText Section */}
      <Spacing lg="125" md="70" />
      <MovingText text="Algunos de nuestros clientes - " />
      <Spacing lg="105" md="70" />
      {/* End MovingText Section */}

      {/* Start LogoList Section */}
      <Div className="container">
        <LogoList />
      </Div>
      <Spacing lg="150" md="80" />
      {/* End LogoList Section */}

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
