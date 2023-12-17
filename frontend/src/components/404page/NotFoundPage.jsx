import React from "react";

import notfound from "../../assets/notfound.png";
import { NotFoundDiv, NotFoundImageDiv, NotFoundImg } from "./style";

function NotFoundPage() {
  return (
    <NotFoundDiv>
      <NotFoundImageDiv>
        <NotFoundImg src={notfound} />
      </NotFoundImageDiv>
    </NotFoundDiv>
  );
}

export default NotFoundPage;
