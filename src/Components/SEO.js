
import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "White Marble Art",
  description = "Explore premium handcrafted marble mandir, marble fountains, flower pots and marble handicrafts from Makrana, Rajasthan, India.",
  keywords = "White Marble Art, Marble Mandir, Makrana Marble, Marble Handicrafts, Marble Fountain",
  image = "https://whitemarbleart.com/wma-logo.png",
  url = "https://whitemarbleart.com/"
}) => {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />

      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="White Marble Art" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
