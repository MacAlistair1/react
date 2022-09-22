import React from "react";
import { useFacebook } from "./hooks";

// https://developers.facebook.com/docs/messenger-platform/discovery/customer-chat-plugin
const CustomerChat = React.memo(function CustomerChat() {
  const timeoutRef = React.useRef();

  // Initialize Facebook widget(s) in 2 seconds after
  // the component is mounted.
  useFacebook({ xfbml: false }, (FB) => {
    if (timeoutRef.current !== null) {
      timeoutRef.current = setTimeout(() => {
        const el = document.createElement("div");
        el.className = "fb-customerchat";
        el.setAttribute("attribution", "setup_tool");
        el.setAttribute("page_id", "495203314153322");
        // el.setAttribute('ptheme_color', theme.palette.primary.main);
        // el.setAttribute('plogged_in_greeting', '...');
        // el.setAttribute('plogged_out_greeting', '...');
        // el.setAttribute('pgreeting_dialog_display', '...');
        // el.setAttribute('pgreeting_dialog_delay', '...');
        // el.setAttribute('pminimized', 'false');
        document.body.appendChild(el);
        FB.XFBML.parse();
      }, 2000);
    }
  });

  return null;
});

export default CustomerChat;
