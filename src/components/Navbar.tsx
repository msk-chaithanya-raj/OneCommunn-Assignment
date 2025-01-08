import { useState } from "react";

type NavBarExtendedOptions = {
  [key: string]: { id: number; type: string }[];
};

const navBarExtendedOptions: NavBarExtendedOptions = {
  Living: [
    { id: 1, type: "Sofas & Recliners" },
    { id: 2, type: "Coffee Tables" },
    { id: 3, type: "Console Tables" },
    { id: 4, type: "Ottomans" },
    { id: 5, type: "TV Units" },
  ],
  Storage: [
    { id: 1, type: "Bookshelves" },
    { id: 2, type: "Cabinets" },
    { id: 3, type: "Chest of Drawers" },
    { id: 4, type: "Sideboards" },
    { id: 5, type: "Storage Baskets" },
  ],
  Dining: [
    { id: 1, type: "Dining Tables" },
    { id: 2, type: "Dining Chairs" },
    { id: 3, type: "Dining Sets" },
    { id: 4, type: "Sideboards & Buffets" },
    { id: 5, type: "Bar Units" },
  ],
  Bedroom: [
    { id: 1, type: "Beds" },
    { id: 2, type: "Nightstands" },
    { id: 3, type: "Wardrobes" },
    { id: 4, type: "Dressers" },
    { id: 5, type: "Vanity Tables" },
  ],
  Mattress: [
    { id: 1, type: "Foam Mattresses" },
    { id: 2, type: "Spring Mattresses" },
    { id: 3, type: "Hybrid Mattresses" },
    { id: 4, type: "Orthopedic Mattresses" },
    { id: 5, type: "Memory Foam Mattresses" },
  ],
  Study: [
    { id: 1, type: "Study Tables" },
    { id: 2, type: "Study Chairs" },
    { id: 3, type: "Bookshelves" },
    { id: 4, type: "Laptop Tables" },
    { id: 5, type: "Desk Organizers" },
  ],
  Office: [
    { id: 1, type: "Office Chairs" },
    { id: 2, type: "Office Desks" },
    { id: 3, type: "Filing Cabinets" },
    { id: 4, type: "Conference Tables" },
    { id: 5, type: "Workstations" },
  ],
  Outdoor: [
    { id: 1, type: "Patio Chairs" },
    { id: 2, type: "Outdoor Tables" },
    { id: 3, type: "Hammocks" },
    { id: 4, type: "Garden Benches" },
    { id: 5, type: "Umbrellas & Canopies" },
  ],
};

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOptionClick = (option: string): void => {
    setSelectedOption((prevOption) => (prevOption === option ? null : option));
  };

  return (
    <nav className="min-w-full flex items-center justify-between px-4 bg-black text-white mb-6">
      <div>
        <img src="/src/assets/logo.png" alt="logo" className="w-28" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex gap-5 font-bold relative">
        <li>
          <button>Home</button>
        </li>
        {[
          "Living",
          "Storage",
          "Dining",
          "Bedroom",
          "Matress",
          "Study",
          "Office",
          "Outdoor",
        ].map((item) => (
          <li key={item} className="relative">
            <button
              className="gap-2 flex items-center"
              onClick={() => handleOptionClick(item)}
            >
              {item}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.06 5.72656L8 8.7799L4.94 5.72656L4 6.66656L8 10.6666L12 6.66656L11.06 5.72656Z"
                  fill="white"
                />
              </svg>
            </button>

            {selectedOption === item && navBarExtendedOptions[item] && (
              <div className="absolute top-8 left-0 bg-white text-black p-4 rounded shadow-md">
                <ul>
                  {navBarExtendedOptions[item].map((subItem) => (
                    <li key={subItem.id} className="py-1">
                      {subItem.type}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="lg:hidden absolute top-28 left-0 w-full bg-black text-white flex flex-col items-center gap-4 py-4 font-bold z-50">
          <li>
            <button onClick={toggleMenu}>Home</button>
          </li>
          {[
            "Living",
            "Storage",
            "Dining",
            "Bedroom",
            "Matress",
            "Study",
            "Office",
            "Outdoor",
          ].map((item) => (
            <li
              key={item}
              className="relative flex flex-col justify-center items-center"
            >
              <button
                className="gap-2 flex items-center"
                onClick={() => handleOptionClick(item)}
              >
                {item}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.06 5.72656L8 8.7799L4.94 5.72656L4 6.66656L8 10.6666L12 6.66656L11.06 5.72656Z"
                    fill="white"
                  />
                </svg>
              </button>

              {selectedOption === item && navBarExtendedOptions[item] && (
                <div className="mt-2 p-4 rounded shadow-md">
                  <ul className="text-center">
                    {navBarExtendedOptions[item].map((subItem) => (
                      <li key={subItem.id} className="py-1">
                        {subItem.type}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}

      <div className="flex gap-5 justify-between min-w-32 pr-7">
        <button id="search-logo">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.6719 20.7516L18.9984 16.0781C18.7875 15.8672 18.5016 15.75 18.2016 15.75H17.4375C18.7313 14.0953 19.5 12.0141 19.5 9.75C19.5 4.36406 15.1359 0 9.75 0C4.36406 0 0 4.36406 0 9.75C0 15.1359 4.36406 19.5 9.75 19.5C12.0141 19.5 14.0953 18.7313 15.75 17.4375V18.2016C15.75 18.5016 15.8672 18.7875 16.0781 18.9984L20.7516 23.6719C21.1922 24.1125 21.9047 24.1125 22.3406 23.6719L23.6672 22.3453C24.1078 21.9047 24.1078 21.1922 23.6719 20.7516ZM9.75 15.75C6.43594 15.75 3.75 13.0688 3.75 9.75C3.75 6.43594 6.43125 3.75 9.75 3.75C13.0641 3.75 15.75 6.43125 15.75 9.75C15.75 13.0688 13.0688 15.75 9.75 15.75Z"
              fill="white"
            />
          </svg>
        </button>
        <button id="user-logo">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 12C15.3141 12 18 9.31359 18 6C18 2.68641 15.3141 0 12 0C8.68594 0 6 2.68641 6 6C6 9.31359 8.68594 12 12 12ZM14.3766 14.25H9.62344C5.13797 14.25 1.5 17.8875 1.5 22.3734C1.5 23.2706 2.2275 23.9986 3.12469 23.9986H20.8762C21.7734 24 22.5 23.2734 22.5 22.3734C22.5 17.8875 18.8625 14.25 14.3766 14.25Z"
              fill="white"
            />
          </svg>
        </button>

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex flex-col gap-1 focus:outline-none self-center"
        >
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
