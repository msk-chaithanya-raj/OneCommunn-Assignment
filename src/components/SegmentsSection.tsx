interface Segment {
  id: number;
  title: string;
  backgroundImage: string;
}

const segmentsList: Segment[] = [
  {
    id: 1,
    title: "Residential",
    backgroundImage:
      "https://s3-alpha-sig.figma.com/img/9221/7a8d/981b04dc3584d8b880931736d4bad565?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KjljXkmEGduHklQJIERZieNp5NbQJy8j4VWvLoiae1l-vQZ-LCpz2QHterxxxPbXOg1JVQancRrW0bidhsd4YVlbF52OQcaWrwgywwc3x0affpaD5G3ZTYkmx4QxnSXyXGMXlaW5-8FGNQRjMWhWtqah3q5Kj5PrBneBITwtTWEnVY9EjwDXY6mjaY1ueDjB9nCxD13hXAS9Rpo2riIb9vm2wvdzVga7h5AhQLLU6o-iKazU3iVGpjZVN6wkQ1ow7DEX4wAilpll0abAcKqX4uy0n0RXzvyvltSSZGB3FCcmbtAp-1UQ9L~si6zDy2XyMPDl0y-5KbLPjDo4cUypew__",
  },
  {
    id: 2,
    title: "Institutional",
    backgroundImage:
      "https://s3-alpha-sig.figma.com/img/9221/7a8d/981b04dc3584d8b880931736d4bad565?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KjljXkmEGduHklQJIERZieNp5NbQJy8j4VWvLoiae1l-vQZ-LCpz2QHterxxxPbXOg1JVQancRrW0bidhsd4YVlbF52OQcaWrwgywwc3x0affpaD5G3ZTYkmx4QxnSXyXGMXlaW5-8FGNQRjMWhWtqah3q5Kj5PrBneBITwtTWEnVY9EjwDXY6mjaY1ueDjB9nCxD13hXAS9Rpo2riIb9vm2wvdzVga7h5AhQLLU6o-iKazU3iVGpjZVN6wkQ1ow7DEX4wAilpll0abAcKqX4uy0n0RXzvyvltSSZGB3FCcmbtAp-1UQ9L~si6zDy2XyMPDl0y-5KbLPjDo4cUypew__",
  },
  {
    id: 3,
    title: "Commercial",
    backgroundImage:
      "https://s3-alpha-sig.figma.com/img/9221/7a8d/981b04dc3584d8b880931736d4bad565?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KjljXkmEGduHklQJIERZieNp5NbQJy8j4VWvLoiae1l-vQZ-LCpz2QHterxxxPbXOg1JVQancRrW0bidhsd4YVlbF52OQcaWrwgywwc3x0affpaD5G3ZTYkmx4QxnSXyXGMXlaW5-8FGNQRjMWhWtqah3q5Kj5PrBneBITwtTWEnVY9EjwDXY6mjaY1ueDjB9nCxD13hXAS9Rpo2riIb9vm2wvdzVga7h5AhQLLU6o-iKazU3iVGpjZVN6wkQ1ow7DEX4wAilpll0abAcKqX4uy0n0RXzvyvltSSZGB3FCcmbtAp-1UQ9L~si6zDy2XyMPDl0y-5KbLPjDo4cUypew__",
  },
];

const SegmentsSection = () => {
  return (
    <section>
      <div
        id="segments-header"
        className="flex bg-lightgrey mx-10 rounded-md p-3 items-center gap-5 font-bold"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_9_186)">
            <path
              d="M12 2L6.5 11H17.5L12 2ZM17.5 13C16.9091 13 16.3239 13.1164 15.7779 13.3425C15.232 13.5687 14.7359 13.9002 14.318 14.318C13.9002 14.7359 13.5687 15.232 13.3425 15.7779C13.1164 16.3239 13 16.9091 13 17.5C13 18.0909 13.1164 18.6761 13.3425 19.2221C13.5687 19.768 13.9002 20.2641 14.318 20.682C14.7359 21.0998 15.232 21.4313 15.7779 21.6575C16.3239 21.8836 16.9091 22 17.5 22C18.0909 22 18.6761 21.8836 19.2221 21.6575C19.768 21.4313 20.2641 21.0998 20.682 20.682C21.0998 20.2641 21.4313 19.768 21.6575 19.2221C21.8836 18.6761 22 18.0909 22 17.5C22 16.9091 21.8836 16.3239 21.6575 15.7779C21.4313 15.232 21.0998 14.7359 20.682 14.318C20.2641 13.9002 19.768 13.5687 19.2221 13.3425C18.6761 13.1164 18.0909 13 17.5 13ZM3 13.5H11V21.5H3V13.5Z"
              fill="#030303"
            />
          </g>
          <defs>
            <clipPath id="clip0_9_186">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <h1>Segments</h1>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-10 mt-5">
        {segmentsList.map((eachSegment) => (
          <li
            key={eachSegment.id}
            className=" relative bg-cover bg-center rounded-lg shadow-lg overflow-hidden min-h-60 flex flex-col items-center justify-between py-5"
            style={{ backgroundImage: `url(${eachSegment.backgroundImage})` }}
          >
            <h2 className="text-xl font-semibold">{eachSegment.title}</h2>
            <button className="mt-3 bg-[#1B1B1B] px-12 py-2 text-white rounded-md hover:bg-blue-700 transition">
              View More
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SegmentsSection;
