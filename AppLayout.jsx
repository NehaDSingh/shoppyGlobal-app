
import { Outlet } from 'react-router';
import React, { Suspense } from 'react';

// Lazy load the Header component
const Header = React.lazy(() => import('../Pages/Header.jsx'));

// ErrorBoundary to catch lazy loading errors
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error loading component:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong while loading the header. Please try again later.</div>;
    }

    return this.props.children; 
  }
}

function AppLayout() {
  return (
    <>
      <ErrorBoundary>
        <Suspense fallback={<div className="loader">Loading Header...</div>}>
          <Header />
        </Suspense>
      </ErrorBoundary>
      <Outlet />
    </>
  );
}

export default AppLayout;
