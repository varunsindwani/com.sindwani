import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO(
  {
    description, lang, meta, title,
  },
) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`${site.siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: 'Hi! This is my personal website if you want to know more about me this is the place to be :)',
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: 'Hi! This is my personal website if you want to know more about me this is the place to be :)',
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: '@VarunSindwani',
        },
        {
          name: 'twitter:creator',
          content: '@VarunSindwani',
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: "Hi I'm Varun Sindwani!",
        },
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
