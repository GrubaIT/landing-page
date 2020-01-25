import React from 'react';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Image = ({ filename, alt }) => {
    return (
        <StaticQuery
            query={graphql`
                query {
                    images: allFile {
                        edges {
                            node {
                                relativePath
                                name
                                extension
                                publicURL
                                childImageSharp {
                                    fluid(maxWidth: 600) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                    }
                }
            `}
            render={data => {
                const image = data.images.edges.find(n => {
                    return n.node.relativePath.includes(filename);
                });
                if (!image) {
                    return null;
                }
                if (image.node.extension === 'svg') {
                    return <img src={image.node.publicURL} alt={alt} />;
                }
                return (
                    <Img alt={alt} fluid={image.node.childImageSharp.fluid} />
                );
            }}
        />
    );
};

Image.propTypes = {
    name: PropTypes.string,
    alt: PropTypes.string,
};

export default Image;
