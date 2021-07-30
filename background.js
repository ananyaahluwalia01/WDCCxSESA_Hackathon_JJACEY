var isExtensionOn = true;
const redirectTo = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

chrome.webRequest.onBeforeRequest.addListener(
  (d) => {
    console.log(d);
    if (d.type === "image" || d.type === "font" || d.type === "video") {
      return;
    }
    if (
      d.initiator.indexOf("youtube.com") === -1 &&
      d.url.indexOf("google.com") === -1 &&
      d.url.indexOf("youtube.com") === -1 &&
      isExtensionOn
    ) {
      return { redirectUrl: redirectTo };
    }
  },
  { urls: ["*://*/*"] },
  ["blocking", "requestBody"]
);
