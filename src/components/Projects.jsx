import './Projects.css'

function Projects() {
  const projectCategories = [
    {
      title: 'مراکز خرید و تجاری',
      projects: [
        'مرکز خرید سانا',
        'مرکز خرید همیلا',
        'مرکز خرید بندر عباس مال',
        'مرکز خرید مدرن',
        'فروشگاه بامبینو',
        'فروشگاه زیالن',
        'فروشگاه بزرگ نومان',
        'فروشگاه جابزی',
        'فروشگاه فیورال',
        'نمایشگاه فرش سهند'
      ]
    },
    {
      title: 'شرکت‌ها و کارخانجات',
      projects: [
        'شرکت پاکشوما',
        'کارخانه بزرگ دیپونت',
        'شرکت پوبر',
        'دفتر نوید زر شیمی',
        'شرکت آتیه صبا',
        'شرکت فیورال',
        'شرکت ملونی',
        'شوروم لباس علوی'
      ]
    },
    {
      title: 'برج‌ها و مجتمع‌ها',
      projects: [
        'مجتمع برج میلاد',
        'برج سپند',
        'برج اکسیژن'
      ]
    },
    {
      title: 'فضاهای مسکونی و ویلایی',
      projects: [
        'پروژه ویلایی صوت هوشمند',
        'صوت هوشمند مسکونی'
      ]
    },
    {
      title: 'رستوران‌ها و کافه‌ها',
      projects: [
        'رستوران هسبرگر',
        'کافه سکند شاپ',
        'کافه کوب',
        'بالسا چوب'
      ]
    },
    {
      title: 'پروژه‌های دولتی و اداری',
      projects: [
        'دفتر اداری خیابان خرمشهر',
        'مرکز کنترل ترافیک اتوبان نیایش',
        'سالن کنفرانس شرکت آتیه صبا'
      ]
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">پروژه‌ها</h2>
        <div className="projects-content">
          {projectCategories.map((category, index) => (
            <div key={index} className="project-category">
              <h3>{category.title}</h3>
              <ul>
                {category.projects.map((project, idx) => (
                  <li key={idx}>{project}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
