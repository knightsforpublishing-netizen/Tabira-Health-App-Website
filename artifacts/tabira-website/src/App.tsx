import { type ReactNode, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import Landing from '@/pages/landing';
import LegalPage from '@/pages/legal';
import NotFound from '@/pages/not-found';

const queryClient = new QueryClient();

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function DocumentSettings() {
  const [location] = useLocation();
  useEffect(() => {
    const arabic = location.startsWith('/ar');
    const isPrivacy = location.endsWith('/privacy');
    const isTerms = location.endsWith('/terms');
    document.documentElement.lang = arabic ? 'ar' : 'en';
    document.documentElement.dir = arabic ? 'rtl' : 'ltr';
    document.documentElement.classList.toggle('dark', localStorage.getItem('tabira-theme') === 'dark');
    document.title = isPrivacy
      ? `${arabic ? 'سياسة الخصوصية' : 'Privacy policy'} · Tabira Labs`
      : isTerms
        ? `${arabic ? 'شروط الخدمة' : 'Terms of service'} · Tabira Labs`
        : location === '/' || location === '/en' || location === '/ar'
          ? `${arabic ? 'تقنية صحية، ببساطة' : 'Health tech, simplified'} · Tabira Labs`
          : `${arabic ? 'Tabira Labs' : 'Tabira Labs'}`;
    const description = isPrivacy
      ? arabic ? 'سياسة خصوصية Tabira Labs وTabira.' : 'The privacy policy for Tabira Labs and Tabira.'
      : isTerms
        ? arabic ? 'شروط استخدام Tabira، أداة التنظيم والتذكير.' : 'Terms for using Tabira, an organization and reminder tool.'
        : arabic ? 'أدوات رقمية لتنظيم الروتين الصحي اليومي ببساطة وهدوء وموثوقية.' : 'Digital tools for organizing everyday health routines simply, calmly, and trustfully.';
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
  }, [location]);
  return null;
}

function Router() {
  return (
    <>
      <DocumentSettings />
      <RoutedErrorBoundary>
        <Switch>
          <Route path="/" component={() => <Landing lang="en" />} />
          <Route path="/en" component={() => <Landing lang="en" />} />
          <Route path="/ar" component={() => <Landing lang="ar" />} />
          <Route path="/en/privacy" component={() => <LegalPage lang="en" kind="privacy" />} />
          <Route path="/ar/privacy" component={() => <LegalPage lang="ar" kind="privacy" />} />
          <Route path="/en/terms" component={() => <LegalPage lang="en" kind="terms" />} />
          <Route path="/ar/terms" component={() => <LegalPage lang="ar" kind="terms" />} />
          <Route component={NotFound} />
        </Switch>
      </RoutedErrorBoundary>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;