import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  robots?: string;
}

const DEFAULT_IMAGE = "https://www.terzcompliance.com/og-image.png";
const DOMAIN = "https://www.terzcompliance.com";

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  ogType = "website",
  ogImage = DEFAULT_IMAGE,
  robots = "index, follow",
}) => {
  const location = useLocation();
  const canonicalUrl = canonical || `${DOMAIN}${location.pathname}`;

  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // Helper to safely set or create a meta tag
    const setMeta = (attribute: "name" | "property", value: string, content: string) => {
      let tag = document.querySelector(`meta[${attribute}="${value}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attribute, value);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    // Helper to safely set or create a link tag
    const setLink = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`);
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", rel);
        document.head.appendChild(link);
      }
      link.setAttribute("href", href);
    };

    // 2. Standard Search Engine Meta
    setMeta("name", "description", description);
    setMeta("name", "robots", robots);

    // 3. Canonical URL
    setLink("canonical", canonicalUrl);

    // 4. Open Graph
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:type", ogType);
    setMeta("property", "og:image", ogImage);

    // 5. Twitter Card
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:site", "@TerzCompliance");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", ogImage);
  }, [title, description, canonicalUrl, ogType, ogImage, robots]);

  return null;
};

export default SEO;
