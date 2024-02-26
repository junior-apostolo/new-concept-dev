import { Carousel } from "../Carousel";

type Images = {
  id: string;
  title: string;
  description: string;
  link: string;
};

const myHeaders = new Headers();
myHeaders.append("Authorization", "Client-ID accdfd12b9814d5");

async function getImages(): Promise<Images[]> {
  const response = await fetch("https://api.imgur.com/3/album/9Z64ZD9/images", {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  });

  const data = await response.json();
  return data.data;
}

export async function Portfolio() {
  const images = await getImages();

  return (
    <section className="container">
      <div className="section-title">
        <h2 id="galleryTitle">Portfolio</h2>
        <p id="galleryText">
          Check out our image gallery here, where each photo is a story of
          success. The images highlight the quality and excellence of the
          services we offer. Each image is a testament to our commitment to
          providing the best for our customers. Enjoy our gallery and find out
          why we are the right choice for you.
        </p>
      </div>
      <Carousel items={images} />
    </section>
  );
}
