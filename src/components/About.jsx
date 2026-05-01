import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">درباره ما</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              در دنیایی که صدا، تصویر و نور تجربه انسان را شکل می‌دهند، تنها تجهیز کردن فضا کافی نیست؛
              درک، طراحی و اجرای هوشمندانه، رمز آفرینش تجربه‌ای ماندگار است.
            </p>
            <p>
              ما در پیشگامان نوین آوش با نام تجاری شباهنگ، از سال ۱۳۹۴ با هدف ارائه راه‌حل‌های خلاقانه
              و دقیق در صنعت AVL (Audio, Video, Lighting) وارد میدان شدیم.
            </p>
            <p>
              در طول این سال‌ها، به‌عنوان مشاور، طراح و مجری تخصصی پروژه‌های صوتی، تصویری و نورپردازی،
              با مجموعه‌ای متنوع از سازمان‌ها، شرکت‌ها، فضاهای عمومی و پروژه‌های خصوصی همکاری کرده‌ایم.
            </p>
            <p>
              در سال ۱۴۰۳، پس از ۱۰ سال تجربه، مسیر تازه‌ای را آغاز کرده‌ایم؛ مسیری با رویکردی نوین
              که بر پایه‌ی یادگیری مداوم، نوآوری فنی و نگاه مهندسی-هنری به طراحی فضا شکل گرفته است.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat">
              <h3>۱۰+</h3>
              <p>سال تجربه</p>
            </div>
            <div className="stat">
              <h3>۵۰۰+</h3>
              <p>پروژه موفق</p>
            </div>
            <div className="stat">
              <h3>۱۰۰%</h3>
              <p>رضایت مشتریان</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
