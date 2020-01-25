import React from 'react';
import { Link } from 'gatsby';

import './index.scss';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { strings } from '../localization/strings';
import Image from '../components/image';

const IndexPage = () => (
    <Layout>
        <SEO title="Home" description="" lang="" />
        <h1>{strings.slogan}</h1>
        <p>test</p>
        <Image filename="Gruba-logo-czarne.svg" />
        <Link to="/page-2/">Go to page 2</Link>
    </Layout>
);

export default IndexPage;
