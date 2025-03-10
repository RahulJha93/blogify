import { IKImage } from "imagekitio-react";
import React from "react";

const Image = ({src,urlEndpoint, w, h, alt }) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
      path={src}
      width={w}
      height={h}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
      alt={alt}
      // transformation={[
      //   {
      //   width:w,
      //   height:h,
      //   }
      // ]}
    />
  );
};

export default Image;
