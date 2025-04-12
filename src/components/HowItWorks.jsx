import React, { forwardRef } from 'react';

// Using forwardRef to pass the ref from the parent component down to this component.
const HowItWorks = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <h2>How It Works</h2>
      <p>This is how it works...</p>
    </div>
  );
});

export default HowItWorks;
