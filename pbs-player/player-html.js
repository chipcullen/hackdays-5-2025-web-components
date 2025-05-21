const playerHTML = (video) => {
  const { mp4_videos, hls_videos, title, parent, images, flags } = video;

  const hlsVideo = hls_videos[0].url;
  const mp4Video = mp4_videos[0].url;
  const isPassport = flags.is_mvod;

  const showTitle =
    parent.season?.show?.title || parent.show?.title || parent?.title || null;

  return `
    <video
      controls
      poster="${images["asset-mezzanine-16x9"]}"
    >
      <source src="${hlsVideo}" type="application/x-mpegURL">
      <source src="${mp4Video}" type="video/mp4">
    </video>
    <h3>
      ${
        isPassport
          ? `<span class="passport-label">Now in Passport:</span> `
          : ""
      }
      ${showTitle ? `${showTitle}: ` : ""}
      ${title}
    </h3>
  `;
};

export default playerHTML;
