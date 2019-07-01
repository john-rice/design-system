import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

// We don't use design tokens or SLDS classes for styling here to prevent false failed tests for unrelated changes,
// this styling is cosmetic for Storybook only
const Wrapper = styled.div`
  border: solid 3px #f2f2f2;
  padding: 1rem;

  & + & {
    margin-top: 1.25rem;
  }
`;

const Label = styled.h2`
  border-bottom: solid 3px #f2f2f2;
  font-size: 0.75rem;
  margin: -1rem -1rem 1rem;
  padding: 0.5rem 1rem;
`;

const Example = styled.div`
  transform: translate3d(0, 0, 0);
  position: ${props => props.isViewport && 'relative'};
  ${props => props.styles}

  > * {
    position: ${props => props.isViewport && 'absolute'};
  }
`;

// A bit barebones at the moment but in place for future extensibility
const StoryFrame = ({ component, label, isViewport, styles }) => (
  <LazyLoad height={200} offset={[-200, 0]}>
    <Wrapper>
      <Label>{label}</Label>
      <Example isViewport={isViewport} styles={styles}>
        {component}
      </Example>
    </Wrapper>
  </LazyLoad>
);

StoryFrame.propTypes = {
  component: PropTypes.node,
  label: PropTypes.string
};

export default StoryFrame;