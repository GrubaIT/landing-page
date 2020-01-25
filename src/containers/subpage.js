import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

export const Subpage = ({ seoTitle, title, children }) => {
    return (
        <Layout>
            <SEO title={seoTitle} />
            <h1>{title}</h1>
            {children}
        </Layout>
    );
};
