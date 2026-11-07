export type Category = "film" | "tv" | "upcoming";

export interface Book {
  id: string;
  title: string;
  author: string;
  adaptation: string;
  adaptationLabel: string; // "Movie" | "Series" | "In Development"
  category: Category;
  /** gradient stops used as a fallback behind the real cover image */
  cover: { from: string; via: string; to: string };
}

/** Real fetched cover image path for a book */
export function bookCover(book: Book): string {
  return `/images/covers/${book.id}.jpg`;
}

/** Production status label for a book card */
export function bookStatus(book: Book): string {
  return book.category === "upcoming" ? "In Development" : "Released";
}

export const CATEGORY_LABELS: Record<Category, string> = {
  film: "Film",
  tv: "TV Series",
  upcoming: "Upcoming",
};

export const FILTERS: { key: Category | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "film", label: "Films" },
  { key: "tv", label: "TV Series" },
  { key: "upcoming", label: "Upcoming" },
];

export const BOOKS: Book[] = [
  // FILMS
  {
    id: "story-of-your-life",
    title: "Story of Your Life",
    author: "Ted Chiang",
    adaptation: "Arrival",
    adaptationLabel: "Movie",
    category: "film",
    cover: { from: "#0b1d26", via: "#123544", to: "#1d4d5e" },
  },
  {
    id: "night-at-the-museum",
    title: "The Night at the Museum",
    author: "Milan Trenc",
    adaptation: "Night at the Museum",
    adaptationLabel: "Movie",
    category: "film",
    cover: { from: "#1a1206", via: "#3a2a10", to: "#5a4420" },
  },
  {
    id: "the-boogeyman",
    title: "The Boogeyman",
    author: "Stephen King",
    adaptation: "The Boogeyman",
    adaptationLabel: "Movie",
    category: "film",
    cover: { from: "#0a0a0f", via: "#1a1020", to: "#2a1a30" },
  },
  {
    id: "the-spectacular-now",
    title: "The Spectacular Now",
    author: "Tim Tharp",
    adaptation: "The Spectacular Now",
    adaptationLabel: "Movie",
    category: "film",
    cover: { from: "#2a1a10", via: "#6b3a1a", to: "#b8702a" },
  },
  {
    id: "the-darkest-minds",
    title: "The Darkest Minds",
    author: "Alexandra Bracken",
    adaptation: "The Darkest Minds",
    adaptationLabel: "Movie",
    category: "film",
    cover: { from: "#1a0a1a", via: "#3a143a", to: "#5a1f5a" },
  },
  {
    id: "cheaper-by-the-dozen",
    title: "Cheaper by the Dozen",
    author: "Frank B. Gilbreth Jr. & Ernestine Gilbreth Carey",
    adaptation: "Cheaper by the Dozen",
    adaptationLabel: "Movie",
    category: "film",
    cover: { from: "#1f2a14", via: "#3a4a20", to: "#5a6a30" },
  },
  {
    id: "when-you-were-mine",
    title: "When You Were Mine",
    author: "Rebecca Serle",
    adaptation: "Rosaline",
    adaptationLabel: "Movie",
    category: "film",
    cover: { from: "#2a1020", via: "#5a1f3a", to: "#8a3050" },
  },
  {
    id: "alexander",
    title: "Alexander and the Terrible, Horrible, No Good, Very Bad Day",
    author: "Judith Viorst",
    adaptation: "Alexander and the Terrible, Horrible, No Good, Very Bad Day",
    adaptationLabel: "Movie",
    category: "film",
    cover: { from: "#2a2010", via: "#5a4520", to: "#8a6a30" },
  },
  {
    id: "this-is-where-i-leave-you",
    title: "This Is Where I Leave You",
    author: "Jonathan Tropper",
    adaptation: "This Is Where I Leave You",
    adaptationLabel: "Movie",
    category: "film",
    cover: { from: "#141a20", via: "#2a3a44", to: "#3a5560" },
  },
  {
    id: "the-adam-project",
    title: "The Adam Project",
    author: "Novelization based on the film script by T.S. Nowlin",
    adaptation: "The Adam Project",
    adaptationLabel: "Movie",
    category: "film",
    cover: { from: "#0a1428", via: "#142844", to: "#1f4060" },
  },
  // TV SERIES
  {
    id: "shadow-and-bone",
    title: "Shadow and Bone",
    author: "Leigh Bardugo",
    adaptation: "Shadow and Bone",
    adaptationLabel: "Series",
    category: "tv",
    cover: { from: "#0a0a14", via: "#1a1a30", to: "#2a2a4a" },
  },
  {
    id: "six-of-crows",
    title: "Six of Crows",
    author: "Leigh Bardugo",
    adaptation: "Shadow and Bone",
    adaptationLabel: "Series",
    category: "tv",
    cover: { from: "#140a0a", via: "#2a1414", to: "#3a1f1f" },
  },
  {
    id: "all-the-light",
    title: "All the Light We Cannot See",
    author: "Anthony Doerr",
    adaptation: "All the Light We Cannot See",
    adaptationLabel: "Series",
    category: "tv",
    cover: { from: "#0a1020", via: "#15203f", to: "#1f3060" },
  },
  {
    id: "the-perfect-couple",
    title: "The Perfect Couple",
    author: "Elin Hilderbrand",
    adaptation: "The Perfect Couple",
    adaptationLabel: "Series",
    category: "tv",
    cover: { from: "#0a1a1a", via: "#144a4a", to: "#1f6060" },
  },
  {
    id: "dash-and-lily",
    title: "Dash & Lily's Book of Dares",
    author: "Rachel Cohn & David Levithan",
    adaptation: "Dash & Lily",
    adaptationLabel: "Series",
    category: "tv",
    cover: { from: "#2a0a1a", via: "#5a1430", to: "#8a2050" },
  },
  {
    id: "ollies-odyssey",
    title: "Ollie's Odyssey",
    author: "William Joyce",
    adaptation: "Lost Ollie",
    adaptationLabel: "Series",
    category: "tv",
    cover: { from: "#1a140a", via: "#3a2a14", to: "#5a4020" },
  },
  // UPCOMING
  {
    id: "never-lie",
    title: "Never Lie",
    author: "Freida McFadden",
    adaptation: "In Development",
    adaptationLabel: "In Development",
    category: "upcoming",
    cover: { from: "#1a1408", via: "#3a2a10", to: "#5a4020" },
  },
  {
    id: "flawless",
    title: "Flawless (Chestnut Springs Series)",
    author: "Elsie Silver",
    adaptation: "In Development",
    adaptationLabel: "In Development",
    category: "upcoming",
    cover: { from: "#2a1410", via: "#5a2820", to: "#8a3a30" },
  },
  {
    id: "the-eyes-and-the-impossible",
    title: "The Eyes & the Impossible",
    author: "Dave Eggers",
    adaptation: "In Development",
    adaptationLabel: "In Development",
    category: "upcoming",
    cover: { from: "#0a1a14", via: "#143a28", to: "#1f5a3a" },
  },
];

export interface Slide {
  image: string;
  quote: string;
  credit: string;
}

export const SLIDES: Slide[] = [
  {
    image: "/images/hero-1.jpg",
    quote:
      "From the page to the screen, every story we tell begins with a book worth believing in.",
    credit: "21 Laps Entertainment",
  },
  {
    image: "/images/hero-2.jpg",
    quote:
      "We turn beloved novels into the films and series audiences can't stop talking about.",
    credit: "21 Laps Entertainment",
  },
  {
    image: "/images/hero-3.jpg",
    quote:
      "Books become worlds. Worlds become cinema. That is the work we are proud to make.",
    credit: "21 Laps Entertainment",
  },
];

export interface Tile {
  title: string;
  image: string;
  href: string;
  blurb: string;
}

export const MIDDLE_TILES: Tile[] = [
  {
    title: "Our Films",
    image: "/images/tile-films.jpg",
    href: "#past-highlights",
    blurb: "Acclaimed book-to-film adaptations",
  },
  {
    title: "Coming Soon",
    image: "/images/tile-coming.jpg",
    href: "#past-highlights",
    blurb: "New adaptations on the horizon",
  },
  {
    title: "Submissions",
    image: "/images/tile-submissions.jpg",
    href: "#contact",
    blurb: "Have a book that belongs on screen?",
  },
];

export const FOOTER_TILES: Tile[] = [
  {
    title: "Studio",
    image: "/images/tile-studio.jpg",
    href: "#about",
    blurb: "Where books become moving pictures",
  },
  {
    title: "Partnerships",
    image: "/images/tile-partnerships.jpg",
    href: "#contact",
    blurb: "Collaborating with storytellers & studios",
  },
  {
    title: "Links",
    image: "/images/tile-links.jpg",
    href: "#links",
    blurb: "Industry resources & friends",
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "21 Laps Entertainment has an uncanny instinct for finding the soul of a book and carrying it intact to the screen.",
    name: "Margaret Ellison",
    title: "Publishing Director",
    company: "Northgate Books",
  },
  {
    quote:
      "From option to premiere, their team treats every author's work with the reverence it deserves. A true book-to-screen home.",
    name: "Daniel Reyes",
    title: "Literary Agent",
    company: "Sterling & Hayes Literary",
  },
  {
    quote:
      "They turned a novel I loved into a series I now watch on repeat. The adaptation was faithful, brave, and beautiful.",
    name: "Priya Nair",
    title: "Executive Producer",
    company: "Lighthouse Studios",
  },
];

export interface Review {
  quote: string;
  source: string;
}

export const REVIEWS: Review[] = [
  {
    quote:
      "21 Laps Entertainment has quietly become the most reliable name in book-to-screen adaptation.",
    source: "The Screen Reader",
  },
  {
    quote:
      "A production house that treats literature with the seriousness Hollywood too often forgets.",
    source: "Cinematic Weekly",
  },
  {
    quote:
      "Few companies bridge publishing and film with this much taste and tenacity.",
    source: "Adaptation Journal",
  },
];

export interface LinkItem {
  title: string;
  url: string;
  description: string;
}

export const LINKS: { group: string; items: LinkItem[] }[] = [
  {
    group: "Industry Partners",
    items: [
      { title: "The Writers Guild", url: "#", description: "Screen credit & standards" },
      { title: "Publishers Marketplace", url: "#", description: "Rights & deal tracking" },
      { title: "Film Independent", url: "#", description: "Independent filmmaking community" },
    ],
  },
  {
    group: "Festivals & Press",
    items: [
      { title: "Toronto International Film Festival", url: "#", description: "Annual premiere showcase" },
      { title: "Sundance Institute", url: "#", description: "Independent storyteller labs" },
      { title: "The Adaptation Review", url: "#", description: "Book-to-screen criticism" },
    ],
  },
  {
    group: "Resources",
    items: [
      { title: "U.S. Copyright Office", url: "#", description: "Rights & registration" },
      { title: "Writers Guild Directory", url: "#", description: "Find credited writers" },
      { title: "Library of Congress", url: "#", description: "Catalog & research" },
    ],
  },
];

export const COMPANY = {
  name: "21 Laps Entertainment",
  tagline: "Book-to-Screen Adaptations for Film & Television",
  address: "6225 Wilshire Boulevard, Suite 200, Los Angeles, CA 90048",
  phone: "+1 (323) 555-0142",
  email: "info@21lapsentertainment.com",
  hours: "Monday – Friday, 9:00 AM – 6:00 PM PT",
};

export const NAV_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Past Highlights", href: "#past-highlights" },
  { label: "Reviews", href: "#reviews" },
  { label: "Links", href: "#links" },
];

export const NAV_CTA = { label: "Contact Us", href: "#contact" };

// ===== Hero section data =====
export interface HeroStat {
  number: string;
  label: string;
}
export const HERO_STATS: HeroStat[] = [
  { number: "50+", label: "Books reviewed" },
  { number: "12", label: "Screen projects" },
  { number: "7 days", label: "First response" },
];

export interface HeroPoster {
  title: string;
  genre: string;
  status: string;
  image: string;
  tint: "red" | "teal" | "gold";
  rotate: number;
}
export const HERO_POSTERS: HeroPoster[] = [
  {
    title: "The Last Harbor",
    genre: "Psychological thriller",
    status: "In development",
    image: "/images/hero-poster-1.jpg",
    tint: "red",
    rotate: -6,
  },
  {
    title: "Salt & Smoke",
    genre: "Coastal noir drama",
    status: "Optioned",
    image: "/images/hero-poster-2.jpg",
    tint: "teal",
    rotate: 4,
  },
  {
    title: "Your Book Here",
    genre: "Your story, our screen",
    status: "Accepting submissions",
    image: "/images/hero-poster-3.jpg",
    tint: "gold",
    rotate: -3,
  },
];

export const TRUST_ITEMS = [
  "Trusted by authors and producers",
  "Film adaptations",
  "Television series",
  "Rights and options",
  "Script development",
];

