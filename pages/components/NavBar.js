import Link from 'next/link';

const NavBar = () => {
  return (
    <div className={`nav`}>
      <navbar className={`nav-bar`}>
        <Link href='/'>
          <a>
            <div className={`nav-bar-if-logo`}>
              <svg
                width='45'
                height='62'
                viewBox='0 0 45 62'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect
                  x='15.7836'
                  width='13.4328'
                  height='13.4328'
                  fill='#88D066'
                />
                <rect
                  x='31.5672'
                  y='32.2388'
                  width='13.4328'
                  height='13.4328'
                  fill='#88D066'
                />
                <rect
                  x='31.5672'
                  width='13.4328'
                  height='13.4328'
                  fill='#88D066'
                />
                <rect
                  x='15.7836'
                  y='48.3582'
                  width='13.4328'
                  height='13.4328'
                  fill='#88D066'
                />
                <rect
                  x='15.7836'
                  y='32.2388'
                  width='13.4328'
                  height='13.4328'
                  fill='#88D066'
                />
                <rect
                  x='15.7836'
                  y='16.1194'
                  width='13.4328'
                  height='13.4328'
                  fill='#88D066'
                />
                <rect
                  y='48.3582'
                  width='13.4328'
                  height='13.4328'
                  fill='#88D066'
                />
                <rect
                  y='32.2388'
                  width='13.4328'
                  height='13.4328'
                  fill='#88D066'
                />
                <rect
                  y='16.1194'
                  width='13.4328'
                  height='13.4328'
                  fill='#88D066'
                />
                <circle cx='6.71642' cy='6.71642' r='6.71642' fill='#E65555' />
              </svg>
            </div>

            <h2 className={`nav-bar-title`}>Concepções da Educação</h2>
          </a>
        </Link>
      </navbar>
    </div>
  );
};

export default NavBar;
