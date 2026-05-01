import './Vision.css'

function Vision() {
  return (
    <section id="vision" className="vision">
      <div className="container">
        <h2 className="section-title">چشم‌انداز، ماموریت‌ها و شعار</h2>

        <div className="vision-grid">
          <div className="vision-card">
            <h3>چشم‌انداز</h3>
            <p>
              تبدیل شدن به انتخاب نخست در ارائه‌ی راه‌حل‌های جامع و نوآورانه‌ی صدا، تصویر و نورپردازی،
              در پروژه‌های حرفه‌ای و تخصصی.
            </p>
          </div>

          <div className="vision-card">
            <h3>ماموریت‌ها</h3>
            <ul>
              <li>ارائه‌ی راهکارهایی متناسب با نیاز پروژه، با رعایت تعادل بهینه میان قیمت، کیفیت و زمان</li>
              <li>ارائه‌ی خدمات پس از فروش سریع، مؤثر و مسئولانه</li>
              <li>تضمین رضایت کامل و بی‌قید و شرط مشتریان از تمامی مراحل مشاوره، طراحی و اجرا</li>
            </ul>
          </div>

          <div className="vision-card motto">
            <h3>شعار</h3>
            <p className="motto-text">
              صدا و تصویر؛ روایتگر لحظه‌هایی که فراموش نمی‌شوند.
            </p>
          </div>
        </div>

        <div className="principles">
          <h3 className="principles-title">قوانین و اصول</h3>
          <div className="principles-grid">
            <div className="principle">
              <h4>۱. مشتری‌مداری</h4>
              <p>
                ارائه خدمات بی‌نقص به تمامی مشتریان با اولویت ارائه راه‌حل‌های سریع، دقیق، متنوع و با کیفیت
                در حد انتظارات و نیازها با در نظر داشتن اصل مشتری‌مداری.
              </p>
            </div>
            <div className="principle">
              <h4>۲. راه‌حل‌های متمرکز</h4>
              <p>
                تجزیه و تحلیل نیازها و اولویت‌های پروژه جهت ارائه مناسب‌ترین راه‌حل‌ها با رویکرد خدماتی
                با کیفیت، علمی و خاص برای تبدیل شدن به مشاور تجاری و استراتژیک.
              </p>
            </div>
            <div className="principle">
              <h4>۳. منتخبی مطمئن</h4>
              <p>
                آماده پذیرش مسئولیت کامل تصمیمات خود تحت هر شرایطی هستیم چراکه اطمینان اصل اساسی ما
                برای تجارت پایدار است.
              </p>
            </div>
            <div className="principle">
              <h4>۴. پیشرفت مداوم</h4>
              <p>
                سرمایه‌گذاری مداوم در افزایش دانش و کیفیت خدمات و محصولات با استفاده از تکنولوژی روز
                از اصول اولیه ما است.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Vision
