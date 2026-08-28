import { ArrowLeft, ArrowRight, LockKeyhole, Mail, Moon, Scale, Sun } from 'lucide-react';
import { Link } from 'wouter';
import { useEffect, useState } from 'react';

type LegalKind = 'privacy' | 'terms';

const legalCopy = {
  en: {
    privacy: {
      label: 'Privacy policy',
      title: 'Your routine is yours.',
      intro: 'This policy explains how Tabira Labs handles information when you use Tabira. We keep the language plain because privacy should be easy to understand.',
      updated: 'Last updated: 12-08-2026 · Effective date: 12-08-2026',
      sections: [
        ['Information we collect', 'Tabira is designed with privacy in mind and aims to minimize the collection of personal information. You may enter medication names, doses, medication schedules, reminder times, medication notes, or other information you choose to add. This information is used to provide medication reminder and organization features. Tabira Labs does not knowingly collect this medical information on its own servers unless explicitly stated in a future version. Where information is stored locally on your device, it remains on your device and is not automatically sent to Tabira Labs.'],
        ['Analytics information', 'Tabira may use Google Analytics to understand how users interact with the App and to improve performance, functionality, and user experience. Google Analytics may collect technical and usage information, events, and interactions depending on the service configuration. Google processes information collected through its services according to its own policies.'],
        ['How we use information', 'Information handled by Tabira may be used to provide medication reminders, maintain App features, improve the App, understand usage, resolve technical issues, improve performance and user experience, and maintain security and reliability. We do not sell your personal information.'],
        ['Medication information', 'Tabira is primarily a medication organization and reminder tool. Medication information you enter is used to provide the functionality you request. Tabira Labs does not independently verify the accuracy of medication information entered by users. You are responsible for ensuring that your medication information is accurate.'],
        ['Notifications', 'Tabira may use local notifications to provide medication reminders. Notification information may be processed by your device’s operating system. Delivery may be affected by device settings, operating-system restrictions, battery optimization, notification permissions, or other technical factors.'],
        ['Data sharing', 'Tabira Labs does not sell or rent your personal information. We may use third-party services, such as Google Analytics, to provide analytics and improve the App. Third-party services may process information according to their own policies and terms. We may also disclose information when required by applicable law, legal process, or governmental authority.'],
        ['Data storage', 'Tabira is designed to minimize the transfer of user information. Where medication and reminder information is stored locally on your device, Tabira Labs does not have direct access to it. You are responsible for protecting access to your device. If future versions introduce cloud storage, accounts, synchronization, or other data-processing features, this policy may be updated accordingly.'],
        ['Data security', 'We take reasonable measures to protect information associated with the App. However, electronic storage and transmission systems cannot be guaranteed to be completely secure. You should use appropriate security measures on your device, including a secure device lock or authentication method.'],
        ['Children’s privacy', 'Tabira is not specifically directed at children. We do not knowingly collect personal information directly from children.'],
        ['Third-party services', 'Tabira may use third-party services, including Google Analytics, to help us understand App usage and improve Tabira. Third-party services may collect or process information according to their own privacy policies. We encourage you to review the privacy policies of any third-party services used by the App.'],
        ['Privacy choices', 'Depending on your device and applicable laws, you may be able to control certain permissions and data collection through your device settings. You can stop using Tabira or uninstall the App at any time. If information is stored locally on your device, uninstalling the App may delete that locally stored information.'],
        ['International data processing', 'Third-party services used by Tabira, including Google Analytics, may process information in countries other than the country where you live.'],
        ['Changes to this policy', 'We may update this policy from time to time to reflect changes to Tabira, our practices, or applicable legal requirements. When changes are made, we will update the last-updated date at the beginning of this policy. Your continued use of Tabira after an updated policy becomes effective means you accept the updated policy.'],
        ['Contact us', 'If you have questions, concerns, or requests regarding this policy, please contact us. App: Tabira. Developer: Tabira Labs. Email: Contact@tabira.xyz.'],
        ['Consent', 'By using Tabira, you acknowledge that you have read and understood this policy and agree to the practices described in it.'],
      ],
    },
    terms: {
      label: 'Terms of service',
      title: 'A clear agreement.',
      intro: 'These terms describe the simple ground rules for using Tabira, a reminder and organization tool from Tabira Labs.',
      updated: 'Last updated: 12-08-2026 · Effective date: 12-08-2026',
      sections: [
        ['About Tabira', 'Tabira is a medication reminder and organization application that helps users organize medication schedules and receive reminders. Tabira is intended only as a personal tool for medication organization and reminders. It is not a medical service and does not provide medical advice, diagnosis, treatment, or emergency medical services.'],
        ['Medical disclaimer', 'Tabira does not replace a doctor, pharmacist, or other qualified healthcare professional. Always follow the instructions of your healthcare provider regarding your medications. Do not start, stop, change, or modify any medication or dosage based solely on information or reminders provided by Tabira. In a medical emergency, seek immediate medical attention or contact local emergency services.'],
        ['Medication information', 'Tabira allows you to enter and manage medication-related information such as medication names, doses, schedules, and reminder times. You are responsible for ensuring that the information you enter is accurate. Tabira does not independently verify medication information entered by users.'],
        ['Alerts and reminders', 'Tabira may provide medication reminders and notifications based on the information and schedules you set. Notifications may fail, be delayed, or be affected by your device settings, operating system, battery optimization, notification permissions, or other technical conditions. Do not rely exclusively on Tabira for medication or treatment that requires time-critical action.'],
        ['Data and privacy', 'Tabira is designed to minimize the collection of user information. The App does not collect, sell, or share your personal information for advertising purposes. Information you enter for medication management is used to provide the App’s functionality. Tabira may use Google Analytics or similar analytics technologies to understand App usage, identify technical issues, and improve the App.'],
        ['Advertising', 'If Tabira displays advertisements, advertising services may collect certain information according to their own policies and available choices. Tabira does not sell your personal information to advertisers.'],
        ['Third-party services', 'Tabira may use third-party services, including Google Analytics and other services required to operate or improve the App. These services operate under their own terms and privacy policies.'],
        ['Intellectual property', 'The Tabira application, including its software, design, graphics, logos, trademarks, and original content, is owned or licensed by Tabira Labs and protected by applicable intellectual property laws. You may not copy, modify, distribute, reverse engineer, or commercially exploit the App except as permitted by applicable law.'],
        ['Availability', 'We make reasonable efforts to keep Tabira available and functioning properly. However, we do not guarantee that the App will always be available or free from interruptions, errors, or technical issues. We may update, modify, suspend, or discontinue features of the App at any time.'],
        ['Disclaimer of warranties', 'To the maximum extent permitted by law, Tabira is provided “as is” and “as available”. We do not guarantee that the App will meet every user requirement or that reminders and notifications will always operate without interruption or failure.'],
        ['Limitation of liability', 'To the maximum extent permitted by law, Tabira Labs and its developer are not liable for damages arising from your use of, or inability to use, the App. This includes, where legally permitted, consequences resulting from missed, delayed, or failed notifications, inaccurate information entered by a user, or reliance on the App for medical purposes. Nothing in these Terms excludes liability that cannot legally be excluded under applicable law.'],
        ['Changes to these terms', 'We may update these Terms from time to time. If we make material changes, we may notify you through the App or by another appropriate method. Your continued use of Tabira after updated Terms become effective means you accept them.'],
        ['Termination', 'You may stop using Tabira at any time. We may restrict or terminate access to the App when necessary to protect the App, its users, or our rights, or when these Terms have been violated.'],
        ['Contact us', 'If you have questions, concerns, or requests regarding these Terms, please contact us. App: Tabira. Developer: Tabira Labs. Email: Contact@tabira.xyz.'],
        ['Acceptance', 'By using Tabira, you acknowledge that you have read, understood, and agreed to these Terms of Service.'],
      ],
    },
  },
  ar: {
    privacy: {
      label: 'سياسة الخصوصية',
      title: 'روتينك ملكك.',
      intro: 'توضح هذه السياسة كيفية تعامل Tabira Labs مع المعلومات عند استخدام Tabira. نستخدم لغة واضحة لأن فهم الخصوصية يجب أن يكون سهلاً.',
      updated: 'آخر تحديث: 12-08-2026 · تاريخ السريان: 12-08-2026',
      sections: [
        ['المعلومات التي نجمعها', 'صُمم Tabira مع وضع الخصوصية في الاعتبار ويهدف إلى تقليل جمع المعلومات الشخصية. يمكنك إدخال أسماء الأدوية والجرعات والجداول ومواعيد التذكير والملاحظات أو أي معلومات تختار إضافتها. تُستخدم هذه المعلومات لتوفير ميزات تنظيم الأدوية والتذكير. لا تجمع Tabira Labs هذه المعلومات الطبية أو تستقبلها على خوادمها عن قصد، ما لم يُذكر ذلك صراحةً في إصدار مستقبلي. وإذا حُفظت المعلومات محلياً على جهازك، فإنها تبقى عليه ولا تُرسل تلقائياً إلى Tabira Labs.'],
        ['معلومات التحليلات', 'قد يستخدم Tabira خدمة Google Analytics لفهم كيفية تفاعل المستخدمين مع التطبيق وتحسين أدائه ووظائفه وتجربته. قد تجمع Google Analytics معلومات تقنية ومعلومات عن الاستخدام والأحداث والتفاعلات، بحسب إعدادات الخدمة. وتعالج Google المعلومات التي تجمعها خدماتها وفقاً لسياساتها الخاصة.'],
        ['كيف نستخدم المعلومات', 'قد تُستخدم المعلومات التي يتعامل معها Tabira لتوفير التذكيرات والمحافظة على ميزات التطبيق وتحسينه وفهم طريقة استخدامه وحل المشكلات التقنية وتحسين الأداء وتجربة المستخدم والحفاظ على الأمان والموثوقية. نحن لا نبيع معلوماتك الشخصية.'],
        ['معلومات الأدوية', 'Tabira أداة لتنظيم الأدوية والتذكير بها بشكل أساسي. تُستخدم معلومات الأدوية التي تدخلها لتوفير الوظائف التي تطلبها. لا تتحقق Tabira Labs بشكل مستقل من دقة المعلومات التي يدخلها المستخدمون، وأنت مسؤول عن التأكد من دقتها.'],
        ['الإشعارات', 'قد يستخدم Tabira إشعارات محلية لتقديم تذكيرات الأدوية. قد يعالج نظام التشغيل في جهازك معلومات الإشعارات لإيصالها. وقد يتأثر وصولها بإعدادات الجهاز أو قيود نظام التشغيل أو تحسين البطارية أو أذونات الإشعارات أو عوامل تقنية أخرى.'],
        ['مشاركة البيانات', 'لا تبيع Tabira Labs معلوماتك الشخصية أو تؤجرها. قد نستخدم خدمات من أطراف ثالثة، مثل Google Analytics، لتوفير التحليلات وتحسين التطبيق. وقد تعالج هذه الخدمات المعلومات وفقاً لسياساتها وشروطها. كما قد نكشف المعلومات عندما يطلب القانون أو الإجراءات القانونية أو الجهات الحكومية ذلك.'],
        ['تخزين البيانات', 'صُمم Tabira لتقليل نقل معلومات المستخدم. عندما تُحفظ معلومات الأدوية والتذكيرات محلياً على جهازك، لا تملك Tabira Labs وصولاً مباشراً إليها. أنت مسؤول عن حماية الوصول إلى جهازك. وإذا قدمت الإصدارات المستقبلية تخزيناً سحابياً أو حسابات أو مزامنة أو ميزات أخرى لمعالجة البيانات، فقد نحدّث هذه السياسة وفقاً لذلك.'],
        ['أمان البيانات', 'نتخذ تدابير معقولة لحماية المعلومات المرتبطة بالتطبيق. ومع ذلك، لا يمكن ضمان أن تكون أنظمة التخزين والنقل الإلكترونية آمنة تماماً. استخدم وسائل الحماية المناسبة على جهازك، مثل قفل الجهاز أو طريقة مصادقة آمنة.'],
        ['خصوصية الأطفال', 'لا يستهدف Tabira الأطفال تحديداً، ولا نجمع عن قصد معلومات شخصية مباشرة من الأطفال.'],
        ['خدمات الأطراف الثالثة', 'قد يستخدم Tabira خدمات من أطراف ثالثة، بما في ذلك Google Analytics، لمساعدتنا على فهم استخدام التطبيق وتحسينه. قد تجمع هذه الخدمات المعلومات أو تعالجها وفقاً لسياسات الخصوصية الخاصة بها. ننصحك بمراجعة سياسات أي خدمات من أطراف ثالثة يستخدمها التطبيق.'],
        ['خيارات الخصوصية', 'بحسب جهازك والقوانين المعمول بها، قد تتمكن من التحكم في بعض الأذونات وجمع البيانات من خلال إعدادات جهازك. يمكنك أيضاً التوقف عن استخدام Tabira أو حذف التطبيق في أي وقت. وإذا كانت المعلومات محفوظة محلياً على جهازك، فقد يؤدي حذف التطبيق إلى حذفها.'],
        ['المعالجة الدولية للبيانات', 'قد تعالج خدمات الأطراف الثالثة التي يستخدمها Tabira، بما في ذلك Google Analytics، المعلومات في دول أخرى غير الدولة التي تعيش فيها.'],
        ['التغييرات على هذه السياسة', 'قد نحدّث هذه السياسة من وقت لآخر لتعكس التغييرات في Tabira أو ممارساتنا أو المتطلبات القانونية المعمول بها. عند إجراء تغييرات، سنحدّث تاريخ آخر تعديل في بداية هذه السياسة. ويعني استمرارك في استخدام Tabira بعد سريان السياسة المحدّثة موافقتك عليها.'],
        ['تواصل معنا', 'إذا كانت لديك أسئلة أو مخاوف أو طلبات بشأن هذه السياسة، فتواصل معنا. التطبيق: Tabira. المطور: Tabira Labs. البريد الإلكتروني: Contact@tabira.xyz.'],
        ['الموافقة', 'باستخدام Tabira، تقر بأنك قرأت هذه السياسة وفهمتها وتوافق على الممارسات الموضحة فيها.'],
      ],
    },
    terms: {
      label: 'شروط الخدمة',
      title: 'اتفاق واضح.',
      intro: 'توضح هذه الشروط القواعد الأساسية لاستخدام Tabira، أداة التذكير والتنظيم من Tabira Labs.',
      updated: 'آخر تحديث: 12-08-2026 · تاريخ السريان: 12-08-2026',
      sections: [
        ['عن Tabira', 'Tabira تطبيق لتذكير الأدوية وتنظيمها، يساعد المستخدمين على تنظيم جداول الأدوية والحصول على التذكيرات. صُمم Tabira كأداة شخصية لتنظيم الأدوية والتذكير بها فقط. وهو ليس خدمة طبية ولا يقدم نصائح طبية أو تشخيصاً أو علاجاً أو خدمات طوارئ طبية.'],
        ['إخلاء المسؤولية الطبية', 'لا يحل Tabira محل الطبيب أو الصيدلي أو أي مختص رعاية صحية مؤهل. اتبع دائماً تعليمات مقدم الرعاية الصحية بشأن أدويتك. لا تبدأ أو توقف أو تغيّر أي دواء أو جرعة اعتماداً فقط على المعلومات أو التذكيرات التي يقدمها Tabira. عند حدوث طارئ طبي، اطلب العناية الطبية فوراً أو تواصل مع خدمات الطوارئ المحلية.'],
        ['معلومات الأدوية', 'يتيح لك Tabira إدخال وإدارة معلومات مرتبطة بالأدوية، مثل الأسماء والجرعات والجداول ومواعيد التذكير. أنت مسؤول عن التأكد من دقة المعلومات التي تدخلها، ولا يتحقق Tabira بشكل مستقل من معلومات الأدوية التي يدخلها المستخدمون.'],
        ['التنبيهات والتذكيرات', 'قد يقدم Tabira تذكيرات وإشعارات للأدوية بناءً على المعلومات والجداول التي تحددها. وقد تفشل الإشعارات أو تتأخر أو تتأثر بإعدادات جهازك أو نظام التشغيل أو تحسين البطارية أو أذونات الإشعارات أو ظروف تقنية أخرى. لا تعتمد على Tabira وحده للأدوية أو العلاجات التي تتطلب إجراءً في وقت محدد.'],
        ['البيانات والخصوصية', 'صُمم Tabira لتقليل جمع معلومات المستخدم. لا يجمع التطبيق معلوماتك الشخصية ولا يبيعها ولا يشاركها لأغراض إعلانية. تُستخدم المعلومات التي تدخلها لإدارة الأدوية لتوفير وظائف التطبيق. وقد يستخدم Tabira تقنيات مثل Google Analytics لفهم استخدام التطبيق وتحديد المشكلات التقنية وتحسينه.'],
        ['الإعلانات', 'إذا عرض Tabira إعلانات، فقد تجمع خدمات الإعلان بعض المعلومات وفقاً لسياساتها وخياراتها المتاحة. لا يبيع Tabira معلوماتك الشخصية للمعلنين.'],
        ['خدمات الأطراف الثالثة', 'قد يستخدم Tabira خدمات من أطراف ثالثة، بما في ذلك Google Analytics وخدمات أخرى مطلوبة لتشغيل التطبيق أو تحسينه. وتعمل هذه الخدمات وفقاً لشروطها وسياسات الخصوصية الخاصة بها.'],
        ['الملكية الفكرية', 'تطبيق Tabira، بما في ذلك برمجياته وتصميمه ورسوماته وشعاراته وعلاماته التجارية ومحتواه الأصلي، مملوك أو مرخّص لشركة Tabira Labs ومحمي بموجب قوانين الملكية الفكرية المعمول بها. لا يجوز لك نسخ التطبيق أو تعديله أو توزيعه أو إجراء هندسة عكسية له أو استغلاله تجارياً إلا بما يسمح به القانون.'],
        ['التوفر', 'نبذل جهوداً معقولة للحفاظ على توفر Tabira وعمله بشكل صحيح، لكننا لا نضمن أن يكون التطبيق متاحاً دائماً أو خالياً من الانقطاعات أو الأخطاء أو المشكلات التقنية. وقد نحدّث ميزات التطبيق أو نعدّلها أو نعلّقها أو نوقفها في أي وقت.'],
        ['إخلاء ضمانات', 'إلى أقصى حد يسمح به القانون، يُقدم Tabira "كما هو" و"حسب التوفر". لا نضمن أن يلبي التطبيق كل متطلبات المستخدم أو أن تعمل التذكيرات والإشعارات دائماً دون انقطاع أو فشل.'],
        ['حدود المسؤولية', 'إلى أقصى حد يسمح به القانون، لا تتحمل Tabira Labs أو مطورها المسؤولية عن الأضرار الناتجة عن استخدام التطبيق أو عدم القدرة على استخدامه. ويشمل ذلك، حيثما يسمح القانون، النتائج الناتجة عن الإشعارات الفائتة أو المتأخرة أو الفاشلة، أو المعلومات غير الدقيقة التي يدخلها المستخدم، أو الاعتماد على التطبيق لأغراض طبية. ولا يستبعد أي بند في هذه الشروط مسؤولية لا يجوز استبعادها قانوناً.'],
        ['التغييرات على الشروط', 'قد نحدّث هذه الشروط من وقت لآخر. وإذا أجرينا تغييرات جوهرية، فقد نخطرك من خلال التطبيق أو بطريقة مناسبة أخرى. ويعني استمرارك في استخدام Tabira بعد سريان الشروط المحدّثة قبولك بها.'],
        ['الإنهاء', 'يمكنك التوقف عن استخدام Tabira في أي وقت. وقد نقيّد الوصول إلى التطبيق أو ننهيه عند الضرورة لحماية التطبيق أو مستخدميه أو حقوقنا، أو عند انتهاك هذه الشروط.'],
        ['تواصل معنا', 'إذا كانت لديك أسئلة أو مخاوف أو طلبات بشأن هذه الشروط، فتواصل معنا. التطبيق: Tabira. المطور: Tabira Labs. البريد الإلكتروني: Contact@tabira.xyz.'],
        ['الموافقة', 'باستخدام Tabira، تقر بأنك قرأت شروط الخدمة هذه وفهمتها ووافقت عليها.'],
      ],
    },
  },
} as const;

export default function LegalPage({ lang, kind }: { lang: 'en' | 'ar'; kind: LegalKind }) {
  const isArabic = lang === 'ar';
  const page = legalCopy[lang][kind];
  return (
    <div className="site-shell" dir={isArabic ? 'rtl' : 'ltr'}>
      <LegalHeader lang={lang} />
      <main className="container-wide py-10 sm:py-16">
        <Link href={isArabic ? '/ar' : '/en'} className="focus-ring inline-flex items-center gap-2 text-sm font-bold text-[hsl(var(--primary))] transition-opacity hover:opacity-70">
          {isArabic ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
          {isArabic ? 'العودة إلى Tabira' : 'Back to Tabira'}
        </Link>
        <div className="mt-16 grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-24">
          <header className="lg:sticky lg:top-10 lg:self-start">
            <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-[hsl(var(--accent))] text-[hsl(var(--foreground))]">
              {kind === 'privacy' ? <LockKeyhole size={26} /> : <Scale size={26} />}
            </div>
            <p className="eyebrow mb-4">{page.label}</p>
            <h1 className="display max-w-md text-5xl sm:text-6xl">{page.title}</h1>
            <p className="mt-6 max-w-md text-lg leading-8 text-[hsl(var(--muted-foreground))]">{page.intro}</p>
            <p className="mt-8 text-sm font-bold text-[hsl(var(--muted-foreground))]">{page.updated}</p>
          </header>
          <article className="rounded-[2rem] border bg-[hsl(var(--card))] p-6 shadow-[var(--shadow-soft)] sm:p-10">
            <div className="space-y-9">
              {page.sections.map(([heading, text], index) => (
                <section key={heading} className="border-b pb-9 last:border-0 last:pb-0">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[hsl(var(--primary))]">0{index + 1}</span>
                    <h2 className="text-xl font-extrabold">{heading}</h2>
                  </div>
                  <p className="leading-8 text-[hsl(var(--muted-foreground))]">{text}</p>
                </section>
              ))}
            </div>
            <div className="mt-10 flex items-start gap-3 rounded-2xl bg-[hsl(var(--muted))] p-4 text-sm leading-6 text-[hsl(var(--muted-foreground))]">
              <Mail className="mt-1 shrink-0 text-[hsl(var(--primary))]" size={17} />
              <span>{isArabic ? 'هل لديك سؤال؟' : 'Have a question?'} <a className="font-extrabold text-[hsl(var(--primary))] underline underline-offset-4" href="mailto:Contact@tabira.xyz">Contact@tabira.xyz</a></span>
            </div>
          </article>
        </div>
      </main>
      <footer className="container-wide flex flex-col gap-4 border-t py-8 text-sm text-[hsl(var(--muted-foreground))] sm:flex-row sm:items-center sm:justify-between">
        <span className="font-extrabold text-[hsl(var(--foreground))]">Tabira Labs</span>
        <span>{isArabic ? 'أداة تنظيم وتذكير، وليست خدمة طبية.' : 'An organization and reminder tool, not a medical service.'}</span>
        <Link href={isArabic ? '/ar/terms' : '/en/terms'} className="line-link">{kind === 'terms' ? (isArabic ? 'الخصوصية' : 'Privacy') : (isArabic ? 'الشروط' : 'Terms')}</Link>
      </footer>
    </div>
  );
}

function LegalHeader({ lang }: { lang: 'en' | 'ar' }) {
  const isArabic = lang === 'ar';
  const [dark, setDark] = useState(() => localStorage.getItem('tabira-theme') === 'dark');
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('tabira-theme', dark ? 'dark' : 'light');
  }, [dark]);
  return (
    <header className="border-b bg-[hsl(var(--background)/.76)] backdrop-blur-md">
      <div className="container-wide flex h-[74px] items-center justify-between">
        <Link href={isArabic ? '/ar' : '/en'} className="focus-ring flex items-center gap-3">
          <img src={`${import.meta.env.BASE_URL}assets/tabira-icon.png`} alt="Tabira Labs logo" className="h-9 w-9 rounded-xl" />
          <span className="font-extrabold">Tabira Labs</span>
        </Link>
        <div className="flex items-center gap-2">
          <Link data-testid="link-legal-language-switch" href={`${isArabic ? '/en' : '/ar'}/${locationKindPath()}`} className="focus-ring rounded-full px-3 py-2 text-xs font-extrabold text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--muted))]">{isArabic ? 'English' : 'العربية'}</Link>
          <button data-testid="button-legal-theme-toggle" aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} onClick={() => setDark((value) => !value)} className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border bg-[hsl(var(--card))] transition-transform hover:rotate-12">{dark ? <Sun size={16} /> : <Moon size={16} />}</button>
        </div>
      </div>
    </header>
  );
}

function locationKindPath() {
  return window.location.pathname.endsWith('/terms') ? 'terms' : 'privacy';
}