/* eslint-disable no-unused-vars */
import { Film, Loader, Search } from 'lucide-react';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  const links = [
    {
      id: 1,
      href: '/',
      title: 'Home',
      icon: Film,
    },
    {
      id: 2,
      href: '/movie',
      title: 'Movie',
      icon: Search,
    },
  ];
  return (
    <>
      <header className="sticky top-0 z-50  backdrop-blur-sm border-b  px-10 py-4 mb-5 flex items-center justify-between">
        <NavLink
          to="/"
          className="flex items-center space-x-2 text-xl font-bold hero-gradient bg-clip-text "
        >
          <Film className="h-6 w-6 text-primary" />
          <span>CinemaSearch</span>
          {/* 🎬 */}
        </NavLink>

        <nav className="flex space-x-6">
          {links.map(({ href, title, icon: Icon }) => (
            <NavLink
              key={href}
              to={href}
              className="flex items-center space-x-2 px-4 py-2 rounded-md transition-colors hover:bg-secondary/50 hover:text-primary"
            >
              <Icon className="h-4 w-4" />
              <span>{title}</span>
            </NavLink>
          ))}
        </nav>
      </header>
      <Suspense
        fallback={<Loader className="absolute size-14 top-1/2 left-1/2" />}
      >
        <main className=" mx-auto px-10">
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};
