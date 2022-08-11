import { useLoaderData, Link } from "@remix-run/react";
import { json } from "@remix-run/node";

import Event from "../components/Event";

export async function loader() {
  const res = await fetch("http://localhost:1337/api/pages/events/all-events?populate=cover_image");
  return json(await res.json());
}

export default function Index() {
  const { data, meta } = useLoaderData();

  console.log(data, meta);

  return (
    <div className="container mx-auto">
      <ul>
        {data.map((event) => {
          console.log(event);
          const { slug } = event.attributes;
          return (
            <li key={event.id}>
              <Link to={`/pages/${slug}`}>
                <Event event={event} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
