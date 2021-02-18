import React, { useEffect } from "react";
import { messaging } from "./fbase";

function App() {
  // useEffect(() => {
  //   messaging.requestPermission();
  //   messaging
  //     .getToken({
  //       vapidKey:
  //         "BJ3iQP9GVNMys8sYfNJ5Agkf1iYX5sv2yUVyXlqrkBJMqWTfinFfp6nKRT2Ww9fzSycmAXgHjVY1ArgeXqYi-pM",
  //     })
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // }, []);
  const onClick = () => {
    if (Notification.permission !== "denied") {
      Notification.requestPermission((permission) => {
        if (permission === "granted") {
          console.log("SADaad");
          messaging
            .getToken({
              vapidKey:
                "BJ3iQP9GVNMys8sYfNJ5Agkf1iYX5sv2yUVyXlqrkBJMqWTfinFfp6nKRT2Ww9fzSycmAXgHjVY1ArgeXqYi-pM",
            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        } else {
          alert("Notification denied");
        }
      });
    }
  };

  return <div onClick={onClick}>Firebase</div>;
}

export default App;
