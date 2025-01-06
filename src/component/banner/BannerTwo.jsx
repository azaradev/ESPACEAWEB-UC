"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, Autoplay, Keyboard, EffectFade } from 'swiper/modules';
import { useState } from 'react';
function BannerTwo() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div>
            <div className="swiper-banner-two-wrapper" id='home'>
                <div className="swiper mySwiper-banner-two">
                    <Swiper
                        modules={[Navigation, Thumbs, Autoplay, Keyboard, EffectFade]} // Import Swiper modules
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
                        keyboard={{ enabled: true, onlyInViewport: true, speed: 1000 }}
                        autoplay={{ delay: 4000 }}
                        loop={true}
                        thumbs={{ swiper: thumbsSwiper }} // Connect thumbs swiper
                        effect="fade"
                        className="mySwiper-banner-two" // Class for styling
                    >
                        <SwiperSlide>
                            {/* banner-two area start */}
                            <div className="banner-twoa-rea-start bg_image banner-bg-2">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            {/* banner content two inner area start */}
                                            <div className="banner-inner-content-wrapper">
                                                <span className="pre-title">Innovación arquitectónica</span>
                                                <h1 className="title">
                                                    Explora <span>ESPACEA</span> <br />
                                                    UC
                                                </h1>
                                                <p className="disc">
                                                Conoce nuestras carreras y sé parte de una comunidad que transforma espacios y crea soluciones sostenibles para las ciudades del mañana.
                                                </p>
                                                <a
                                                    href="/portfolio-grid-1"
                                                    className="rts-btn btn-border"
                                                >
                                                    Conoce más <i className="fa-regular fa-arrow-right" />
                                                </a>
                                            </div>
                                            {/* banner content two inner area end */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* banner-two area end */}
                        </SwiperSlide>
                        <SwiperSlide>
                            {/* banner-two area start */}
                            <div className="banner-twoa-rea-start bg_image banner-bg-3">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            {/* banner content two inner area start */}
                                            <div className="banner-inner-content-wrapper">
                                                <span className="pre-title">Proyectos destacados</span>
                                                <h1 className="title">
                                                    Portafolios y <span>Proyectos</span> <br />
                                                    Destacados
                                                </h1>
                                                <p className="disc">
                                                Descubre los proyectos más innovadores de nuestros estudiantes, egresados y docentes. Innovación, creatividad y excelencia en cada diseño.
                                                </p>
                                                <a
                                                    href="/portfolio-grid-1"
                                                    className="rts-btn btn-border"
                                                >
                                                    Ver portafolios <i className="fa-regular fa-arrow-right" />
                                                </a>
                                            </div>
                                            {/* banner content two inner area end */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* banner-two area end */}
                        </SwiperSlide>
                        <SwiperSlide>
                            {/* banner-two area start */}
                            <div className="banner-twoa-rea-start bg_image banner-bg-4">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            {/* banner content two inner area start */}
                                            <div className="banner-inner-content-wrapper">
                                                <span className="pre-title">Experiencia Arquitectónica</span>
                                                <h1 className="title">
                                                    Comunidad y <span>Eventos</span> <br />
                                                    2025
                                                </h1>
                                                <p className="disc">
                                                Participa en el evento que reúne a expertos, estudiantes y profesionales para reflexionar sobre el impacto de la arquitectura en nuestras ciudades.
                                                </p>
                                                <a
                                                    href="/portfolio-grid-1"
                                                    className="rts-btn btn-border"
                                                >
                                                    Nuestros eventos <i className="fa-regular fa-arrow-right" />
                                                </a>
                                            </div>
                                            {/* banner content two inner area end */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* banner-two area end */}
                        </SwiperSlide>
                    </Swiper>
                    <div className="thumbs-swiper-main-wrapper-two">
                        {/* Swiper */}
                        <div className="swiper swiper-banner-thumb-2">
                            <Swiper
                                modules={[Navigation, Thumbs]} // Add required modules
                                slidesPerView={3}
                                onSwiper={setThumbsSwiper} // Set thumbs swiper instance
                                className="swiper-banner-thumb-2" // Class for custom styling
                            >
                                <SwiperSlide>
                                    {/* single item */}
                                    <div className="single-item">
                                        <span className="number">01</span>
                                        <div className="inner">
                                            <span className="pre">Espacea UC</span>
                                            <h6 className="title">Experiencia arquitectónica</h6>
                                        </div>
                                    </div>
                                    {/* single item end */}
                                </SwiperSlide>
                                <SwiperSlide>
                                    {/* single item */}
                                    <div className="single-item">
                                        <span className="number">02</span>
                                        <div className="inner">
                                            <span className="pre">Portafolios</span>
                                            <h6 className="title">Nuestros <br/>Proyectos</h6>
                                        </div>
                                    </div>
                                    {/* single item end */}
                                </SwiperSlide>
                                <SwiperSlide>
                                    {/* single item */}
                                    <div className="single-item">
                                        <span className="number">03</span>
                                        <div className="inner">
                                            <span className="pre">Eventos</span>
                                            <h6 className="title">Actividades Importantes</h6>
                                        </div>
                                    </div>
                                    {/* single item end */}
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default BannerTwo