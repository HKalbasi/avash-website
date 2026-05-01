import { Link } from 'react-router-dom'
import './Projects.css'

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">پروژه‌ها</h2>
        <div className="projects-preview">
          <p className="projects-intro">
            ما افتخار همکاری با سازمان‌ها و شرکت‌های معتبری را داشته‌ایم.
            از مراکز خرید و برج‌ها تا شرکت‌های بزرگ و پروژه‌های مسکونی،
            در تمامی زمینه‌های صوتی، تصویری و نورپردازی پروژه‌های موفقی را اجرا کرده‌ایم.
          </p>
          <div className="projects-stats">
            <div className="stat-item">
              <h3>۳۰+</h3>
              <p>پروژه موفق</p>
            </div>
            <div className="stat-item">
              <h3>۶+</h3>
              <p>دسته‌بندی پروژه</p>
            </div>
            <div className="stat-item">
              <h3>۱۰+</h3>
              <p>سال تجربه</p>
            </div>
          </div>
          <div className="projects-cta">
            <Link to="/projects" className="btn-view-all">مشاهده تمام پروژه‌ها</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
