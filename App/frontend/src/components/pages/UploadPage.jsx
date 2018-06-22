import React from "react";

import UploadMutilfile from "../UploadMutilfile";
import TopNavigation from "../navigation/TopNavigation";

const UploadPage = props => {
  return (
    <div>
      <TopNavigation />
      <div style={{ paddingTop: "10vh" }} />

      {localStorage.getItem("token") ? (
        <UploadMutilfile />
      ) : (
        props.history.push("/login")
      )}
    </div>
  );
};

export default UploadPage;
