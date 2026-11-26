import { menuItems } from './menu.js'

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="23" fill="currentColor" />
        <path d="M12 28c0-8 5-14 12-14s12 6 12 14v4H12z" fill="#fff3d8" />
        <path d="M16 25c4-3 12-3 16 0M18 29c3-2 9-2 12 0" fill="none" stroke="#d88b31" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="21" r="2" fill="#79442c" />
      </svg>
    </span>
  )
}

function Header() {
  return (
    <header className="header">
      <div className="wrap header-inner">
        <a className="brand" href="#top" aria-label="Pani Puri House home">
          <BrandMark />
          <span className="brand-text">
            <span className="brand-name">Pani Puri</span>
            <span className="brand-sub">House of crunch</span>
          </span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#menu">Our menu</a>
          <a href="#story">Our story</a>
          <a className="nav-cta" href="#visit">Come say hello <span aria-hidden="true">↗</span></a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero wrap" id="top">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-dot" /> Fresh shells. Big flavour.</p>
        <h1>A little crunch.<br /><span>A lot of joy.</span></h1>
        <p className="lead">
          Meet your new favourite street snack: crisp puris, punchy pani,
          and all the sweet, spicy, tangy bits in between.
        </p>
        <a className="button" href="#menu">Explore the menu <span aria-hidden="true">↓</span></a>
        <p className="hero-note">Made fresh, filled with love, eaten in one happy bite.</p>
      </div>
      <div className="hero-art" role="img" aria-label="Illustration of crispy pani puri with fresh herbs and chutneys">
        <div className="art-sun" />
        <div className="art-caption">THE<br />HAPPY<br />BITE</div>
        <div className="plate">
          <span className="puri puri-one" />
          <span className="puri puri-two" />
          <span className="puri puri-three" />
          <span className="puri puri-four" />
          <span className="puri puri-five" />
          <span className="puri puri-six" />
          <span className="chutney chutney-one" />
          <span className="chutney chutney-two" />
          <span className="herb herb-one" />
          <span className="herb herb-two" />
        </div>
        <span className="art-sticker">CRUNCH<br />HAPPY!</span>
        <span className="art-sparkle sparkle-one">✳</span>
        <span className="art-sparkle sparkle-two">✦</span>
      </div>
    </section>
  )
}

function Menu() {
  return (
    <section id="menu" className="section menu-section">
      <div className="wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Good things, one puri at a time</p>
            <h2>Pick your happy.</h2>
          </div>
          <p>Every plate comes with crisp puris and our freshly made pani. Choose your favourite kind of zing.</p>
        </div>
        <div className="menu-grid">
          {menuItems.map((item, index) => (
            <article className={`menu-card ${item.color}`} key={item.id}>
              <div className="menu-card-top">
                <span className="menu-number">{String(index + 1).padStart(2, '0')}</span>
                <span className="menu-icon" aria-hidden="true">{item.icon}</span>
              </div>
              <p className="menu-label">{item.label}</p>
              <h3>{item.name}</h3>
              <p className="menu-description">{item.description}</p>
              <div className="menu-card-bottom">
                <span>{item.portion}</span>
                <strong>₹{item.price}</strong>
              </div>
            </article>
          ))}
        </div>
        <p className="menu-footnote">Have a favourite spice level? Just let us know when you order.</p>
      </div>
    </section>
  )
}

function Story() {
  return (
    <section id="story" className="story-section">
      <div className="wrap story-inner">
        <div className="story-stamp" aria-hidden="true">
          <span>MADE FRESH</span>
          <strong>with<br />a little<br />extra love</strong>
          <span>EVERY DAY</span>
        </div>
        <div className="story-copy">
          <p className="eyebrow">A tiny shell with a big heart</p>
          <h2>Street-food magic,<br />served with a smile.</h2>
          <p>
            We believe the best snacks are the ones you share. So we make
            every puri crisp, every pani bright, and every plate a little
            celebration. Come hungry, leave happy.
          </p>
          <a className="text-link" href="#visit">Your next happy bite is waiting <span aria-hidden="true">→</span></a>
        </div>
        <div className="story-doodle" aria-hidden="true">
          <span className="doodle-puri doodle-one" />
          <span className="doodle-puri doodle-two" />
          <span className="doodle-puri doodle-three" />
          <span className="doodle-leaf">✳</span>
        </div>
      </div>
    </section>
  )
}

function Visit() {
  return (
    <section id="visit" className="visit-section">
      <div className="wrap visit-inner">
        <div>
          <p className="eyebrow">Good food. Good mood.</p>
          <h2>Make room<br />for one more?</h2>
        </div>
        <div className="visit-copy">
          <p>Bring your friends, bring your appetite. Your next plate of pani puri is ready when you are.</p>
          <a className="button button-light" href="#menu">Find your favourite <span aria-hidden="true">↗</span></a>
        </div>
        <span className="visit-doodle" aria-hidden="true">☺</span>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <a className="brand footer-brand" href="#top" aria-label="Pani Puri House home">
          <BrandMark />
          <span className="brand-text">
            <span className="brand-name">Pani Puri</span>
            <span className="brand-sub">House of crunch</span>
          </span>
        </a>
        <span>Made for the love of that first bite.</span>
        <a href="#top" className="back-top">Back to top ↑</a>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Menu />
        <Story />
        <Visit />
      </main>
      <Footer />
    </>
  )
}
