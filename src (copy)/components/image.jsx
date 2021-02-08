import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                sizes(maxWidth: 600) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
        }
      }
    `}

    render={(data) => {
      const image = data.images.edges.find(n => n.node.relativePath.includes(props.filename));
      if (!image) { return null; }

      const imageSizes = image.node.childImageSharp.sizes;
      return (
        <Img
          className="inline-block w-full"
          alt={props.alt}
          sizes={imageSizes}
        />
      );
    }}
  />
);

// Image.propTypes = {
//   filename: PropTypes.string,
//   alt: PropTypes.string,
// };

// Image.defaultProps = {
//   filename: '',
//   alt: '',
// };


export default Image;
