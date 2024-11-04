'use client'
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import FunFact2 from "@/app/ui/FunFact/FunFact2";
import Hero4 from "@/app/ui/Hero/Hero4";
import LogoList from "@/app/ui/LogoList";
import MovingText2 from "@/app/ui/MovingText/MovingText2";
import Portfolio from "@/app/ui/Portfolio";
import PostList from "@/app/ui/Post/PostList";
import SectionHeading from "@/app/ui/SectionHeading";
import TestimonialSlider from "@/app/ui/Slider/TestimonialSlider";
import TimelineSlider from "@/app/ui/Slider/TimelineSlider";
import Spacing from "@/app/ui/Spacing";
import VideoModal from "@/app/ui/VideoModal";
import { Icon } from "@iconify/react";
import { useState } from "react";

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
const portfolioData = [
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_11.jpeg',
    category: 'ui_ux_design',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_12.jpeg',
    category: 'logo_design',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_13.jpeg',
    category: 'web_design',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_14.jpeg',
    category: 'mobile_apps',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_15.jpeg',
    category: 'ui_ux_design',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_16.jpeg',
    category: 'web_design',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_11.jpeg',
    category: 'ui_ux_design',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_12.jpeg',
    category: 'logo_design',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_13.jpeg',
    category: 'web_design',
  },
];

export default function DigitalAgencyHome() {
  const [itemShow, setItemShow] = useState(6);
  return (
    <>
      {/* Start Hero Section */}
      <Hero4
        title="#LoHacemos<br>Adue"
        subtitle="ESCUCHAMOS, APRENDEMOS Y PROPONEMOS. Ofrecemos una solución distinta y atractiva."
        scrollDownId="#service"
        socialLinksHeading="Follow Us"
        heroSocialLinks={heroSocialLinks}
        phoneNumber="+044 546664"
        email="info@arino.com"
      />
      {/* End Hero Section */}

      {/* Start Funfact Section */}
      <Div className="container">
        <FunFact2
          data={funfaceData}
          variant="cs-type1"
          bgUrl="/images/funfact_shape_bg.svg"
        />
      </Div>
      {/* End Funfact Section */}

      {/* Start Services Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
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

      {/* Start About Section */}
      <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Spacing lg="150" md="80" />
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-5 col-xl-4">
              <SectionHeading
                title="Nuestra mirada es en equipo"
                subtitle="¿Por qué Adue?"
                btnText="Ver más"
                btnLink="/about"
              />
              <Spacing lg="45" md="45" />
            </Div>
            <Div className="col-lg-7 offset-xl-1">
              <Div className="cs-half_screen">
                <VideoModal
                  videoSrc="https://www.youtube.com/watch?v=VcaAVWtP48A"
                  bgUrl="/images/video_bg.jpeg"
                  variant="cs-style1 cs-size1"
                />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End About Section */}

      {/* Start Projects Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Casos de éxito"
          subtitle="Últimos trabajos"
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
        <Div className="row">
          {portfolioData.slice(0, itemShow).map((item, index) => (
            <Div
              className={`${
                index === 0 || index === 3 || index === 4
                  ? 'col-lg-8'
                  : 'col-lg-4'
              }`}
              key={index}
            >
              <Portfolio
                title={item.title}
                subtitle={item.subtitle}
                href={item.href}
                src={item.src}
                variant="cs-style1 cs-type1"
              />
              <Spacing lg="25" md="25" />
            </Div>
          ))}
        </Div>

        <Div className="text-center">
          {portfolioData.length <= itemShow ? (
            ''
          ) : (
            <>
              <Spacing lg="65" md="40" />
              <span
                className="cs-text_btn"
                onClick={() => setItemShow(itemShow + 3)}
              >
                <span>Load More</span>
                <Icon icon="bi:arrow-right" />
              </span>
            </>
          )}
        </Div>
      </Div>
      {/* End Projects Section */}

      {/* Start Testimonial Section
      <TestimonialSlider />
      {/* End Testimonial Section */}

      {/* Start Blog Section
      <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Spacing lg="145" md="80" />
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-5 col-xl-4">
              <SectionHeading
                title="Explore recent publication"
                subtitle="Our Blog"
                btnText="View More Blog"
                btnLink="/blog"
              />
              <Spacing lg="45" md="45" />
            </Div>
            <Div className="col-lg-7 offset-xl-1">
              <PostList />
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg="145" md="80" />
      {/* End Blog Section */}

      {/* Start LogoList Section */}
      <Div className="container">
        <SectionHeading
          title="Algunos de nuestros clientes"
          subtitle="Confían en nosotros"
          variant="cs-style1 text-center mt-2"
        />
        <Spacing lg="70" md="45" />
        <LogoList />
      </Div>
      <Spacing lg="150" md="80" />
      {/* End LogoList Section */}

      {/* Start CTA Section */}
      <Div className="container">
        <Cta
          title="Hagámoslo Adue"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}