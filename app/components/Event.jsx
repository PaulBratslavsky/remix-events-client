export default function Event({ event }) {
  const { page_title, page_description, type, cover_image } = event.attributes;
  const { url } = cover_image.data.attributes;
  console.log(url);
  return (
    <div className="lg:flex lg:space-x-6 py-5">
        <div className="lg:w-60 w-full h-40 overflow-hidden rounded-lg relative shadow-sm">
          <img
            src={`http://localhost:1337${url}`}
            alt=""
            className="w-full h-full absolute inset-0 object-cover"
          />
          <div className="absolute bg-blue-100 font-semibold px-2.5 py-1 rounded-full text-blue-500 text-xs top-2.5 left-2.5">
            {type}
          </div>
        </div>
      <div className="flex-1 lg:pt-0 pt-4">
        <p className="text-xl font-semibold line-clamp-2">{page_title}</p>
        <p className="line-clamp-2 pt-3">{page_description}</p>
      </div>
    </div>
  );
}
