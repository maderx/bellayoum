/* ============================================================
   ARCHIVE DATA
   ------------------------------------------------------------
   ARCHIVE_DOORS   — the three tiles on archive.html
   GALLERIES       — one gallery grid per door key

   To add new photos to a gallery:
   1. Drop image files into archive/<key>/ (e.g. pottery).
   2. Add an entry to GALLERIES[key].items below with the file
      name, a caption, and a size class:
        s2x2  s2x3  s3x3  s4x3  s1x3   (grid-column x grid-row span)
   To leave a spot open for later, use { slot: true, size: "s2x2" }
   instead of src/caption — it renders as a quiet "EMPTY" panel.
   ============================================================ */

const ARCHIVE_DOORS = [
  {
    key: "pottery",
    title: "Pottery",
    meta: "24 pieces · 2022—",
    cover: "archive/doors/pottery.jpg"
  },
  {
    key: "photography",
    title: "Photography",
    meta: "86 frames · 2021—",
    cover: "archive/doors/photography.jpg"
  },
  {
    key: "boxing",
    title: "Boxing",
    meta: "Ten years · 2015—",
    cover: "archive/doors/boxing.jpg"
  }
];

const GALLERIES = {
  photography: {
    label: "Archive / 02",
    title: "Photography",
    subtitle: "86 frames · 2021—2026",
    folder: "archive/photography",
    items: [
      { src: "01.jpg", caption: "2025 · Seoul",     size: "s3x3" },
      { src: "02.jpg", caption: "2024 · Rolleiflex", size: "s2x3" },
      { slot: true,    size: "s1x3" },
      { src: "03.jpg", caption: "2023 · Polaroid",  size: "s2x2" },
      { slot: true,    size: "s2x2" },
      { src: "04.jpg", caption: "2022 · Shelf",     size: "s2x2" },
      { src: "05.jpg", caption: "2025 · Backstage", size: "s4x3" },
      { src: "06.jpg", caption: "2023 · Gym",       size: "s2x3" }
    ]
  },
  pottery: {
    label: "Archive / 01",
    title: "Pottery",
    subtitle: "24 pieces · 2022—2026",
    folder: "archive/pottery",
    items: [
      { slot: true, size: "s2x2" },
      { slot: true, size: "s2x2" },
      { slot: true, size: "s2x2" },
      { slot: true, size: "s2x2" },
      { slot: true, size: "s2x2" },
      { slot: true, size: "s2x2" }
    ]
  },
  boxing: {
    label: "Archive / 03",
    title: "Boxing",
    subtitle: "Ten years · 2015—2026",
    folder: "archive/boxing",
    items: [
      { slot: true, size: "s2x2" },
      { slot: true, size: "s2x2" },
      { slot: true, size: "s2x2" },
      { slot: true, size: "s2x2" },
      { slot: true, size: "s2x2" },
      { slot: true, size: "s2x2" }
    ]
  }
};
