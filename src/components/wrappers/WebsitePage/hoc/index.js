/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import WebsitePageWrapper from '..';
import WebsiteGlobalProvider from '../provider';

export default function websitePageHOC(
  Component,
  { pageWrapperProps } = { pageWrapperProps: {} },
) {
  return (props) => (
    <WebsiteGlobalProvider>
      <WebsitePageWrapper
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...pageWrapperProps}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props.pageWrapperProps}
      >
        <Component
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...props}
        />
      </WebsitePageWrapper>
    </WebsiteGlobalProvider>
  );
}
