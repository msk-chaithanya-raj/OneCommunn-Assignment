import { Link } from "react-router-dom";

export default function Footer() {
  const categories = [
    ["Home", "Living", "Storage", "Dining", "Bedroom", "Mattress"],
    [
      "Study",
      "Office",
      "Outdoor",
      "Residential",
      "Institutional",
      "Commercial",
    ],
  ];

  return (
    <footer className="bg-black text-white py-12 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[2fr,1fr,1fr] gap-8 mb-8">
          <div>
            <img
              src="/assets/logo.png"
              alt="Company Logo"
              width={120}
              height={60}
              className="mb-4"
            />
            <p className="text-gray-400 text-sm max-w-md">
              Your dream space deserves the best execution, and that's where
              United BuildPro Pvt Ltd excels. Our construction services
              encompass everything from foundational work to structural builds,
              tailored to residential, commercial, and industrial needs.
            </p>
            <div className="flex gap-4 mt-4">
              <Link to="#" className="text-white hover:text-gray-300">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.0063 8.81245C12.0313 8.81245 8.82505 12.0187 8.82505 15.9937C8.82505 19.9687 12.0313 23.1749 16.0063 23.1749C19.9813 23.1749 23.1875 19.9687 23.1875 15.9937C23.1875 12.0187 19.9813 8.81245 16.0063 8.81245ZM16.0063 20.6625C13.4375 20.6625 11.3375 18.5687 11.3375 15.9937C11.3375 13.4187 13.4313 11.325 16.0063 11.325C18.5813 11.325 20.675 13.4187 20.675 15.9937C20.675 18.5687 18.575 20.6625 16.0063 20.6625ZM25.1563 8.5187C25.1563 9.44995 24.4063 10.1937 23.4813 10.1937C22.5501 10.1937 21.8063 9.4437 21.8063 8.5187C21.8063 7.5937 22.5563 6.8437 23.4813 6.8437C24.4063 6.8437 25.1563 7.5937 25.1563 8.5187ZM29.9125 10.2187C29.8063 7.97495 29.2938 5.98745 27.65 4.34995C26.0125 2.71245 24.025 2.19995 21.7813 2.08745C19.4688 1.9562 12.5375 1.9562 10.225 2.08745C7.98755 2.1937 6.00005 2.7062 4.3563 4.3437C2.71255 5.9812 2.2063 7.9687 2.0938 10.2125C1.96255 12.525 1.96255 19.4562 2.0938 21.7687C2.20005 24.0124 2.71255 26 4.3563 27.6375C6.00005 29.275 7.9813 29.7875 10.225 29.9C12.5375 30.0312 19.4688 30.0312 21.7813 29.9C24.025 29.7937 26.0125 29.2812 27.65 27.6375C29.2875 26 29.8001 24.0124 29.9125 21.7687C30.0438 19.4562 30.0438 12.5312 29.9125 10.2187ZM26.925 24.25C26.4375 25.475 25.4938 26.4187 24.2626 26.9125C22.4188 27.6437 18.0438 27.475 16.0063 27.475C13.9688 27.475 9.58755 27.6375 7.75005 26.9125C6.52505 26.425 5.5813 25.4812 5.08755 24.25C4.3563 22.4062 4.52505 18.0312 4.52505 15.9937C4.52505 13.9562 4.36255 9.57495 5.08755 7.73745C5.57505 6.51245 6.5188 5.5687 7.75005 5.07495C9.5938 4.3437 13.9688 4.51245 16.0063 4.51245C18.0438 4.51245 22.4251 4.34995 24.2626 5.07495C25.4876 5.56245 26.4313 6.5062 26.925 7.73745C27.6563 9.5812 27.4875 13.9562 27.4875 15.9937C27.4875 18.0312 27.6563 22.4125 26.925 24.25Z"
                    fill="white"
                  />
                </svg>
              </Link>
              <Link to="#" className="text-white hover:text-gray-300">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M28 2H3.99375C2.89375 2 2 2.90625 2 4.01875V27.9813C2 29.0938 2.89375 30 3.99375 30H28C29.1 30 30 29.0938 30 27.9813V4.01875C30 2.90625 29.1 2 28 2ZM10.4625 26H6.3125V12.6375H10.4688V26H10.4625ZM8.3875 10.8125C7.05625 10.8125 5.98125 9.73125 5.98125 8.40625C5.98125 7.08125 7.05625 6 8.3875 6C9.7125 6 10.7937 7.08125 10.7937 8.40625C10.7937 9.7375 9.71875 10.8125 8.3875 10.8125ZM26.0187 26H21.8687V19.5C21.8687 17.95 21.8375 15.9563 19.7125 15.9563C17.55 15.9563 17.2188 17.6438 17.2188 19.3875V26H13.0688V12.6375H17.05V14.4625H17.1062C17.6625 13.4125 19.0188 12.3062 21.0375 12.3062C25.2375 12.3062 26.0187 15.075 26.0187 18.675V26Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {categories.map((column, idx) => (
            <div key={idx} className="space-y-2">
              {column.map((item) => (
                <Link
                  key={item}
                  to="#"
                  className="block text-gray-400 hover:text-white"
                >
                  {item}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center gap-4">
            <p className="text-sm text-gray-400">
              2024 © All rights reserved - Cozy Comfort
            </p>
            <div className="flex gap-2">
              <img
                src="https://s3-alpha-sig.figma.com/img/3ab9/eeb0/e196ede389387ab9e06d10d71ce9b10e?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LNTwUY4uSrRu2N7zb5JVUSxrebvHcRD16NWb6iCg~nP9UvpRlYMSof~ZUorH0ehgJFPOFR9wmDxuzdDoq-ez5fgNVVg4XdLzitmu5T~HKn1SS20Ox~ST5gis5Kp60DTVNn8OO8VgeNhOR3X0xIrGn8LXHEwdp~OFMluGXPRJMWsEeoU5PBpG93z45rOKcIaB4Lhk5CJA7Dw6BpLnPJL~VXfAzanIznxxRYq3EP1wi3JXo1i4oeKlBufOjH5IgKmaTu2PpmamU-KzrR91OaddMfoylzO8dibDAWYwRGh7p38g~QQx5H4w~EYAF5lKEmoP76bsyG7w0xMBCmtBRnmHcQ__"
                alt="payments"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
