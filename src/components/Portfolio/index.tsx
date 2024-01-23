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
    <section className="">
      <Carousel items={images} />
    </section>
  );
}
