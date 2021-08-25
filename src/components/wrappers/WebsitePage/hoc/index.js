import React from 'react';
import WebsitePageWrapper from '..';
import WebsiteGlobalProvider from '../provider';

export default function websitePageHOC(Component, { pageWrapperProps }) {
  return (props) => (
    <WebsiteGlobalProvider>
      <WebsitePageWrapper
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...pageWrapperProps}
      >
        <Component
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...props}
        />
      </WebsitePageWrapper>
    </WebsiteGlobalProvider>
  );
}
