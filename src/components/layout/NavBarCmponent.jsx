import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export function NavBarComponent() {
  return (
    <Navbar fluid rounded>
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <img
          src="/favicon.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="/Home">Home</NavbarLink>
        <NavbarLink href="#">Style</NavbarLink>
        <NavbarLink href="/Blog">Blog</NavbarLink>
        <NavbarLink href="#">About</NavbarLink>
      </NavbarCollapse>
      <button className="bg-gray-400 pl-4 pr-4 pt-1 pb-1 rounded-lg">
        search
      </button>
    </Navbar>
  );
}
