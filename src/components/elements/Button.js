import { ReactComponent as IconPlayCircle } from "../images/play-circle.svg";

const Button = ({
  copy,
  copyHidden,
  url,
  addClass,
  addClick,
  addLabel,
  darkTheme,
}) => {
  const buttonCSS =
    "btn w-100 p-2 d-flex align-items-center justify-content-center min-h-48 max-h-48";
  let svgCSS = "max-w-20 ml-1";

  if (darkTheme) {
    svgCSS += " fill-white";
  }

  if (url) {
    return (
      <a href={url} className={`${buttonCSS} ${addClass}`}>
        {copy}
        {copyHidden && <span className="visually-hidden"> {copyHidden}</span>}
        <IconPlayCircle className={svgCSS} />
      </a>
    );
  } else {
    return (
      <button onClick={addClick} className={`${buttonCSS} ${addClass}`}>
        {copy} <IconPlayCircle className={svgCSS} />
      </button>
    );
  }
};

export default Button;
