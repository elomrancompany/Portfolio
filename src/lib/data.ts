export const SITE = {
  name: "شركة العمران للمقاولات العامة",
  nameEn: "EL OMRAN General Contracting",
  established: "2025",
  phone: "011 53895074",
  phoneFormatted: "+20 11 5389 5074",
  email: "elomrancompanyegy@gmail.com",
  website: "www.elomraneg.com",
  address: "القاهرة، مصر",
  whatsapp: "201153895074",
  location: "Cairo, Egypt",
  facebook: "https://web.facebook.com/profile.php?id=61589768965958",
  instagram: "https://www.instagram.com/elomranegy/",
};

export const STATS = [
  {
    value: 22000,
    suffix: "+",
    unit: "م²",
    label: "إجمالي مساحات منفذة",
    subLabel: "أعمال خرسانية وإنشائية متكاملة",
    icon: "building",
  },
  {
    value: 180,
    suffix: "+",
    unit: "",
    label: "قاعدة خرسانية منفذة",
    subLabel: "بأعلى جودة ومواصفات قياسية",
    icon: "layers",
  },
  {
    value: 400,
    suffix: "K",
    unit: "فدان",
    label: "استصلاح زراعي",
    subLabel: "بنية تحتية وشبكات ري حديثة",
    icon: "map",
  },
  {
    value: 4,
    suffix: "+",
    unit: "",
    label: "مشاريع منجزة ونشطة",
    subLabel: "في قطاعات استراتيجية وقومية",
    icon: "check",
  },
  {
    value: 2,
    suffix: "",
    unit: "",
    label: "شركاء استراتيجيون",
    subLabel: "من الفئة الأولى (Class A)",
    icon: "handshake",
  },
];

export const SERVICES = [
  {
    id: "01",
    name: "المقاولات العامة والأعمال المدنية",
    nameEn: "General Contracting & Civil Works",
    desc: "تنفيذ الأعمال الإنشائية والمقاولات المتكاملة للمباني السكنية والتجارية والخدمية بأعلى المعايير الهندسية.",
    image: "/images/projects/concrete-night.jpg",
    localImage: "/images/projects/concrete-night.jpg",
  },
  {
    id: "02",
    name: "الخرسانات المسلحة والأساسات",
    nameEn: "Reinforced Concrete & Foundations",
    desc: "تنفيذ القواعد الخرسانية والأعمال الإنشائية والهياكل بأعلى معايير الجودة والمواصفات الدولية.",
    image: "/images/projects/construction-site.jpg",
    localImage: "/images/projects/construction-site.jpg",
  },
  {
    id: "03",
    name: "محطات رفع المياه والكهرباء",
    nameEn: "Water & Electrical Stations",
    desc: "إنشاء محطات رفع المياه والمنشآت الكهربائية المتخصصة وشبكات التغذية بأحدث التقنيات الميدانية.",
    image: "/images/projects/pipe-crane.jpg",
    localImage: "/images/projects/pipe-crane.jpg",
  },
  {
    id: "04",
    name: "شبكات المياه والصرف الصحي",
    nameEn: "Water & Sewage Networks",
    desc: "تخطيط وتمديد خطوط وشبكات المياه الرئيسية والصرف الصحي للمجمعات السكنية والزراعية.",
    image: "/images/projects/concrete-night.jpg",
    localImage: "/images/projects/concrete-night.jpg",
  },
  {
    id: "05",
    name: "مشروعات الاستصلاح الزراعي الكبرى",
    nameEn: "Large-Scale Agricultural Reclamation",
    desc: "أعمال التسوية وتجهيز التربة وشبكات الري القومية لاستصلاح الأراضي وزيادة الرقعة الزراعية.",
    image: "/images/projects/construction-site.jpg",
    localImage: "/images/projects/construction-site.jpg",
  },
];

export const PROJECTS = [
  {
    id: "mustaqbal-masr",
    name: "مشروع مستقبل مصر القومي",
    subName: "أعمال البنية التحتية الزراعية والشبكات والخرسانات",
    nameEn: "Mustaqbal Masr National Project",
    client: "شركة كونكورد للمقاولات والهندسة (مقاول رئيسي الفئة الأولى)",
    status: "مكتمل",
    statusColor: "gold",
    location: "محور الضبعة، مصر",
    image: "/images/projects/concrete-night.png",
    localImage: "/images/projects/concrete-night.png",
    scope: "أعمال البنية التحتية الزراعية، قنوات الري، القواعد الإنشائية وشبكات التغذية المتكاملة.",
    metrics: [
      { value: "400,000", label: "فدان استصلاح زراعي" },
      { value: "+100", label: "قاعدة مؤسسات منفذة" },
      { value: "+80", label: "قاعدة ري محورية" },
      { value: "+15,000 م³", label: "محطات رفع مياه وقنوات" },
    ],
    featured: true,
  },
  {
    id: "commercial-mall",
    name: "مول تجاري متكامل (منطقة مطار شيراتون)",
    subName: "أعمال إنشائية تجارية متكاملة",
    nameEn: "Integrated Commercial Mall",
    client: "شركة كونكورد للمقاولات والهندسة",
    status: "جارٍ التنفيذ",
    statusColor: "blue",
    location: "القاهرة، مصر",
    image: "/images/projects/construction-site.jpg",
    localImage: "/images/projects/construction-site.jpg",
    scope: "تنفيذ مول تجاري متكامل يضم كافة المرافق والخدمات من الهيكل الخرساني والإنشائي حتى التشطيبات الخارجية.",
    metrics: [
      { value: "5,000 م²", label: "المساحة الإجمالية" },
      { value: "G+3", label: "طوابق المبنى" },
      { value: "100%", label: "جودة معايير التنفيذ" },
    ],
    featured: false,
  },
  {
    id: "north-coast",
    name: "مشروع الساحل الشمالي",
    subName: "أعمال إنشائية ومدنية للقرى السياحية",
    nameEn: "North Coast Civil Works",
    client: "السعود جروب (مطور مشاريع الساحل الشمالي)",
    status: "جارٍ التنفيذ",
    statusColor: "blue",
    location: "الساحل الشمالي، مصر",
    image: "/images/projects/pipe-crane.jpg",
    localImage: "/images/projects/pipe-crane.jpg",
    scope: "تنفيذ الهياكل الخرسانية والأعمال الإنشائية والمدنية المتكاملة للمنتجعات والقرى السياحية بمواصفات هندسية دقيقة.",
    metrics: [
      { value: "22,000 م²", label: "إجمالي المساحة" },
      { value: "+180", label: "قاعدة خرسانية مسلحة" },
    ],
    featured: false,
  },
];

export const WHY_US = [
  {
    icon: "bolt",
    title: "سرعة التنفيذ وحل المشكلات",
    desc: "تتميز خدماتنا الميدانية بالسرعة والمرونة للتعامل مع تحديات المواقع وتجنب أي تأخير.",
  },
  {
    icon: "award",
    title: "جودة هندسية موثوقة",
    desc: "نطبق معايير صارمة لضبط الجودة والسلامة في جميع مراحل التنفيذ والمتابعة اليومية.",
  },
  {
    icon: "coins",
    title: "أسعار تنافسية وقيمة مضافة",
    desc: "نقدم حلولاً هندسية فعالة وموفرة للتكاليف دون المساس بجودة المواد أو كفاءة البناء.",
  },
  {
    icon: "calendar",
    title: "التزام صارم بالمواعيد",
    desc: "نلتزم بالجداول الزمنية المحددة ونسلم جميع المشروعات في المواعيد المتفق عليها بدقة تامة.",
  },
  {
    icon: "briefcase",
    title: "خبرة في المشروعات القومية",
    desc: "سجل حافل من المشاركة الفعالة في مشروعات استراتيجية ضخمة بمصر أكسبنا ثقة كبار المقاولين.",
  },
  {
    icon: "wrench",
    title: "مرونة في الحلول الهندسية",
    desc: "نمتلك القدرة على التكيف وتقديم بدائل مبتكرة لمواجهة كافة المعوقات الميدانية بكفاءة.",
  },
];

export const PROCESS = [
  { step: "01", title: "دراسة وتدقيق المشروع", desc: "تحليل كراسة الشروط والمخططات الهندسية وتقييم الموقع ميدانياً." },
  { step: "02", title: "التخطيط والجدولة الزمنية", desc: "إعداد المخطط التنفيذي وتوزيع المهام وتحديد الاحتياجات والمعدات." },
  { step: "03", title: "التنفيذ الميداني المعتمد", desc: "بدء الحفر والصب والأعمال المدنية بأحدث المعدات والأساليب الهندسية." },
  { step: "04", title: "مراقبة الجودة والسلامة", desc: "متابعة دورية من مهندسي الجودة واختبار عينات الخرسانة والشبكات للتأكد من مطابقتها." },
  { step: "05", title: "التسليم والاختبار النهائي", desc: "إجراء اختبارات التشغيل وتسليم المشروع للجهة المالكة مع كامل وثائق الجودة." },
];

export const NAV_LINKS = [
  { href: "#about", label: "من نحن" },
  { href: "#services", label: "خدماتنا" },
  { href: "#projects", label: "سابقة أعمالنا" },
  { href: "#why-us", label: "ميزاتنا" },
  { href: "#quality", label: "الجودة والسلامة" },
  { href: "#contact", label: "تواصل معنا" },
];

export const PARTNERS = [
  {
    name: "شركة كونكورد للمقاولات",
    logo: "/images/concord_logo.png",
    description: "شريك في مشروع مستقبل مصر القومي",
  },
  {
    name: "مجموعة السعود جروب",
    logo: "/images/elsoadaa_logo.png",
    description: "شريك في مشاريع الساحل الشمالي",
  },
];
