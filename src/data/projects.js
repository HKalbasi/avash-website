const projects = [
  {
    id: 'sana-mall',
    title: 'مرکز خرید سانا',
    category: 'مراکز خرید و تجاری',
    description: 'طراحی و اجرای سیستم‌های صوتی و تصویری مرکز خرید سانا با رویکرد ایجاد تجربه‌ای متفاوت برای مراجعه‌کنندگان.',
    images: ['/images/projects/img-000.jpg', '/images/projects/img-001.jpg'],
    client: 'مرکز خرید سانا',
    year: '۱۴۰۳'
  },
  {
    id: 'pakshoma',
    title: 'شرکت پاکشوما',
    category: 'شرکت‌ها و کارخانجات',
    description: 'مشاوره و طراحی سیستم‌های صوتی و تصویری برای شرکت پاکشوما.',
    images: ['/images/projects/img-003.jpg', '/images/projects/img-004.jpg'],
    client: 'شرکت پاکشوما',
    year: '۱۴۰۲'
  },
  {
    id: 'hamila-mall',
    title: 'مرکز خرید همیلا',
    category: 'مراکز خرید و تجاری',
    description: 'اجرای پروژه صوتی و تصویری مرکز خرید همیلا با استانداردهای روز دنیا.',
    images: ['/images/projects/img-005.jpg'],
    client: 'مرکز خرید همیلا',
    year: '۱۴۰۳'
  },
  {
    id: 'milad-tower',
    title: 'مجتمع برج میلاد',
    category: 'برج‌ها و مجتمع‌ها',
    description: 'سیستم‌های صوتی و تصویری مجتمع برج میلاد با رویکرد هوشمندسازی.',
    images: ['/images/projects/img-008.jpg', '/images/projects/img-009.jpg'],
    client: 'مجتمع برج میلاد',
    year: '۱۴۰۲'
  },
  {
    id: 'bambino-store',
    title: 'فروشگاه بامبینو',
    category: 'مراکز خرید و تجاری',
    description: 'سیستم‌های صوتی و تصویری فروشگاه بامبینو با طراحی خاص.',
    images: ['/images/projects/img-055.jpg'],
    client: 'فروشگاه بامبینو',
    year: '۱۴۰۳'
  },
  {
    id: 'hasburger',
    title: 'رستوران هسبرگر',
    category: 'رستوران‌ها و کافه‌ها',
    description: 'طراحی سیستم صوتی رستوران هسبرگر برای ایجاد اتمسفر مناسب.',
    images: ['/images/projects/img-057.jpg'],
    client: 'رستوران هسبرگر',
    year: '۱۴۰۲'
  },
  {
    id: 'zilan-store',
    title: 'فروشگاه زیالن',
    category: 'مراکز خرید و تجاری',
    description: 'اجرای پروژه صوتی و تصویری فروشگاه زیالن.',
    images: ['/images/projects/img-058.jpg'],
    client: 'فروشگاه زیالن',
    year: '۱۴۰۳'
  },
  {
    id: 'noman-store',
    title: 'فروشگاه بزرگ نومان',
    category: 'مراکز خرید و تجاری',
    description: 'سیستم‌های صوتی و تصویری فروشگاه بزرگ نومان.',
    images: ['/images/projects/img-060.jpg'],
    client: 'فروشگاه نومان',
    year: '۱۴۰۳'
  },
  {
    id: 'sepand-tower',
    title: 'برج سپند',
    category: 'برج‌ها و مجتمع‌ها',
    description: 'سیستم‌های صوتی هوشمند برج سپند.',
    images: ['/images/projects/img-073.jpg'],
    client: 'برج سپند',
    year: '۱۴۰۳'
  },
  {
    id: 'oxygen-tower',
    title: 'برج اکسیژن',
    category: 'برج‌ها و مجتمع‌ها',
    description: 'طراحی و اجرای سیستم‌های AVL برج اکسیژن.',
    images: ['/images/projects/img-074.jpg'],
    client: 'برج اکسیژن',
    year: '۱۴۰۳'
  },
  {
    id: 'villa-audio',
    title: 'پروژه ویلایی صوت هوشمند',
    category: 'فضاهای مسکونی و ویلایی',
    description: 'اجرای سیستم صوتی هوشمند در پروژه ویلایی.',
    images: ['/images/projects/img-075.jpg'],
    client: 'پروژه ویلایی',
    year: '۱۴۰۳'
  },
  {
    id: 'residential-audio',
    title: 'صوت هوشمند مسکونی',
    category: 'فضاهای مسکونی و ویلایی',
    description: 'سیستم صوتی هوشمند برای فضاهای مسکونی.',
    images: ['/images/projects/img-076.jpg'],
    client: 'پروژه مسکونی',
    year: '۱۴۰۳'
  },
  {
    id: 'poobar-showroom',
    title: 'شوروم و سالن کنفرانس شرکت پوبر',
    category: 'شرکت‌ها و کارخانجات',
    description: 'طراحی شوروم و سالن کنفرانس شرکت پوبر با سیستم‌های پیشرفته صوتی و تصویری.',
    images: ['/images/projects/img-077.jpg'],
    client: 'شرکت پوبر',
    year: '۱۴۰۳'
  },
  {
    id: 'alavi-clothing',
    title: 'شوروم لباس علوی',
    category: 'شرکت‌ها و کارخانجات',
    description: 'سیستم‌های نورپردازی و صوتی شوروم لباس علوی.',
    images: ['/images/projects/img-078.jpg'],
    client: 'شوروم علوی',
    year: '۱۴۰۲'
  },
  {
    id: 'niayesh-traffic',
    title: 'مرکز کنترل ترافیک اتوبان نیایش',
    category: 'پروژه‌های دولتی و اداری',
    description: 'سیستم‌های تصویری و کنترلی مرکز ترافیک اتوبان نیایش.',
    images: ['/images/projects/img-082.jpg'],
    client: 'مرکز کنترل ترافیک',
    year: '۱۴۰۱'
  },
  {
    id: 'ateyeh-saba',
    title: 'سالن کنفرانس شرکت آتیه صبا',
    category: 'شرکت‌ها و کارخانجات',
    description: 'طراحی سالن کنفرانس شرکت آتیه صبا با سیستم‌های پیشرفته.',
    images: ['/images/projects/img-083.jpg'],
    client: 'شرکت آتیه صبا',
    year: '۱۴۰۲'
  },
  {
    id: 'fioral-showroom',
    title: 'شوروم شرکت فیورال',
    category: 'شرکت‌ها و کارخانجات',
    description: 'سیستم‌های صوتی و تصویری شوروم شرکت فیورال.',
    images: ['/images/projects/img-084.jpg'],
    client: 'شرکت فیورال',
    year: '۱۴۰۳'
  }
]

export default projects
