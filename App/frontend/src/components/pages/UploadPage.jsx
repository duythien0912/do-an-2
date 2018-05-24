import React from "react";

import Main from "../Main";
import UploadMutilfile from "../UploadMutilfile";
import TopNavigation from "../navigation/TopNavigation";

const UploadPage = () => {
  return (
    <div>
      <TopNavigation />
      <div style={{ paddingTop: "10vh" }} />

      {localStorage.getItem("token") ? <UploadMutilfile /> : <Main />}
    </div>
  );
};

export default UploadPage;
