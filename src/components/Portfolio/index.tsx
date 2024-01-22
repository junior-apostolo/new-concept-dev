import { getAccessToken } from "@/api/imgurAuth"

type Images = {
    id: string,
    title: string,
    description: string,
    link: string
}

async function getImages(): Promise<Images[]>{
    const accessToken = await getAccessToken() 
    const response = await fetch("https://api.imgur.com/3/account/me/images", {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })

    if(!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data.data;
}

export async function Portfolio() {
    const images = await getImages();

    console.log("Images",images)
    return(
        <section>
            {images.map((image)=> (
                <h1>{image.title}</h1>
            ))}
        </section>
    )
}