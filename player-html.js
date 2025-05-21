const playerHTML = (video) => {
  console.log({ video });

  const { mp4_videos, hls_videos, title, parent, images } = video;

  const hlsVideo = hls_videos[0].url;
  const mp4Video = mp4_videos[0].url;

  return `
    <video
      controls
      poster="${images["asset-mezzanine-16x9"]}"
    >
      <source src="${hlsVideo}" type="application/x-mpegURL">
      <source src="${mp4Video}" type="video/mp4">
    </video>
    <h3>${parent.season.show.title}: ${title}</h3>
  `;
};

export default playerHTML;
