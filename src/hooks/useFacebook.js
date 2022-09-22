import React from "react";

let promise;

export function useFacebook(options, cb) {
  if (typeof options === "function") {
    cb = options;
  }

  React.useEffect(() => {
    if (promise) {
      promise.then(cb);
    } else {
      promise = new Promise((resolve) => {
        // https://developers.facebook.com/docs/javascript/reference/FB.init
        window.fbAsyncInit = () => {
          window.FB.init({
            // appId: window.config.facebook.appId,
            autoLogAppEvents: true,
            status: true,
            cookie: true,
            xfbml: true,
            version: "v7.0",
            ...options,
          });
          resolve(window.FB);
        };

        const script = document.createElement("script");
        script.src = `https://connect.facebook.net/en_US/sdk/xfbml.customerchat/debug.js`;
        document.head.appendChild(script);
      });
      promise.then(cb);
    }
  });
}
