import './Services.css'

function Services() {
  const services = [
    {
      title: 'مشاوره تخصصی',
      description: 'برای تمامی نیازها طبق خواسته‌های کارفرما بهترین راهکار را متناسب با بودجه ارائه خواهیم داد.',
      icon: '💼'
    },
    {
      title: 'طراحی اختصاصی',
      description: 'پروژه‌های صوتی توسط مهندسین ما با نرم‌افزارهای محاسباتی تخصصی به صورت رایگان طراحی می‌شود.',
      icon: '🎨'
    },
    {
      title: 'آموزش حرفه‌ای',
      description: 'آموزش کاربردی سیستم به اپراتورهای غیر متخصص بخشی از تعهد ماست.',
      icon: '📚'
    },
    {
      title: '۲۴ ماه گارانتی',
      description: 'کلیه محصولات دارای ۲۴ ماه گارانتی و ۶۰ ماه خدمات پس از فروش می‌باشند.',
      icon: '🛡️'
    },
    {
      title: 'خدمات در محل',
      description: 'برای رهایی کارفرما از مشکلات بوجود آمده ناشی از ایرادات سخت‌افزاری گارانتی و خدمات در محل ارائه می‌گردد.',
      icon: '🔧'
    },
    {
      title: 'پشتیبانی تلفنی',
      description: 'برای پشتیبانی از مشتریان در حل مشکلات بوجود آمده احتمالی راهنمایی تلفنی توسط متخصصان فنی ارائه می‌گردد.',
      icon: '📞'
    }
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">خدمات شرکت</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
