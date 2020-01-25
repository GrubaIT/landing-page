import React from 'react';
import { Link } from 'gatsby';

import { Subpage } from '../containers/subpage';

const SecondPage = () => (
    <Subpage seoTitle="Page two" title="Testowa strona">
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
    </Subpage>
);

export default SecondPage;
