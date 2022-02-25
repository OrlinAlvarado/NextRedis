import Link from 'next/link';

export default function Navbar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link href="/">
            <a className="navbar-brand">Home</a>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link href="/posts">
                <a className="nav-link active" aria-current="page">Posts</a>
              </Link>
              <Link href="/users">
                <a className="nav-link">Users</a>
              </Link>
              <Link href="/cars">
                <a className="nav-link" href="#">Redis</a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
}