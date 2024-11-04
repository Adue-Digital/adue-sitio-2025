'use client'
import Accordion from "@/app/ui/Accordion";
import Button from "@/app/ui/Button";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import IconBox from "@/app/ui/IconBox";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import TestimonialSlider from "@/app/ui/Slider/TestimonialSlider";
import Spacing from "@/app/ui/Spacing";
import Image from "next/image";
import serviceImage from '../../../../public/images/service_img_1.jpeg'
import aboutImg from "../../../../public/images/about_img_1.jpeg";
import aboutImg2 from "../../../../public/images/about_img_2.jpeg";
import aboutImg3 from "../../../../public/images/about_img_3.jpeg";
import PortfolioSlider from "@/app/ui/Slider/PortfolioSlider";
import aboutImg4 from "../../../../public/images/about_img_4.jpeg";

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

export default function ServiceDetailsPage() {
  return (
    <>
      <PageHeading 
        title='Software a medida'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText='Software a medida'
      />
      <Spacing lg='145' md='80'/>

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-7">
            <SectionHeading
                title="Desarrollo de Software a Medida"
                subtitle="Servicios"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                Nos especializamos en ofrecer soluciones de desarrollo de software a medida que se adaptan a las necesidades específicas de tu negocio. Entendemos que cada empresa es única, por lo que trabajamos de cerca contigo para diseñar y desarrollar aplicaciones que optimicen tus procesos y mejoren tu productividad.              </p>
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
        </Div>
      </Div>
      {/* End About Section */}

      <Div className="container">
        <SectionHeading
            title='Nuestros Servicios Incluyen'
            subtitle='UI/UX Design'
            variant='cs-style1 text-center'
        />
        <Spacing lg='90' md='45'/>
        <Div className="row">
          <Div className="col-lg-4">
            <IconBox
                icon='/images/icons/service_icon_1.svg'
                title='Aplicaciones Web y Móviles'
                subtitle='Desarrollamos aplicaciones web y móviles intuitivas y de alto rendimiento que permiten a tu negocio estar siempre conectado. Utilizamos las últimas tecnologías y frameworks para asegurarnos de que tu aplicación sea segura, escalable y fácil de mantener.'
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
                icon='/images/icons/service_icon_2.svg'
                title='Integración de Sistemas'
                subtitle='Ayudamos a integrar diferentes sistemas y aplicaciones para que trabajen en conjunto de manera eficiente. Esto permite una gestión más fluida de la información y optimiza los procesos internos.'
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
                icon='/images/icons/service_icon_3.svg'
                title='Mantenimiento y Soporte'
                subtitle='Ofrecemos servicios de mantenimiento y soporte para asegurarnos de que tu software funcione sin problemas y esté siempre actualizado. Nos ocupamos de resolver cualquier problema que pueda surgir y de implementar mejoras continuas.'
            />
            <Spacing lg='30' md='30'/>
          </Div>
        </Div>
      </Div>

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
                title="¿Por qué Adue?"
                subtitle="Eleginos"
            >
              <Spacing lg="30" md="20" />
              <ul>
                <li><strong>Experiencia y Profesionalismo</strong>: Contamos con un equipo de desarrolladores altamente capacitados y con amplia experiencia en diversos sectores.</li>
                <li><strong>Soluciones Personalizadas</strong>: Cada proyecto es único para nosotros. Nos aseguramos de entender tus necesidades y ofrecerte soluciones a medida.</li>
                <li><strong>Calidad y Eficiencia</strong>: Nos comprometemos a entregar productos de alta calidad en los tiempos establecidos, sin comprometer la eficiencia.</li>
                <li><strong>Soporte Continuo</strong>: Estamos aquí para ayudarte en cada etapa del desarrollo y más allá, ofreciendo soporte continuo y actualizaciones regulares.</li>
              </ul>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading>
          </Div>
        </Div>
      </Div>
    </>
  )
}
