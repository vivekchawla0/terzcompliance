import { useEffect, useState, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, ChevronRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileSearchQuery, setMobileSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const collapseTimeout = useRef<ReturnType<typeof setTimeout>>();
  const location = useLocation();
  const navigate = useNavigate();

  const services: { name: string; hash?: string; path?: string }[] = [
    { name: "Medical Devices", hash: "medical-devices" },
    { name: "NPPA Registration", path: "/services/nppa-registration-medical-devices" },
    { name: "In-Vitro Diagnostics", hash: "ivd" },
    { name: "Cosmetics", hash: "cosmetics" },
    { name: "Legal Metrology", hash: "lmpc" },
    { name: "Import Export Code", hash: "iec" },
    { name: "EPR", hash: "epr" },
    { name: "Wholesale License", hash: "wholesale-license" },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isServicesActive = location.pathname.startsWith("/services");

  const handleServiceClick = (service: { name: string; hash?: string; path?: string }) => {
    setServicesOpen(false);
    setIsOpen(false);
    if (service.path) {
      navigate(service.path);
    } else if (service.hash) {
      navigate(`/services#${service.hash}`);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchExpanded(false);
      setSearchQuery("");
    }
  };

  const handleMobileSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mobileSearchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(mobileSearchQuery.trim())}`);
      setIsOpen(false);
      setMobileSearchQuery("");
    }
  };

  const handleSearchMouseEnter = () => {
    if (collapseTimeout.current) clearTimeout(collapseTimeout.current);
    setSearchExpanded(true);
  };

  const handleSearchMouseLeave = () => {
    collapseTimeout.current = setTimeout(() => {
      if (document.activeElement !== searchInputRef.current) {
        setSearchExpanded(false);
      }
    }, 400);
  };

  const handleSearchBlur = () => {
    collapseTimeout.current = setTimeout(() => {
      setSearchExpanded(false);
    }, 300);
  };

  useEffect(() => {
    if (searchExpanded && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchExpanded]);

  useEffect(() => {
    if (!isOpen) {
      setServicesOpen(false);
    }
  }, [isOpen]);

  return (
    <nav className="sticky top-0 z-[100]">
      <div className="relative border-b border-border/60 bg-card/95 backdrop-blur-sm shadow-surface">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-primary/5 via-primary/20 to-primary/5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/">
              <img src={logo} alt="Terz Compliance" className="h-10 sm:h-12" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
              <NavItem to="/" label="Home" isActive={isActive("/")} />

              {/* Services Dropdown */}
              <div
                className="group relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <div className="flex items-center">
                  <Link
                    to="/services"
                    onClick={() => setServicesOpen(false)}
                    className={cn(
                      "relative rounded-l-full px-4 py-2 text-sm font-semibold transition-all duration-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                      isServicesActive ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    <span className="absolute inset-0 rounded-l-full bg-gradient-to-r from-primary/10 via-primary/0 to-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    Services
                  </Link>
                  <button
                    onClick={() => setServicesOpen((prev) => !prev)}
                    className={cn(
                      "relative rounded-r-full px-2 py-2 text-sm transition-all duration-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
                      servicesOpen || isServicesActive ? "text-primary" : "text-muted-foreground"
                    )}
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                  >
                    <span className="absolute inset-0 rounded-r-full bg-gradient-to-r from-primary/10 via-primary/0 to-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-300",
                        servicesOpen ? "rotate-180" : ""
                      )}
                    />
                  </button>
                </div>
                {servicesOpen && (
                  <div className="absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3">
                    <div className="rounded-2xl border border-border/60 bg-card p-2 shadow-lg ring-1 ring-primary/5 animate-in fade-in zoom-in-95">
                      {services.map((service) => (
                        <button
                          key={service.name}
                          onClick={() => handleServiceClick(service)}
                          className={cn(
                            "group/link relative block w-full text-left overflow-hidden rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 hover:translate-x-1 hover:text-primary",
                            (service.path && location.pathname === service.path) ||
                              (location.pathname === "/services" && location.hash === `#${service.hash}`)
                              ? "text-primary font-semibold"
                              : "text-muted-foreground"
                          )}
                        >
                          <span className="absolute inset-0 translate-y-full bg-gradient-to-r from-primary/8 via-primary/3 to-primary/8 opacity-0 transition-all duration-300 group-hover/link:translate-y-0 group-hover/link:opacity-100" />
                          {service.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <NavItem to="/resources" label="Resources" isActive={isActive("/resources")} />
              <NavItem to="/about" label="About" isActive={isActive("/about")} />

              {/* Expandable Search */}
              <div
                ref={searchContainerRef}
                className="relative flex items-center"
                onMouseEnter={handleSearchMouseEnter}
                onMouseLeave={handleSearchMouseLeave}
              >
                <form onSubmit={handleSearchSubmit} className="flex items-center">
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300 ease-in-out",
                      searchExpanded ? "w-[200px] opacity-100 mr-1" : "w-0 opacity-0"
                    )}
                  >
                    <input
                      ref={searchInputRef}
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onBlur={handleSearchBlur}
                      placeholder="Search..."
                      className="w-full h-9 rounded-full border border-border/60 bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  <button
                    type={searchExpanded ? "submit" : "button"}
                    onClick={() => !searchExpanded && setSearchExpanded(true)}
                    className="flex items-center justify-center h-10 w-10 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                    aria-label="Search"
                  >
                    <Search className="h-[22px] w-[22px]" />
                  </button>
                </form>
              </div>

              <Button
                asChild
                className="group relative overflow-hidden rounded-full bg-primary px-6 text-sm font-semibold shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-primary-hover"
              >
                <Link to="/contact">
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-60 transition-transform duration-700 group-hover:translate-x-full" />
                  <span className="relative z-10">Contact Us</span>
                </Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-border/60 bg-card text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md lg:hidden"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="animate-in slide-in-from-top-4 py-6 lg:hidden">
              <div className="flex flex-col space-y-4 rounded-3xl border border-border/60 bg-card p-6 shadow-lg">
                {/* Mobile Search */}
                <form onSubmit={handleMobileSearchSubmit} className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    value={mobileSearchQuery}
                    onChange={(e) => setMobileSearchQuery(e.target.value)}
                    placeholder="Search..."
                    className="w-full h-11 rounded-full border border-border/60 bg-background pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </form>

                <Link
                  to="/"
                  className={`text-base font-semibold transition-all duration-300 ${
                    isActive("/")
                      ? "text-primary"
                      : "text-muted-foreground hover:translate-x-1 hover:text-primary"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>

                {/* Mobile Services - Split layout */}
                <div>
                  <div className="flex items-center justify-between rounded-2xl px-4 py-3 transition-colors duration-300">
                    <Link
                      to="/services"
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-base font-semibold transition-colors duration-300",
                        isServicesActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                      )}
                    >
                      Services
                    </Link>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className={cn(
                        "p-2 rounded-lg transition-all duration-300 hover:bg-primary/10",
                        servicesOpen ? "text-primary" : "text-muted-foreground"
                      )}
                      aria-expanded={servicesOpen}
                      aria-label="Toggle services menu"
                    >
                      <ChevronRight
                        className={cn(
                          "h-4 w-4 transition-transform duration-300",
                          servicesOpen && "rotate-90"
                        )}
                      />
                    </button>
                  </div>
                  {servicesOpen && (
                    <div className="mt-3 ml-2 space-y-2 border-l border-primary/30 pl-4">
                      {services.map((service) => (
                        <button
                          key={service.name}
                          onClick={() => handleServiceClick(service)}
                          className={cn(
                            "block w-full text-left text-sm font-medium transition-all duration-300 hover:translate-x-1 hover:text-primary",
                            (service.path && location.pathname === service.path) ||
                              (location.pathname === "/services" && location.hash === `#${service.hash}`)
                              ? "text-primary font-semibold"
                              : "text-muted-foreground"
                          )}
                        >
                          {service.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <LinkListItem
                  to="/resources"
                  label="Resources"
                  isActive={isActive("/resources")}
                  onClick={() => setIsOpen(false)}
                />
                <LinkListItem
                  to="/about"
                  label="About"
                  isActive={isActive("/about")}
                  onClick={() => setIsOpen(false)}
                />
                <Button
                  asChild
                  className="group relative w-full overflow-hidden rounded-full bg-primary py-3 text-base font-semibold shadow-lg transition-all duration-300 hover:scale-[1.01] hover:bg-primary-hover"
                >
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-white/0 via-white/30 to-white/0 opacity-60 transition-transform duration-700 group-hover:translate-x-full" />
                    <span className="relative z-10">Contact Us</span>
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

type NavItemProps = {
  to: string;
  label: string;
  isActive: boolean;
};

const NavItem = ({ to, label, isActive }: NavItemProps) => (
  <Link
    to={to}
    className={`group relative overflow-hidden rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
      isActive
        ? "text-primary"
        : "text-muted-foreground hover:text-primary hover:shadow-md"
    }`}
  >
    <span
      className={`absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-primary/8 via-primary/3 to-primary/8 transition-all duration-300 ${
        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
      }`}
    />
    <span className="relative z-10 flex items-center gap-2">
      {label}
      <span
        className={`h-1 w-1 rounded-full bg-primary transition-all duration-300 ${
          isActive ? "scale-100 opacity-100" : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"
        }`}
      />
    </span>
    <span className="absolute bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary/0 via-primary to-primary/0 transition-all duration-300 group-hover:w-3/4" />
  </Link>
);

type LinkListItemProps = NavItemProps & { onClick: () => void };

const LinkListItem = ({ to, label, isActive, onClick }: LinkListItemProps) => (
  <Link
    to={to}
    onClick={onClick}
    className={`text-base font-semibold transition-all duration-300 ${
      isActive
        ? "text-primary"
        : "text-muted-foreground hover:translate-x-1 hover:text-primary"
    }`}
  >
    {label}
  </Link>
);

export default Navbar;
