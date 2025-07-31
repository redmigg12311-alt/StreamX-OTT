// js/series/seriesdata.js

const seriesData = [
  {
    id: 1,
    title: "Snowfall",
    genre: "Fantasy · Romance · Drama",
    description: "A mysterious vampire and a courageous doctor cross paths during wartime, igniting an epic tale of forbidden love and destiny.",
    thumbnail: "images/series/snowfall-thumb.jpg",
    banner: "images/series/snowfall-banner.jpg",
    seasons: [
      {
        name: "Season 1",
        episodes: [
          { title: "Episode 1", src: "videos/snowfall/ep1.mp4" },
          { title: "Episode 2", src: "videos/snowfall/ep2.mp4" }
        ]
      },
      {
        name: "Season 2",
        episodes: [
          { title: "Episode 1", src: "videos/snowfall/s2-ep1.mp4" },
          { title: "Episode 2", src: "videos/snowfall/s2-ep2.mp4" }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Midnight Heist",
    genre: "Action · Thriller",
    description: "An elite team of thieves plots the perfect museum heist — but their loyalties are tested when secrets unravel.",
    thumbnail: "images/series/midnight-thumb.jpg",
    banner: "images/series/midnight-banner.jpg",
    seasons: [
      {
        name: "Season 1",
        episodes: [
          { title: "Pilot", src: "videos/midnight/ep1.mp4" },
          { title: "The Setup", src: "videos/midnight/ep2.mp4" }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Eternal Horizon",
    genre: "Sci-Fi · Adventure",
    description: "In a future ruled by AI, one rebel pilot dares to change humanity’s fate by unlocking secrets of a forgotten world.",
    thumbnail: "images/series/horizon-thumb.jpg",
    banner: "images/series/horizon-banner.jpg",
    seasons: [
      {
        name: "Season 1",
        episodes: [
          { title: "Genesis", src: "videos/horizon/ep1.mp4" },
          { title: "Legacy", src: "videos/horizon/ep2.mp4" }
        ]
      }
    ]
  }
];
