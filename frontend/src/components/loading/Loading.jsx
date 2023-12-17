import React from "react";
import { LoadingImageDiv, LoadingImg } from "./style";

import loadingpng from "../../assets/loading.gif";

function Loading() {
  return (
    <LoadingImageDiv>
      <LoadingImg src={loadingpng} />
    </LoadingImageDiv>
  );
}

export default Loading;
