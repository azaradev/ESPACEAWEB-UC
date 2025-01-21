import React from 'react'
import Link from 'next/link';
function Nav() {
    return (
        <div>
            <div className="nav-area-center">
                <nav className="navigation">
                    <ul className="parent-ul">
                        <li className="has-dropdown with-megamenu">
                            <Link className="nav-link" href="#" prefetch>
                                Escuelas
                            </Link>
                            <ul className="submenu">
                                <li className="mega-menu-item">
                                    <ul className="pages">
                                        <li>
                                            <Link className="sdm-main title-top" href="#" prefetch>
                                                Nuestras Escuelas
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="sdm-main" href="/#" prefetch>
                                                Arquitectura
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="sdm-main" href="/#" prefetch>
                                                Arquitectura y Diseño de Interiores
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="mega-menu-item">
                                    <ul className="pages">
                                        <li>
                                            <Link className="sdm-main title-top" href="#">
                                                Nuestros Programas
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="sdm-main" href="/#">
                                                Pregrado
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="sdm-main" href="/#">
                                                Posgrado
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="sdm-main" href="/#">
                                                Especializaciones
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="sdm-main" href="/#">
                                                Talleres
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="has-dropdown">
                            <Link className="nav-link" href="#">
                                Portafolios
                            </Link>
                            <ul className="submenu">
                                <li className="lim">
                                    <Link className="sdm-main" href="/#">
                                        Todoso los Proyectos
                                    </Link>
                                </li>
                                <li className="sub-dropdown lim">
                                    <Link className="sdm-main" href="#">
                                        Línea de Investigación
                                    </Link>
                                    <ul className="submenu third-lvl base">
                                        <li className="lim">
                                            <Link className="mobile-menu-link" href="/#">
                                                Línea 1
                                            </Link>
                                        </li>
                                        <li className="lim">
                                            <Link className="mobile-menu-link" href="/#">
                                                Línea 2
                                            </Link>
                                        </li>
                                        <li className="lim">
                                            <Link
                                                className="mobile-menu-link last"
                                                href="/#"
                                            >
                                                Línea 3
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="lim">
                                    <Link className="sdm-main" href="/#">
                                        Premiaciones
                                    </Link>
                                </li>
                                <li className="lim">
                                    <Link className="sdm-main" href="/#">
                                        Sustentaciones
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="has-dropdown">
                            <Link className="nav-link" href="/#">
                                Eventos
                            </Link>
                            <ul className="submenu">
                                <li className="lim">
                                    <Link className="sdm-main" href="/#">
                                        Expo Ciudad
                                    </Link>
                                </li>
                                <li className="lim">
                                    <Link className="sdm-main" href="/#">
                                        Feria de Diseño
                                    </Link>
                                </li>
                                <li className="lim">
                                    <Link className="sdm-main" href="/#">
                                        Foro Urbano
                                    </Link>
                                </li>
                                <li className="lim">
                                    <Link className="sdm-main" href="/#">
                                        Seminario de Arquitectura
                                    </Link>
                                </li>
                                <li className="lim">
                                    <Link className="sdm-main" href="/#">
                                        ArquiTech
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="has-dropdown">
                            <Link className="nav-link" href="/#">
                                Blog
                            </Link>
                            <ul className="submenu">
                                <li className="lim">
                                    <Link className="sdm-main" href="/#">
                                        Revista Arquitectónica
                                    </Link>
                                </li>
                                <li className="lim">
                                    <Link className="sdm-main" href="/#">
                                        Tendencias de Diseño
                                    </Link>
                                </li>
                                <li className="lim">
                                    <Link className="sdm-main" href="/#">
                                        Tendencias de Arquitectura
                                    </Link>
                                </li>
                                <li className="lim">
                                    <Link className="sdm-main" href="/#">
                                        El Arqui Cuenta
                                    </Link>
                                </li>
                                <li className="sub-dropdown last lim">
                                    <Link className="sdm-main last" href="/#">
                                        Foro Arquitectónico
                                    </Link>
                                    <ul className="submenu third-lvl base">
                                        <li className="lim">
                                            <Link
                                                className="mobile-menu-link"
                                                href="/#"
                                            >
                                                ArquiForo
                                            </Link>
                                        </li>
                                        <li className="lim">
                                            <Link
                                                className="mobile-menu-link"
                                                href="/#"
                                            >
                                                ForoDiseña
                                            </Link>
                                        </li>
                                        <li className="lim">
                                            <Link
                                                className="mobile-menu-link"
                                                href="/#"
                                            >
                                                Comunidad UC
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="has-dropdown">
                            <Link className="nav-link" href="/#">
                                Tienda
                            </Link>
                            <ul className="submenu">
                                <li className="lim">
                                    <Link className="sdm-main" href="/#">
                                        Nuestra Merch
                                    </Link>
                                </li>
                                <li className="lim">
                                    <Link className="sdm-main" href="/#">
                                        Maquetería
                                    </Link>
                                </li>
                                <li className="lim">
                                    <Link className="sdm-main" href="/#">
                                        Seguridad y Protección
                                    </Link>
                                </li>
                                <li className="lim">
                                    <Link className="sdm-main" href="/#">
                                        Alquiler de Equipos
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href="/#">Contacto</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Nav
