const Footer = () => {
  const footerStyle = {
    color: "gray",
    fontStyle: "italic",
    fontSize: 16,
  };
  return (
    <div style={footerStyle}>
      <br />
      <em>
	  Integrify Academy | React assignment | Constance Trouve&nbsp;
        <a
          href="https://github.com/conu101/react_cards"
          target="_blank"
          rel="noreferrer"
        >
          Github page
        </a>
      </em>
    </div>
  );
};

export default Footer;
