import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-background">
      <Helmet>
        <title>Page Not Found — JR's Device Care</title>
        <meta name="description" content="The page you're looking for doesn't exist. Head back to JR's Device Care for phone, tablet & laptop repairs in Durban." />
        <meta name="robots" content="noindex,follow" />
        <link rel="canonical" href="https://jrs-device-care.lovable.app/404" />
        <meta property="og:title" content="Page Not Found — JR's Device Care" />
        <meta property="og:description" content="This page doesn't exist. Return to JR's Device Care for device repairs in Durban." />
        <meta property="og:url" content="https://jrs-device-care.lovable.app/404" />
      </Helmet>
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-foreground">404</h1>
        <p className="mb-4 text-xl text-foreground/80">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </main>
  );
};

export default NotFound;
