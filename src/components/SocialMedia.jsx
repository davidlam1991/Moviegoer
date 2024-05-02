import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareXTwitter,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { FacebookShareButton, TwitterShareButton } from "react-share";

export default function SocialMedia() {
  function shareOnX() {
    const screenshot = document.documentElement.cloneNode(true);
    const screenshotUrl =
      "data:text/html;charset=utf-8," +
      encodeURIComponent(screenshot.outerHTML);

    const tweetText = "My Movie Adventure";
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      tweetText
    )}&url=${encodeURIComponent(screenshotUrl)}`;

    window.open(tweetUrl, "_blank");
  }

  return (
    <>
      <TwitterShareButton
        title="My Movie Insight"
        onClick={shareOnX}
        hashtags={["MovieRecord", "MovieHistory"]}
        className="link-button"
      >
        <FontAwesomeIcon
          icon={faSquareXTwitter}
          size="3x"
          style={{ color: "#173B56" }}
        />
      </TwitterShareButton>

      <FacebookShareButton
        title="My Movie Insight"
        url={"https://www.example.com"}
        quote={"Dummy text!"}
        hashtag={"#muo"}
        className="link-button"
      >
        <FontAwesomeIcon
          icon={faSquareFacebook}
          size="3x"
          style={{ color: "#173B56" }}
        />
      </FacebookShareButton>
    </>
  );
}
