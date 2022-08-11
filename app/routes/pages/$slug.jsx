
import { useLoaderData } from "@remix-run/react"
import { json } from "@remix-run/node"

export async function loader({ params }) {
  const res = await fetch(`http://localhost:1337/api/pages/slug/${params.slug}`);
  return json(await res.json());
}

export default function() {
  const { data } = useLoaderData();

  const { page_title, page_description } = data.attributes;

  return (
    <div>
      <h1>{page_title}</h1>
      <p>{page_description}</p>
    </div>
    
  )
}
