"use client"
import HeaderFive from "@/component/header/HeaderFive";
import BackToTop from "@/component/backtotop/BackToTop";
import Breadcrumb from '@/component/banner/Breadcrumb';
import BrandEight from '@/component/brand/BrandEight';
import ProcessTwo from '@/component/workingprocess/ProcessTwo';
import FooterInner from '@/component/footer/FooterInner';
export default function Home() {



    return (
        <div className="">
            <HeaderFive />
            <Breadcrumb title="Services v.2" activeLink="Services v.2" />


            {/* service area start */}
            <div className="rts-service-inner-area rts-section-gap service-v-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-style-center">
                                <div className="pre-title-area">
                                    <img src="assets/images/about/02.png" alt="about" />
                                    <span className="pre-title">Our Service</span>
                                </div>
                                <h2 className="title">Our Services</h2>
                                <p className="disc">
                                    we are proud to have a dedicated and skilled team of professionals{" "}
                                    <br />
                                    who are passionate about interior renovation and design.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5 mt--30 rts-slide-up">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            {/* ingle srevice area start */}
                            <div className="singe-serice-style-two">
                                <a href="service-details.html" className="thumbnail">
                                    <img src="assets/images/service/03.jpg" alt="service" />
                                </a>
                                <div className="body">
                                    <div className="wrapper">
                                        <div className="icon-area">
                                            <div className="icon">
                                                <svg
                                                    width={47}
                                                    height={47}
                                                    viewBox="0 0 47 47"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M31.8763 0H4.87185H4.72084L0 2.61327V3.60486L4.7314 6.04951H4.87185H31.8763C33.031 6.04951 33.9704 5.11015 33.9704 3.95544V2.09407C33.9704 0.939358 33.031 0 31.8763 0ZM4.87185 4.55074L2.03266 3.08373L4.87185 1.51208V4.55074ZM27.7979 4.65346H6.26789V1.39605H27.798V4.65346H27.7979ZM32.5743 3.95544C32.5743 4.34034 32.2612 4.65346 31.8763 4.65346H29.1941V1.39605H31.8763C32.2612 1.39605 32.5743 1.70917 32.5743 2.09407V3.95544Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M40.7062 4.32788C37.4781 4.32788 34.811 6.77537 34.4626 9.91207H0V47.0001H40.7062C44.1703 47.0001 46.9885 44.182 46.9885 40.7179V10.61C46.9885 7.14595 44.1702 4.32788 40.7062 4.32788ZM40.7062 45.6041H1.39605V11.308H34.424V40.7179C34.424 42.899 36.1984 44.6734 38.3795 44.6734H39.0775V36.1119C39.5872 35.9311 40.1353 35.8318 40.7062 35.8318C43.4005 35.8318 45.5924 38.0236 45.5924 40.7179C45.5924 43.4123 43.4004 45.6041 40.7062 45.6041ZM35.8201 40.7179C35.8201 39.1653 36.5489 37.7804 37.6814 36.8849V43.1807C36.6083 42.8761 35.8201 41.8874 35.8201 40.7179ZM45.5924 36.7754C44.4397 35.3497 42.6781 34.4358 40.7062 34.4358C38.7349 34.4358 36.9728 35.3485 35.8201 36.7735V11.308V10.61C35.8201 7.91576 38.0119 5.72384 40.7062 5.72384C43.4006 5.72384 45.5924 7.91567 45.5924 10.61V36.7754Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M25.1289 23.9188V21.1267H15.7289V19.7307H22.2437V13.6812H7.81799V19.7307H14.3328V21.1267H4.65356V40.5782H10.005V39.1821H6.04961V34.0634H10.005V32.6673H6.04961V22.5228H23.7328V23.9188H17.218V29.9683H31.6437V23.9188H25.1289ZM9.21403 18.3347V15.0773H20.8477V18.3347H9.21403ZM30.2476 28.5723H18.614V25.3148H30.2477V28.5723H30.2476Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M25.8266 32.6672H12.7969V34.0633H25.8266V32.6672Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M22.1038 35.4595H20.7078V36.8555H22.1038V35.4595Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M19.3118 35.4595H17.9158V36.8555H19.3118V35.4595Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M16.5196 35.4595H12.7969V36.8555H16.5196V35.4595Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M25.8266 39.1824H12.7969V40.5784H25.8266V39.1824Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M22.1038 41.9744H20.7078V43.3704H22.1038V41.9744Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M19.3118 41.9744H17.9158V43.3704H19.3118V41.9744Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M16.5196 41.9744H12.7969V43.3704H16.5196V41.9744Z"
                                                        fill="#30373E"
                                                    />
                                                </svg>
                                            </div>
                                            <span>01</span>
                                        </div>
                                        <div className="inner">
                                            <h6 className="title">Space Planning</h6>
                                            <p className="disc">
                                                Space planning is a fundamental aspect off interior design
                                                that focuses on arranging.
                                            </p>
                                            <a
                                                href="service-details.html"
                                                className="arrow-btn-read-more"
                                            >
                                                Read More <i className="fa-thin fa-chevron-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ingle srevice area end */}
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            {/* ingle srevice area start */}
                            <div className="singe-serice-style-two">
                                <a href="service-details.html" className="thumbnail">
                                    <img src="assets/images/service/04.jpg" alt="service" />
                                </a>
                                <div className="body">
                                    <div className="wrapper">
                                        <div className="icon-area">
                                            <div className="icon">
                                                <svg
                                                    width={47}
                                                    height={47}
                                                    viewBox="0 0 47 47"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M31.8763 0H4.87185H4.72084L0 2.61327V3.60486L4.7314 6.04951H4.87185H31.8763C33.031 6.04951 33.9704 5.11015 33.9704 3.95544V2.09407C33.9704 0.939358 33.031 0 31.8763 0ZM4.87185 4.55074L2.03266 3.08373L4.87185 1.51208V4.55074ZM27.7979 4.65346H6.26789V1.39605H27.798V4.65346H27.7979ZM32.5743 3.95544C32.5743 4.34034 32.2612 4.65346 31.8763 4.65346H29.1941V1.39605H31.8763C32.2612 1.39605 32.5743 1.70917 32.5743 2.09407V3.95544Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M40.7062 4.32788C37.4781 4.32788 34.811 6.77537 34.4626 9.91207H0V47.0001H40.7062C44.1703 47.0001 46.9885 44.182 46.9885 40.7179V10.61C46.9885 7.14595 44.1702 4.32788 40.7062 4.32788ZM40.7062 45.6041H1.39605V11.308H34.424V40.7179C34.424 42.899 36.1984 44.6734 38.3795 44.6734H39.0775V36.1119C39.5872 35.9311 40.1353 35.8318 40.7062 35.8318C43.4005 35.8318 45.5924 38.0236 45.5924 40.7179C45.5924 43.4123 43.4004 45.6041 40.7062 45.6041ZM35.8201 40.7179C35.8201 39.1653 36.5489 37.7804 37.6814 36.8849V43.1807C36.6083 42.8761 35.8201 41.8874 35.8201 40.7179ZM45.5924 36.7754C44.4397 35.3497 42.6781 34.4358 40.7062 34.4358C38.7349 34.4358 36.9728 35.3485 35.8201 36.7735V11.308V10.61C35.8201 7.91576 38.0119 5.72384 40.7062 5.72384C43.4006 5.72384 45.5924 7.91567 45.5924 10.61V36.7754Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M25.1289 23.9188V21.1267H15.7289V19.7307H22.2437V13.6812H7.81799V19.7307H14.3328V21.1267H4.65356V40.5782H10.005V39.1821H6.04961V34.0634H10.005V32.6673H6.04961V22.5228H23.7328V23.9188H17.218V29.9683H31.6437V23.9188H25.1289ZM9.21403 18.3347V15.0773H20.8477V18.3347H9.21403ZM30.2476 28.5723H18.614V25.3148H30.2477V28.5723H30.2476Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M25.8266 32.6672H12.7969V34.0633H25.8266V32.6672Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M22.1038 35.4595H20.7078V36.8555H22.1038V35.4595Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M19.3118 35.4595H17.9158V36.8555H19.3118V35.4595Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M16.5196 35.4595H12.7969V36.8555H16.5196V35.4595Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M25.8266 39.1824H12.7969V40.5784H25.8266V39.1824Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M22.1038 41.9744H20.7078V43.3704H22.1038V41.9744Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M19.3118 41.9744H17.9158V43.3704H19.3118V41.9744Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M16.5196 41.9744H12.7969V43.3704H16.5196V41.9744Z"
                                                        fill="#30373E"
                                                    />
                                                </svg>
                                            </div>
                                            <span>02</span>
                                        </div>
                                        <div className="inner">
                                            <h6 className="title">Space Planning</h6>
                                            <p className="disc">
                                                Space planning is a fundamental aspect off interior design
                                                that focuses on arranging.
                                            </p>
                                            <a
                                                href="service-details.html"
                                                className="arrow-btn-read-more"
                                            >
                                                Read More <i className="fa-thin fa-chevron-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ingle srevice area end */}
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            {/* ingle srevice area start */}
                            <div className="singe-serice-style-two">
                                <a href="service-details.html" className="thumbnail">
                                    <img src="assets/images/service/05.jpg" alt="service" />
                                </a>
                                <div className="body">
                                    <div className="wrapper">
                                        <div className="icon-area">
                                            <div className="icon">
                                                <svg
                                                    width={47}
                                                    height={47}
                                                    viewBox="0 0 47 47"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M31.8763 0H4.87185H4.72084L0 2.61327V3.60486L4.7314 6.04951H4.87185H31.8763C33.031 6.04951 33.9704 5.11015 33.9704 3.95544V2.09407C33.9704 0.939358 33.031 0 31.8763 0ZM4.87185 4.55074L2.03266 3.08373L4.87185 1.51208V4.55074ZM27.7979 4.65346H6.26789V1.39605H27.798V4.65346H27.7979ZM32.5743 3.95544C32.5743 4.34034 32.2612 4.65346 31.8763 4.65346H29.1941V1.39605H31.8763C32.2612 1.39605 32.5743 1.70917 32.5743 2.09407V3.95544Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M40.7062 4.32788C37.4781 4.32788 34.811 6.77537 34.4626 9.91207H0V47.0001H40.7062C44.1703 47.0001 46.9885 44.182 46.9885 40.7179V10.61C46.9885 7.14595 44.1702 4.32788 40.7062 4.32788ZM40.7062 45.6041H1.39605V11.308H34.424V40.7179C34.424 42.899 36.1984 44.6734 38.3795 44.6734H39.0775V36.1119C39.5872 35.9311 40.1353 35.8318 40.7062 35.8318C43.4005 35.8318 45.5924 38.0236 45.5924 40.7179C45.5924 43.4123 43.4004 45.6041 40.7062 45.6041ZM35.8201 40.7179C35.8201 39.1653 36.5489 37.7804 37.6814 36.8849V43.1807C36.6083 42.8761 35.8201 41.8874 35.8201 40.7179ZM45.5924 36.7754C44.4397 35.3497 42.6781 34.4358 40.7062 34.4358C38.7349 34.4358 36.9728 35.3485 35.8201 36.7735V11.308V10.61C35.8201 7.91576 38.0119 5.72384 40.7062 5.72384C43.4006 5.72384 45.5924 7.91567 45.5924 10.61V36.7754Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M25.1289 23.9188V21.1267H15.7289V19.7307H22.2437V13.6812H7.81799V19.7307H14.3328V21.1267H4.65356V40.5782H10.005V39.1821H6.04961V34.0634H10.005V32.6673H6.04961V22.5228H23.7328V23.9188H17.218V29.9683H31.6437V23.9188H25.1289ZM9.21403 18.3347V15.0773H20.8477V18.3347H9.21403ZM30.2476 28.5723H18.614V25.3148H30.2477V28.5723H30.2476Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M25.8266 32.6672H12.7969V34.0633H25.8266V32.6672Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M22.1038 35.4595H20.7078V36.8555H22.1038V35.4595Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M19.3118 35.4595H17.9158V36.8555H19.3118V35.4595Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M16.5196 35.4595H12.7969V36.8555H16.5196V35.4595Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M25.8266 39.1824H12.7969V40.5784H25.8266V39.1824Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M22.1038 41.9744H20.7078V43.3704H22.1038V41.9744Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M19.3118 41.9744H17.9158V43.3704H19.3118V41.9744Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M16.5196 41.9744H12.7969V43.3704H16.5196V41.9744Z"
                                                        fill="#30373E"
                                                    />
                                                </svg>
                                            </div>
                                            <span>03</span>
                                        </div>
                                        <div className="inner">
                                            <h6 className="title">Space Planning</h6>
                                            <p className="disc">
                                                Space planning is a fundamental aspect off interior design
                                                that focuses on arranging.
                                            </p>
                                            <a
                                                href="service-details.html"
                                                className="arrow-btn-read-more"
                                            >
                                                Read More <i className="fa-thin fa-chevron-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ingle srevice area end */}
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            {/* ingle srevice area start */}
                            <div className="singe-serice-style-two">
                                <a href="service-details.html" className="thumbnail">
                                    <img src="assets/images/service/03.jpg" alt="service" />
                                </a>
                                <div className="body">
                                    <div className="wrapper">
                                        <div className="icon-area">
                                            <div className="icon">
                                                <svg
                                                    width={47}
                                                    height={47}
                                                    viewBox="0 0 47 47"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M31.8763 0H4.87185H4.72084L0 2.61327V3.60486L4.7314 6.04951H4.87185H31.8763C33.031 6.04951 33.9704 5.11015 33.9704 3.95544V2.09407C33.9704 0.939358 33.031 0 31.8763 0ZM4.87185 4.55074L2.03266 3.08373L4.87185 1.51208V4.55074ZM27.7979 4.65346H6.26789V1.39605H27.798V4.65346H27.7979ZM32.5743 3.95544C32.5743 4.34034 32.2612 4.65346 31.8763 4.65346H29.1941V1.39605H31.8763C32.2612 1.39605 32.5743 1.70917 32.5743 2.09407V3.95544Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M40.7062 4.32788C37.4781 4.32788 34.811 6.77537 34.4626 9.91207H0V47.0001H40.7062C44.1703 47.0001 46.9885 44.182 46.9885 40.7179V10.61C46.9885 7.14595 44.1702 4.32788 40.7062 4.32788ZM40.7062 45.6041H1.39605V11.308H34.424V40.7179C34.424 42.899 36.1984 44.6734 38.3795 44.6734H39.0775V36.1119C39.5872 35.9311 40.1353 35.8318 40.7062 35.8318C43.4005 35.8318 45.5924 38.0236 45.5924 40.7179C45.5924 43.4123 43.4004 45.6041 40.7062 45.6041ZM35.8201 40.7179C35.8201 39.1653 36.5489 37.7804 37.6814 36.8849V43.1807C36.6083 42.8761 35.8201 41.8874 35.8201 40.7179ZM45.5924 36.7754C44.4397 35.3497 42.6781 34.4358 40.7062 34.4358C38.7349 34.4358 36.9728 35.3485 35.8201 36.7735V11.308V10.61C35.8201 7.91576 38.0119 5.72384 40.7062 5.72384C43.4006 5.72384 45.5924 7.91567 45.5924 10.61V36.7754Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M25.1289 23.9188V21.1267H15.7289V19.7307H22.2437V13.6812H7.81799V19.7307H14.3328V21.1267H4.65356V40.5782H10.005V39.1821H6.04961V34.0634H10.005V32.6673H6.04961V22.5228H23.7328V23.9188H17.218V29.9683H31.6437V23.9188H25.1289ZM9.21403 18.3347V15.0773H20.8477V18.3347H9.21403ZM30.2476 28.5723H18.614V25.3148H30.2477V28.5723H30.2476Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M25.8266 32.6672H12.7969V34.0633H25.8266V32.6672Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M22.1038 35.4595H20.7078V36.8555H22.1038V35.4595Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M19.3118 35.4595H17.9158V36.8555H19.3118V35.4595Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M16.5196 35.4595H12.7969V36.8555H16.5196V35.4595Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M25.8266 39.1824H12.7969V40.5784H25.8266V39.1824Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M22.1038 41.9744H20.7078V43.3704H22.1038V41.9744Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M19.3118 41.9744H17.9158V43.3704H19.3118V41.9744Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M16.5196 41.9744H12.7969V43.3704H16.5196V41.9744Z"
                                                        fill="#30373E"
                                                    />
                                                </svg>
                                            </div>
                                            <span>04</span>
                                        </div>
                                        <div className="inner">
                                            <h6 className="title">Space Planning</h6>
                                            <p className="disc">
                                                Space planning is a fundamental aspect off interior design
                                                that focuses on arranging.
                                            </p>
                                            <a
                                                href="service-details.html"
                                                className="arrow-btn-read-more"
                                            >
                                                Read More <i className="fa-thin fa-chevron-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ingle srevice area end */}
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            {/* ingle srevice area start */}
                            <div className="singe-serice-style-two">
                                <a href="service-details.html" className="thumbnail">
                                    <img src="assets/images/service/04.jpg" alt="service" />
                                </a>
                                <div className="body">
                                    <div className="wrapper">
                                        <div className="icon-area">
                                            <div className="icon">
                                                <svg
                                                    width={47}
                                                    height={47}
                                                    viewBox="0 0 47 47"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M31.8763 0H4.87185H4.72084L0 2.61327V3.60486L4.7314 6.04951H4.87185H31.8763C33.031 6.04951 33.9704 5.11015 33.9704 3.95544V2.09407C33.9704 0.939358 33.031 0 31.8763 0ZM4.87185 4.55074L2.03266 3.08373L4.87185 1.51208V4.55074ZM27.7979 4.65346H6.26789V1.39605H27.798V4.65346H27.7979ZM32.5743 3.95544C32.5743 4.34034 32.2612 4.65346 31.8763 4.65346H29.1941V1.39605H31.8763C32.2612 1.39605 32.5743 1.70917 32.5743 2.09407V3.95544Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M40.7062 4.32788C37.4781 4.32788 34.811 6.77537 34.4626 9.91207H0V47.0001H40.7062C44.1703 47.0001 46.9885 44.182 46.9885 40.7179V10.61C46.9885 7.14595 44.1702 4.32788 40.7062 4.32788ZM40.7062 45.6041H1.39605V11.308H34.424V40.7179C34.424 42.899 36.1984 44.6734 38.3795 44.6734H39.0775V36.1119C39.5872 35.9311 40.1353 35.8318 40.7062 35.8318C43.4005 35.8318 45.5924 38.0236 45.5924 40.7179C45.5924 43.4123 43.4004 45.6041 40.7062 45.6041ZM35.8201 40.7179C35.8201 39.1653 36.5489 37.7804 37.6814 36.8849V43.1807C36.6083 42.8761 35.8201 41.8874 35.8201 40.7179ZM45.5924 36.7754C44.4397 35.3497 42.6781 34.4358 40.7062 34.4358C38.7349 34.4358 36.9728 35.3485 35.8201 36.7735V11.308V10.61C35.8201 7.91576 38.0119 5.72384 40.7062 5.72384C43.4006 5.72384 45.5924 7.91567 45.5924 10.61V36.7754Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M25.1289 23.9188V21.1267H15.7289V19.7307H22.2437V13.6812H7.81799V19.7307H14.3328V21.1267H4.65356V40.5782H10.005V39.1821H6.04961V34.0634H10.005V32.6673H6.04961V22.5228H23.7328V23.9188H17.218V29.9683H31.6437V23.9188H25.1289ZM9.21403 18.3347V15.0773H20.8477V18.3347H9.21403ZM30.2476 28.5723H18.614V25.3148H30.2477V28.5723H30.2476Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M25.8266 32.6672H12.7969V34.0633H25.8266V32.6672Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M22.1038 35.4595H20.7078V36.8555H22.1038V35.4595Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M19.3118 35.4595H17.9158V36.8555H19.3118V35.4595Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M16.5196 35.4595H12.7969V36.8555H16.5196V35.4595Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M25.8266 39.1824H12.7969V40.5784H25.8266V39.1824Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M22.1038 41.9744H20.7078V43.3704H22.1038V41.9744Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M19.3118 41.9744H17.9158V43.3704H19.3118V41.9744Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M16.5196 41.9744H12.7969V43.3704H16.5196V41.9744Z"
                                                        fill="#30373E"
                                                    />
                                                </svg>
                                            </div>
                                            <span>05</span>
                                        </div>
                                        <div className="inner">
                                            <h6 className="title">Space Planning</h6>
                                            <p className="disc">
                                                Space planning is a fundamental aspect off interior design
                                                that focuses on arranging.
                                            </p>
                                            <a
                                                href="service-details.html"
                                                className="arrow-btn-read-more"
                                            >
                                                Read More <i className="fa-thin fa-chevron-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ingle srevice area end */}
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            {/* ingle srevice area start */}
                            <div className="singe-serice-style-two">
                                <a href="service-details.html" className="thumbnail">
                                    <img src="assets/images/service/05.jpg" alt="service" />
                                </a>
                                <div className="body">
                                    <div className="wrapper">
                                        <div className="icon-area">
                                            <div className="icon">
                                                <svg
                                                    width={47}
                                                    height={47}
                                                    viewBox="0 0 47 47"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M31.8763 0H4.87185H4.72084L0 2.61327V3.60486L4.7314 6.04951H4.87185H31.8763C33.031 6.04951 33.9704 5.11015 33.9704 3.95544V2.09407C33.9704 0.939358 33.031 0 31.8763 0ZM4.87185 4.55074L2.03266 3.08373L4.87185 1.51208V4.55074ZM27.7979 4.65346H6.26789V1.39605H27.798V4.65346H27.7979ZM32.5743 3.95544C32.5743 4.34034 32.2612 4.65346 31.8763 4.65346H29.1941V1.39605H31.8763C32.2612 1.39605 32.5743 1.70917 32.5743 2.09407V3.95544Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M40.7062 4.32788C37.4781 4.32788 34.811 6.77537 34.4626 9.91207H0V47.0001H40.7062C44.1703 47.0001 46.9885 44.182 46.9885 40.7179V10.61C46.9885 7.14595 44.1702 4.32788 40.7062 4.32788ZM40.7062 45.6041H1.39605V11.308H34.424V40.7179C34.424 42.899 36.1984 44.6734 38.3795 44.6734H39.0775V36.1119C39.5872 35.9311 40.1353 35.8318 40.7062 35.8318C43.4005 35.8318 45.5924 38.0236 45.5924 40.7179C45.5924 43.4123 43.4004 45.6041 40.7062 45.6041ZM35.8201 40.7179C35.8201 39.1653 36.5489 37.7804 37.6814 36.8849V43.1807C36.6083 42.8761 35.8201 41.8874 35.8201 40.7179ZM45.5924 36.7754C44.4397 35.3497 42.6781 34.4358 40.7062 34.4358C38.7349 34.4358 36.9728 35.3485 35.8201 36.7735V11.308V10.61C35.8201 7.91576 38.0119 5.72384 40.7062 5.72384C43.4006 5.72384 45.5924 7.91567 45.5924 10.61V36.7754Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M25.1289 23.9188V21.1267H15.7289V19.7307H22.2437V13.6812H7.81799V19.7307H14.3328V21.1267H4.65356V40.5782H10.005V39.1821H6.04961V34.0634H10.005V32.6673H6.04961V22.5228H23.7328V23.9188H17.218V29.9683H31.6437V23.9188H25.1289ZM9.21403 18.3347V15.0773H20.8477V18.3347H9.21403ZM30.2476 28.5723H18.614V25.3148H30.2477V28.5723H30.2476Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M25.8266 32.6672H12.7969V34.0633H25.8266V32.6672Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M22.1038 35.4595H20.7078V36.8555H22.1038V35.4595Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M19.3118 35.4595H17.9158V36.8555H19.3118V35.4595Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M16.5196 35.4595H12.7969V36.8555H16.5196V35.4595Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M25.8266 39.1824H12.7969V40.5784H25.8266V39.1824Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M22.1038 41.9744H20.7078V43.3704H22.1038V41.9744Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M19.3118 41.9744H17.9158V43.3704H19.3118V41.9744Z"
                                                        fill="#30373E"
                                                    />
                                                    <path
                                                        d="M16.5196 41.9744H12.7969V43.3704H16.5196V41.9744Z"
                                                        fill="#30373E"
                                                    />
                                                </svg>
                                            </div>
                                            <span>06</span>
                                        </div>
                                        <div className="inner">
                                            <h6 className="title">Space Planning</h6>
                                            <p className="disc">
                                                Space planning is a fundamental aspect off interior design
                                                that focuses on arranging.
                                            </p>
                                            <a
                                                href="service-details.html"
                                                className="arrow-btn-read-more"
                                            >
                                                Read More <i className="fa-thin fa-chevron-right" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ingle srevice area end */}
                        </div>
                    </div>
                </div>
            </div>
            {/* service area end */}



            <BrandEight />
            <ProcessTwo />





            {/* rts cta area */}
            <div className="cta-inner-area bg_image ptb--120">
                <div className="container-full">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-style-center">
                                <div className="pre-title-area">
                                    <img src="assets/images/about/02.png" alt="about" />
                                    <span className="pre-title">Work with us</span>
                                </div>
                                <h2 className="title">
                                    Have a Project in mind? <br />
                                    Do not hesitate to say hello.
                                </h2>
                                <a href="#" className="rts-btn  btn-border radious-3 mt--50">
                                    Let’s Build
                                    <i className="fa-regular fa-arrow-right" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterInner />
            <BackToTop />
        </div >
    );
}
