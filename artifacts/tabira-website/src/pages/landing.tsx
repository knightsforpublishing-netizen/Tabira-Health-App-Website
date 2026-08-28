import { ArrowDown, ArrowUpRight, BellRing, BookOpen, CalendarDays, Check, ChevronRight, CircleCheck, Clock3, Download, HeartHandshake, Languages, LockKeyhole, Menu, Moon, ShieldCheck, Sparkles, Sun } from 'lucide-react';
import { Link } from 'wouter';
import { type ReactNode, useEffect, useRef, useState } from 'react';

const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.tabira.app';
const iconPath = `${import.meta.env.BASE_URL}assets/tabira-icon.png`;

const content = {
  en: {
    nav: ['About', 'How it works', 'Our values'],
    heroTag: 'Tabira Labs · a calmer daily rhythm',
    heroTitle: <>Health tech,<br /><em>simplified.</em><br />Experiences made clearer.</>,
    heroBody: 'Digital tools for organizing everyday health routines — simple, calm, and trustworthy. Start with Tabira for medication reminders and organization.',
    heroCta: 'Get Tabira on Google Play',
    explore: 'Explore the approach',
    quiet: 'Your routine, in one clear place.',
    aboutLabel: 'The idea',
    aboutTitle: 'Less to remember. More room to live.',
    aboutBody: 'Health routines can carry a surprising amount of mental load. Tabira turns the small details you choose to track into a gentle, dependable rhythm — without making your day feel medical.',
    howLabel: 'How Tabira works',
    howTitle: 'A small ritual, made lighter.',
    howSteps: [
      ['01', 'Add what matters', 'Save a medication name, dose, and the details you want close at hand.'],
      ['02', 'Choose your rhythm', 'Set reminder times that fit your day. You are always in control.'],
      ['03', 'Keep moving', 'A quiet nudge helps you stay oriented, then gets out of the way.'],
    ],
    valuesLabel: 'What guides us',
    valuesTitle: 'Useful by design. Human by default.',
    values: [
      ['Simple', 'Clear screens, considered choices, and no unnecessary noise.', 'We make the next step obvious.'],
      ['Privacy-minded', 'Your health routine is personal. We treat it that way.', 'We collect with restraint.'],
      ['Trustworthy', 'Dependable details matter when they become part of your day.', 'We communicate honestly.'],
    ],
    productLabel: 'Inside Tabira',
    productTitle: 'The right amount of help.',
    productBody: 'See what is next, when it is next, and nothing that distracts from the day around it.',
    today: 'Today',
    upcoming: 'Upcoming',
    next: 'Next reminder',
    done: 'Done for today',
    disclaimer: 'Tabira is an organization and reminder tool only. It does not provide diagnosis, treatment, or medical advice.',
    ctaTitle: 'Make space for the rest of your day.',
    ctaBody: 'A calmer routine starts with one clear place to begin.',
    footer: 'Tabira Labs builds digital tools that help people organize everyday health routines.',
    contact: 'Contact',
  },
  ar: {
    nav: ['عن Tabira', 'كيف تعمل', 'قيمنا'],
    heroTag: 'Tabira Labs · إيقاع يومي أكثر هدوءاً',
    heroTitle: <>تقنية صحية،<br /><em>ببساطة.</em><br />تجارب أكثر وضوحاً.</>,
    heroBody: 'أدوات رقمية لتنظيم الروتين الصحي اليومي — بسيطة وهادئة وموثوقة. ابدأ مع Tabira لتذكيرات الأدوية وتنظيمها.',
    heroCta: 'حمّل Tabira من Google Play',
    explore: 'اكتشف نهجنا',
    quiet: 'روتينك، في مكان واضح واحد.',
    aboutLabel: 'الفكرة',
    aboutTitle: 'أقل مما عليك تذكّره. مساحة أكبر لتعيش.',
    aboutBody: 'قد يحمل الروتين الصحي اليومي عبئاً ذهنياً أكبر مما نتوقع. تحوّل Tabira التفاصيل الصغيرة التي تختار متابعتها إلى إيقاع لطيف وموثوق — من دون أن تجعل يومك يبدو طبياً.',
    howLabel: 'كيف تعمل Tabira',
    howTitle: 'طقس صغير، أصبح أخف.',
    howSteps: [
      ['٠١', 'أضف ما يهمك', 'احفظ اسم الدواء والجرعة والتفاصيل التي تريدها قريبة منك.'],
      ['٠٢', 'اختر إيقاعك', 'حدّد مواعيد تذكير تناسب يومك. أنت دائماً من يقرر.'],
      ['٠٣', 'واصل يومك', 'تساعدك إشارة هادئة على البقاء منظماً، ثم تتركك تكمل يومك.'],
    ],
    valuesLabel: 'ما يوجّهنا',
    valuesTitle: 'مفيدة بطبيعتها. إنسانية دائماً.',
    values: [
      ['بسيطة', 'شاشات واضحة وخيارات مدروسة، بلا ضجيج غير ضروري.', 'نجعل الخطوة التالية واضحة.'],
      ['خصوصية أولاً', 'روتينك الصحي شخصي. ونتعامل معه على هذا الأساس.', 'نجمع أقل قدر ممكن.'],
      ['موثوقة', 'التفاصيل الدقيقة مهمة عندما تصبح جزءاً من يومك.', 'نتواصل بصدق.'],
    ],
    productLabel: 'داخل Tabira',
    productTitle: 'المقدار المناسب من المساعدة.',
    productBody: 'اعرف ما هو التالي ومتى، من دون أي شيء يشتت انتباهك عن يومك.',
    today: 'اليوم',
    upcoming: 'التالي',
    next: 'التذكير التالي',
    done: 'اكتمل لليوم',
    disclaimer: 'Tabira أداة للتنظيم والتذكير فقط. لا تقدم تشخيصاً أو علاجاً أو نصائح طبية.',
    ctaTitle: 'اترك مساحة لبقية يومك.',
    ctaBody: 'يبدأ الروتين الأكثر هدوءاً من مكان واضح واحد.',
    footer: 'تبني Tabira Labs أدوات رقمية تساعد الناس على تنظيم روتينهم الصحي اليومي.',
    contact: 'تواصل',
  },
} as const;

function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.12 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${visible ? 'reveal-visible' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

function PhonePreview({ copy }: { copy: { today: string; next: string; quiet: string } }) {
  return (
    <div className="relative mx-auto w-full max-w-[390px]">
      <div className="absolute -inset-9 rounded-full bg-[hsl(var(--accent)/.23)] blur-3xl" />
      <div className="phone-shadow relative mx-auto w-[260px] rounded-[2.4rem] border-[7px] border-[hsl(var(--foreground))] bg-[hsl(var(--card))] p-3 sm:w-[280px]">
        <div className="mb-3 flex justify-center"><span className="h-1.5 w-16 rounded-full bg-[hsl(var(--border))]" /></div>
        <div className="rounded-[1.7rem] bg-[hsl(var(--muted))] px-4 pb-5 pt-5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-[hsl(var(--muted-foreground))]">09:41</span>
            <span className="flex gap-1"><span className="h-1 w-1 rounded-full bg-[hsl(var(--primary))]" /><span className="h-1 w-1 rounded-full bg-[hsl(var(--primary))]" /></span>
          </div>
          <div className="mt-7">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[hsl(var(--muted-foreground))]">{copy.today}</p>
            <h3 className="mt-1 text-2xl font-extrabold">Good morning.</h3>
            <p className="mt-1 text-xs text-[hsl(var(--muted-foreground))]">{copy.quiet}</p>
          </div>
          <div className="mt-5 rounded-2xl bg-[hsl(var(--card))] p-3 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[hsl(var(--accent))]"><BellRing size={15} /></div>
                <div><p className="text-xs font-extrabold">Vitamin D</p><p className="text-[10px] text-[hsl(var(--muted-foreground))]">1 tablet · 8:00 AM</p></div>
              </div><CircleCheck size={17} className="text-[hsl(var(--primary))]" />
            </div>
          </div>
          <div className="mt-3 rounded-2xl border border-dashed border-[hsl(var(--primary)/.3)] bg-[hsl(var(--card)/.55)] p-3">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[hsl(var(--primary))]">{copy.next}</p>
            <div className="mt-2 flex items-center gap-2"><Clock3 size={14} className="text-[hsl(var(--primary))]" /><span className="text-xs font-bold">Omega 3</span><span className="ms-auto text-[10px] text-[hsl(var(--muted-foreground))]">12:30 PM</span></div>
          </div>
          <div className="mt-8 flex justify-center"><img src={iconPath} alt="Tabira capsule mark" className="h-10 w-10 rounded-xl" /></div>
        </div>
      </div>
    </div>
  );
}

export default function Landing({ lang }: { lang: 'en' | 'ar' }) {
  const copy = content[lang];
  const arabic = lang === 'ar';
  const other = arabic ? '/en' : '/ar';
  return (
    <div className="site-shell" dir={arabic ? 'rtl' : 'ltr'}>
      <section className="soft-grid relative">
        <span className="hero-orb -start-28 top-28 h-64 w-64 bg-[hsl(var(--accent)/.1)] blur-3xl" />
        <span className="hero-orb -end-28 top-96 h-80 w-80 bg-[hsl(var(--primary)/.08)] blur-3xl" />
        <Header lang={lang} />
        <main>
          <div className="container-wide grid min-h-[700px] items-center gap-14 pb-20 pt-20 lg:grid-cols-[1.05fr_.95fr] lg:gap-6 lg:pb-28 lg:pt-24">
            <Reveal className="relative z-10">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border bg-[hsl(var(--card)/.72)] px-3 py-2 text-xs font-bold text-[hsl(var(--primary))] shadow-sm"><span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--accent))]" />{copy.heroTag}</div>
              <h1 className="display max-w-3xl text-6xl sm:text-7xl lg:text-[5.7rem]">{copy.heroTitle}</h1>
              <p className="mt-8 max-w-xl text-lg leading-8 text-[hsl(var(--muted-foreground))]">{copy.heroBody}</p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a data-testid="link-google-play-hero" href={PLAY_URL} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center gap-2 rounded-full bg-[hsl(var(--primary))] px-5 py-3.5 font-extrabold text-[hsl(var(--primary-foreground))] shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"><Download size={17} />{copy.heroCta}<ArrowUpRight size={15} /></a>
                <a data-testid="link-explore" href="#about" className="focus-ring inline-flex items-center gap-2 rounded-full border bg-[hsl(var(--card)/.7)] px-5 py-3.5 font-extrabold transition-colors hover:bg-[hsl(var(--card))]">{copy.explore}<ArrowDown size={15} /></a>
              </div>
              <div className="mt-8 flex items-center gap-3 text-xs font-bold text-[hsl(var(--muted-foreground))]"><ShieldCheck size={16} className="text-[hsl(var(--primary))]" />{copy.disclaimer}</div>
            </Reveal>
            <Reveal delay={140} className="relative z-10">
              <PhonePreview copy={copy} />
            </Reveal>
          </div>
          <div className="border-y bg-[hsl(var(--card)/.48)]">
            <div className="container-wide grid gap-5 py-5 text-center text-sm font-bold text-[hsl(var(--muted-foreground))] sm:grid-cols-3 sm:text-start">
              <div className="flex items-center justify-center gap-2 sm:justify-start"><LockKeyhole size={16} className="text-[hsl(var(--primary))]" /> {arabic ? 'خصوصيتك مهمة' : 'Your privacy matters'}</div>
              <div className="flex items-center justify-center gap-2 sm:justify-start"><HeartHandshake size={16} className="text-[hsl(var(--primary))]" /> {arabic ? 'مصمم للناس' : 'Designed for people'}</div>
              <div className="flex items-center justify-center gap-2 sm:justify-start"><Sparkles size={16} className="text-[hsl(var(--primary))]" /> {arabic ? 'واضح من البداية' : 'Clear from the start'}</div>
            </div>
          </div>
        </main>
      </section>

      <section id="about" className="container-wide scroll-mt-10 py-24 sm:py-32">
        <Reveal><div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-24"><p className="eyebrow">{copy.aboutLabel}</p><div><h2 className="display max-w-3xl text-4xl sm:text-6xl">{copy.aboutTitle}</h2><p className="mt-7 max-w-2xl text-lg leading-8 text-[hsl(var(--muted-foreground))]">{copy.aboutBody}</p></div></div></Reveal>
        <Reveal delay={110} className="mt-20"><div className="grid gap-5 md:grid-cols-[1.3fr_.7fr]"><div className="relative overflow-hidden rounded-[2rem] bg-[hsl(var(--primary))] p-8 text-[hsl(var(--primary-foreground))] sm:p-12"><div className="absolute -end-10 -top-16 h-60 w-60 rounded-full border-[25px] border-[hsl(var(--accent)/.25)]" /><BookOpen size={28} className="mb-16 text-[hsl(var(--accent))]" /><p className="max-w-md text-3xl font-extrabold leading-tight sm:text-4xl">{copy.quiet}</p><div className="mt-14 flex items-center gap-2 text-sm font-bold text-[hsl(var(--primary-foreground)/.7)]"><Check size={16} /> {arabic ? 'روتين يخصك' : 'A routine that belongs to you'}</div></div><div className="flex min-h-[240px] flex-col justify-between rounded-[2rem] border bg-[hsl(var(--muted)/.6)] p-8"><CalendarDays size={28} className="text-[hsl(var(--primary))]" /><p className="text-xl font-extrabold">{arabic ? 'تفاصيل أقل في رأسك، ووضوح أكثر في يومك.' : 'Fewer details to carry in your head, more clarity in your day.'}</p></div></div></Reveal>
      </section>

      <section id="how-it-works" className="border-y bg-[hsl(var(--muted)/.35)] scroll-mt-10"><div className="container-wide py-24 sm:py-32"><Reveal><div className="grid gap-10 lg:grid-cols-[.65fr_1.35fr]"><div><p className="eyebrow">{copy.howLabel}</p><h2 className="display mt-5 max-w-md text-4xl sm:text-6xl">{copy.howTitle}</h2></div><div className="grid gap-4">{copy.howSteps.map(([number, title, body], index) => <div key={number} className="group grid gap-4 rounded-3xl border bg-[hsl(var(--card))] p-6 transition-transform hover:-translate-y-1 sm:grid-cols-[70px_1fr_1.2fr] sm:items-center sm:p-7"><span className="text-3xl font-extrabold text-[hsl(var(--accent-foreground))]">{number}</span><h3 className="text-xl font-extrabold">{title}</h3><p className="text-[hsl(var(--muted-foreground))]">{body}</p><ChevronRight className="hidden text-[hsl(var(--primary))] transition-transform group-hover:translate-x-1 sm:block" size={18} /></div>)}</div></div></Reveal></div></section>

      <section id="values" className="container-wide scroll-mt-10 py-24 sm:py-32"><Reveal><div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-end"><div><p className="eyebrow">{copy.valuesLabel}</p><h2 className="display mt-5 max-w-2xl text-4xl sm:text-6xl">{copy.valuesTitle}</h2></div><p className="max-w-xs text-sm leading-6 text-[hsl(var(--muted-foreground))]">{copy.disclaimer}</p></div></Reveal><div className="mt-14 grid gap-4 md:grid-cols-3">{copy.values.map(([title, body, line], index) => <Reveal key={title} delay={index * 90}><article className={`h-full rounded-[1.75rem] border p-7 ${index === 1 ? 'bg-[hsl(var(--accent)/.28)]' : 'bg-[hsl(var(--card))]'}`}><span className="mb-16 block text-sm font-extrabold text-[hsl(var(--primary))]">0{index + 1}</span><h3 className="text-2xl font-extrabold">{title}</h3><p className="mt-3 leading-7 text-[hsl(var(--muted-foreground))]">{body}</p><p className="mt-10 border-t pt-4 text-sm font-extrabold">{line}</p></article></Reveal>)}</div></section>

      <section className="container-wide pb-24 sm:pb-32"><Reveal><div className="grid items-center gap-14 overflow-hidden rounded-[2.5rem] bg-[hsl(var(--primary))] p-8 text-[hsl(var(--primary-foreground))] sm:p-14 lg:grid-cols-[.9fr_1.1fr]"><div><p className="eyebrow text-[hsl(var(--accent))]">{copy.productLabel}</p><h2 className="display mt-5 text-4xl sm:text-6xl">{copy.productTitle}</h2><p className="mt-6 max-w-md text-lg leading-8 text-[hsl(var(--primary-foreground)/.72)]">{copy.productBody}</p><div className="mt-10 flex items-center gap-3 text-sm font-bold"><CircleCheck size={18} className="text-[hsl(var(--accent))]" />{copy.done}</div></div><PhonePreview copy={copy} /></div></Reveal></section>

      <section className="border-t bg-[hsl(var(--accent)/.2)]"><div className="container-wide py-24 text-center sm:py-32"><Reveal><p className="eyebrow">{arabic ? 'ابدأ بهدوء' : 'Start with a little less noise'}</p><h2 className="display mx-auto mt-5 max-w-3xl text-5xl sm:text-7xl">{copy.ctaTitle}</h2><p className="mx-auto mt-6 max-w-md text-lg text-[hsl(var(--muted-foreground))]">{copy.ctaBody}</p><a data-testid="link-google-play-cta" href={PLAY_URL} target="_blank" rel="noreferrer" className="focus-ring mt-9 inline-flex items-center gap-2 rounded-full bg-[hsl(var(--primary))] px-6 py-4 font-extrabold text-[hsl(var(--primary-foreground))] transition-transform hover:-translate-y-0.5"><Download size={17} />{copy.heroCta}<ArrowUpRight size={15} /></a></Reveal></div></section>
      <Footer lang={lang} copy={copy} />
    </div>
  );
}

function Header({ lang }: { lang: 'en' | 'ar' }) {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(() => localStorage.getItem('tabira-theme') === 'dark');
  const arabic = lang === 'ar';
  useEffect(() => { document.documentElement.classList.toggle('dark', dark); localStorage.setItem('tabira-theme', dark ? 'dark' : 'light'); }, [dark]);
  const copy = content[lang];
  return <header className="relative z-30 border-b bg-[hsl(var(--background)/.7)] backdrop-blur-md"><div className="container-wide flex h-[74px] items-center justify-between"><Link href={arabic ? '/ar' : '/en'} className="focus-ring flex items-center gap-3"><img src={iconPath} alt="Tabira Labs logo" className="h-9 w-9 rounded-xl" /><span className="text-base font-extrabold">Tabira Labs</span></Link><nav className="hidden items-center gap-8 text-sm font-bold text-[hsl(var(--muted-foreground))] md:flex">{copy.nav.map((item, i) => <a key={item} className="line-link focus-ring" href={['#about', '#how-it-works', '#values'][i]}>{item}</a>)}</nav><div className="flex items-center gap-2"><Link data-testid="link-language-switch" href={otherPath(lang)} className="focus-ring rounded-full px-3 py-2 text-xs font-extrabold text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--muted))]">{arabic ? 'English' : 'العربية'}</Link><button data-testid="button-theme-toggle" aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} onClick={() => setDark((value) => !value)} className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border bg-[hsl(var(--card))] transition-transform hover:rotate-12">{dark ? <Sun size={16} /> : <Moon size={16} />}</button><button data-testid="button-mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen((value) => !value)} className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border md:hidden">{open ? <span><span className="sr-only">Close</span><Menu size={17} /></span> : <Menu size={17} />}</button></div></div>{open && <div className="container-wide border-t py-4 md:hidden"><div className="grid gap-1">{copy.nav.map((item, i) => <a key={item} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 font-bold hover:bg-[hsl(var(--muted))]" href={['#about', '#how-it-works', '#values'][i]}>{item}</a>)}</div></div>}</header>;
}

function otherPath(lang: 'en' | 'ar') { return lang === 'ar' ? '/en' : '/ar'; }

function Footer({ lang, copy }: { lang: 'en' | 'ar'; copy: { footer: string; nav: readonly string[]; contact: string } }) {
  const arabic = lang === 'ar';
  return <footer className="container-wide grid gap-10 border-t py-12 sm:grid-cols-[1.2fr_.8fr_.8fr]"><div><Link href={arabic ? '/ar' : '/en'} className="flex items-center gap-3"><img src={iconPath} alt="" className="h-8 w-8 rounded-lg" /><span className="font-extrabold">Tabira Labs</span></Link><p className="mt-5 max-w-xs text-sm leading-6 text-[hsl(var(--muted-foreground))]">{copy.footer}</p></div><div><p className="mb-4 text-xs font-extrabold uppercase tracking-widest text-[hsl(var(--muted-foreground))]">{arabic ? 'استكشف' : 'Explore'}</p><div className="grid gap-3 text-sm font-bold"><a className="line-link w-fit" href="#about">{copy.nav[0]}</a><a className="line-link w-fit" href="#how-it-works">{copy.nav[1]}</a><Link className="line-link w-fit" href={arabic ? '/ar/privacy' : '/en/privacy'}>{arabic ? 'الخصوصية' : 'Privacy policy'}</Link></div></div><div><p className="mb-4 text-xs font-extrabold uppercase tracking-widest text-[hsl(var(--muted-foreground))]">{copy.contact}</p><div className="grid gap-3 text-sm font-bold"><a className="line-link flex w-fit items-center gap-2" href="mailto:Contact@tabira.xyz"><Languages size={15} />Contact@tabira.xyz</a><Link className="line-link w-fit" href={arabic ? '/ar/terms' : '/en/terms'}>{arabic ? 'شروط الخدمة' : 'Terms of service'}</Link></div></div><div className="border-t pt-5 text-xs text-[hsl(var(--muted-foreground))] sm:col-span-3">{arabic ? '© 2025 Tabira Labs. جميع الحقوق محفوظة.' : '© 2025 Tabira Labs. All rights reserved.'}</div></footer>;
}