import { LazyExoticComponent, ReactNode, Suspense } from 'react';

type Props = {
  fallback: ReactNode;
  Component: LazyExoticComponent<() => React.JSX.Element>;
};

export const LazyComponent = ({ fallback, Component }: Props) => {
  return (
    <Suspense fallback={fallback}>
      <Component />
    </Suspense>
  );
};

export default LazyComponent;
