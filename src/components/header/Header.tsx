import { useSelector } from "react-redux";
import { Container, LogoutBtn } from "..";
import { RootState } from "../../store/store";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state: RootState) => state.auth.status);

  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];
  return (
    <header className="py-3 shadow bg-gray-50">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <h1 className="text-2xl font-bold">MeBlog</h1>
            </Link>
          </div>
        </nav>
      </Container>

      <ul className="flex ml-auto">
        {navItems.map((item) =>
          item.active ? (
            <li key={item.name}>
              <button
                onClick={() => navigate(item.slug)}
                className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
              >
                {item.name}
              </button>
            </li>
          ) : null
        )}
        {authStatus && (
          <li>
            <LogoutBtn />
          </li>
        )}
      </ul>
    </header>
  );
}

export default Header;
