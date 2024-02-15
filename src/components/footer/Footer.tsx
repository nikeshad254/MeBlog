function Footer() {
  return (
    <footer className=" w-full text-center p-2 bg-black text-white mt-auto">
      <p>&copy; MeBlog, {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
