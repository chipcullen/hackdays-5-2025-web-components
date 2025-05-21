import csRequestHeaders from "/cs-headers.js";

const getPopularVideos = async () => {
  const url = `https://content.services.pbs.org/v3/pbsorg/collections/most-popular-videos/`;

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

  return data.collections[0].content;
};

export default getPopularVideos;
