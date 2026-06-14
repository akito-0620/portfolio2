import { Outlet, Link } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <nav className="site-nav">
        <div className="site-nav__inner">
          <Link to="/" className="site-nav__brand">Portfolio</Link>
        </div>
      </nav>
      <Outlet />
      <footer className="site-footer">
        © 大津陽翔. 無断転載を禁じます。
      </footer>
    </>
  )
}
