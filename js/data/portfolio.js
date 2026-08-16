/* ============================================================
   PORTFOLIO DATA
   ------------------------------------------------------------
   To add a new production:
   1. Create a folder in portfolio/<slug>/ and drop in
      one or more photos (01.jpg, 02.jpg, 03.jpg ...).
   2. Add an entry below with matching "folder" and "images".
   New entries render automatically on portfolio.html — no
   other file needs to change.
   ============================================================ */

const PORTFOLIO = [
  {
    num: "01",
    title: "Stupid Fucking Bird",
    date: "Nov 2025",
    director: "J. Han",
    venue: "Studio Theatre, Seoul",
    role: "Stage Manager",
    folder: "portfolio/01-stupid-fucking-bird",
    images: ["01.jpg", "02.jpg", "03.jpg"]
  },
  {
    num: "02",
    title: "The Cherry Orchard",
    date: "May 2025",
    director: "S. Park",
    venue: "Daehakro Arts Centre",
    role: "Assistant Stage Manager",
    folder: "portfolio/02-cherry-orchard",
    images: ["01.jpg", "02.jpg", "03.jpg"]
  },
  {
    num: "03",
    title: "A Midsummer Night’s Dream",
    date: "Aug 2024",
    director: "M. Lee",
    venue: "Open-air Stage, Berkeley",
    role: "Production Assistant",
    folder: "portfolio/03-midsummer-nights-dream",
    images: ["01.jpg", "02.jpg", "03.jpg"]
  }
];
