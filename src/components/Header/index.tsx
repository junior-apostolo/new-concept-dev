"use client";

import Image from "next/image";
import Link from "next/link";
import "./styles.css";
import { useState } from "react";
import { Link as LinkNavigation, usePathname, useRouter } from "@/navigation";
import { SwitchLanguage } from "../SwitchLanguage";

export function Header() {
  const [language, setLanguage] = useState("");
  const pathname = usePathname();

  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center">
        <h1 className="logo me-auto">
          <Link href="#">
            <Image
              src="/img/logo-new-concept-white.png"
              alt="Logo"
              width={32}
              height={32}
            ></Image>
            NewConceptExhibition
          </Link>
        </h1>
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <SwitchLanguage />
            </li>
            {/* <li className="dropdown">
              <a href="#" className="language-selected">
                {language}
              </a>
              <ul>
                <li>
                  <LinkNavigation className="en" href={pathname} locale="en-US" onClick={() => setLanguage("en-US")}>
                    <Image
                      alt=""
                      src="/img/united-states.png"
                      width={32}
                      height={32}
                    />
                    en-US
                  </LinkNavigation>
                </li>
                <li>
                  <LinkNavigation className="br" href={pathname} locale="pt-BR" onClick={() => setLanguage("pt-BR")}>
                    <Image
                      alt=""
                      src="/img/brazil.png"
                      width={32}
                      height={32}
                    />
                    pt-BR
                  </LinkNavigation>
                </li>
              </ul>
            </li> */}
            <li>
              <Link className="nav-link scrollto active" href="#hero">
                Home
              </Link>
            </li>
            <li>
              <Link id="aboutNav" className="nav-link scrollto" href="#about">
                About
              </Link>
            </li>
            <li>
              <Link
                id="servicesNav"
                className="nav-link scrollto"
                href="#services"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                id="portfolioNav"
                className="nav-link scrollto"
                href="#portfolio"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link className="nav-link scrollto" href="#team">
                Team
              </Link>
            </li>
            <li>
              <Link
                id="contactNav"
                className="nav-link scrollto"
                href="#contact"
              >
                Contact
              </Link>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}
