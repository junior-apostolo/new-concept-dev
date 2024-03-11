import Image from "next/image";
import { useTranslations } from "next-intl";

import "./styles.css";

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div
            className="lg:col-span-6 flex flex-col items-center justify-center pt-4 lg:pt-0 order-2 lg:order-1"
            data-aos-delay="200"
          >
            <h1 className="title">{t("title")}</h1>
            <h2 className="subTitle">{t("subTitle")}</h2>
          </div>
          {/* <div
            className="col-lg-6 order-1 order-lg-2 hero-img flex items-center justify-center"
            data-aos-delay="200"
          >
            <Image
              src="/img/stand.png"
              className="img-fluid animated"
              alt="stand ilustration"
              width={200}
              height={80}
            />
          </div> */}
        </div>
      </div>
    </section>
  );
}
