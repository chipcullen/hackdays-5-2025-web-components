import csRequestHeaders from "./cs-headers.js";

const getCSVideo = async (slug) => {
  const url = `https://content.services.pbs.org/v3/pbsorg/screens/video-assets/${slug}/?station_id=92d89794-5ff0-4fe6-a443-cc888104e021`;

  // this is terrible don't actually do this
  const response = await fetch(url, {
    method: "GET",
    headers: csRequestHeaders,
  });

  if (!response.ok) {
    console.error("Error fetching video data:", response.statusText);
    return null;
  }
  const data = await response.json();

  return data.resource;
};

export default getCSVideo;
