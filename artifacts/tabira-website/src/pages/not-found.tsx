import { ArrowLeft, ArrowRight, Home, SearchX } from 'lucide-react';
import { Link, useLocation } from 'wouter';

export default function NotFound() {
  const [location] = useLocation();
  const arabic = location.startsWith('/ar');
  return (
    <main className="site-shell flex min-h-[100dvh] items-center justify-center px-5" dir={arabic ? 'rtl' : 'ltr'}>
      <div className="w-full max-w-lg text-center">
        <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl bg-[hsl(var(--accent))] text-[hsl(var(--foreground))]"><SearchX size={29} strokeWidth={1.7} /></div>
        <p className="eyebrow mb-4">{arabic ? 'الصفحة غير موجودة' : 'Page not found'}</p>
        <h1 className="display text-5xl sm:text-6xl">{arabic ? 'يبدو أننا ابتعدنا قليلاً.' : 'Looks like we wandered.'}</h1>
        <p className="mx-auto mt-5 max-w-sm text-[hsl(var(--muted-foreground))]">{arabic ? 'الرابط الذي تبحث عنه غير متاح. لنعد إلى مكان واضح.' : 'The page you’re looking for is not here. Let’s get you back to somewhere clear.'}</p>
        <Link href={arabic ? '/ar' : '/en'} className="focus-ring mt-8 inline-flex items-center gap-2 rounded-full bg-[hsl(var(--primary))] px-5 py-3 font-bold text-[hsl(var(--primary-foreground))] transition-transform hover:-translate-y-0.5">
          <Home size={17} />{arabic ? 'العودة إلى الرئيسية' : 'Back to home'}{arabic ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
        </Link>
      </div>
    </main>
  );
}
