import React from 'react';

import { Subpage } from '../containers/subpage';
import { strings } from '../localization/strings';

const NotFoundPage = () => (
    <Subpage seoTitle={strings.pageNotFound} title={strings.pageNotFound}>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Subpage>
);

export default NotFoundPage;
