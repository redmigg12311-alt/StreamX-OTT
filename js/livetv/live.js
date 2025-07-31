document.addEventListener("DOMContentLoaded", () => {
  const channels = [
    {
      id: "aajtak",
      name: "Aaj Tak HD",
      logo: "https://i.imgur.com/RpIdCB3.png",
      category: "News",
      description:
        "India's leading Hindi news channel providing 24/7 breaking news coverage",
      url: "streamxplayer.html?src=https://feeds.intoday.in/aajtak/api/aajtakhd/master.m3u8",
    },
    {
      id: "tv9bharatvarsh",
      name: "TV9 Bharatvarsh",
      logo: "https://i.imgur.com/GEqUslW.png",
      category: "News",
      description:
        "Hindi news channel covering national and international news",
      url: "streamxplayer.html?src=https://dyjmyiv3bp2ez.cloudfront.net/pub-iotv9hinjzgtpe/liveabr/playlist.m3u8",
    },
    {
      id: "tv9gujarati",
      name: "TV9 Gujarati",
      logo: "https://imgur.com/Cvuthal.png",
      category: "News",
      description:
        "Gujarati news channel covering national and international news",
      url: "streamxplayer.html?src=https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/tv9-gujarati/main.m3u8",
    },
    {
      id: "indiatoday",
      name: "India Today",
      logo: "https://i.imgur.com/zLoUGiT.png",
      category: "News",
      description: "English news channel with in-depth reporting and analysis",
      url: "streamxplayer.html?src=https://indiatodaylive.akamaized.net/hls/live/2014320/indiatoday/indiatodaylive/playlist.m3u8",
    },
    {
      id: "indiatv",
      name: "India TV",
      logo: "https://jiotvimages.cdn.jio.com/dare_images/images/India_TV.png",
      category: "News",
      description: "Popular Hindi news channel known for its debate shows",
      url: "streamxplayer.html?src=https://pl-indiatvnews.akamaized.net/out/v1/db79179b608641ceaa5a4d0dd0dca8da/index.m3u8",
    },
    {
      id: "znews",
      name: "ZNews",
      logo: "https://english.cdn.zeenews.com/static/public/updated_logos/english.svg",
      category: "News",
      description: "English news channel from the Zee Media network",
      url: "streamxplayer.html?src=https://dxfxzhqtgt09i.cloudfront.net/index.m3u8",
    },
    {
      id: "abpnews",
      name: "ABP News",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/ABP_News_logo.svg/300px-ABP_News_logo.svg.png",
      category: "News",
      description: "Major Hindi news channel with nationwide coverage",
      url: "streamxplayer.html?src=https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/abp-news/master.m3u8",
    },
    {
      id: "ndtvindia",
      name: "NDTV India",
      logo: "https://cdn.pnggallery.com/wp-content/uploads/ndtv-india-logo-02.png",
      category: "News",
      description: "Credible Hindi news channel with expert opinions",
      url: "streamxplayer.html?src=https://ndtvindiaelemarchana.akamaized.net/hls/live/2003679/ndtvindia/master.m3u8",
    },
    {
      id: "cnnnews18",
      name: "CNN News 18",
      logo: "https://i.imgur.com/WrmeIco.png",
      category: "News",
      description: "Indian partner of CNN International for English news",
      url: "streamxplayer.html?src=https://n18syndication.akamaized.net/bpk-tv/CNN_News18_NW18_MOB/output01/index.m3u8",
    },
    {
      id: "wion",
      name: "WION",
      logo: "https://www.wionews.com/_next/static/media/wion-logo_white.d670dbc6.svg",
      category: "News",
      description: "World Is One News - Global Indian perspective",
      url: "streamxplayer.html?src=https://d2f067kuhcp3tj.cloudfront.net/index.m3u8",
    },
    {
      id: "ndtv24x7",
      name: "NDTV 24x7",
      logo: "https://i.ibb.co/845X7fY1/ndtv-24x7-in.png",
      category: "News",
      description: "Premier English news channel from NDTV network",
      url: "streamxplayer.html?src=https://ndtv24x7elemarchana.akamaized.net/hls/live/2003678/ndtv24x7/master.m3u8",
    },
    {
      id: "bbcworld",
      name: "BBC World News",
      logo: "https://i.imgur.com/vSz2WEp.png",
      category: "News",
      description:
        "International news from the British Broadcasting Corporation",
      url: "streamxplayer.html?src=https://cdn4.skygo.mn/live/disk1/BBC_News/HLSv3-FTA/BBC_News.m3u8",
    },
    {
      id: "euronews",
      name: "Euro News",
      logo: "https://i.imgur.com/8t9mdg9.png",
      category: "News",
      description: "Pan-European news in English covering global events",
      url: "streamxplayer.html?src=https://apollo.production-public.tubi.io/live/ac-euronews2.m3u8",
    },
    {
      id: "dd-india",
      name: "DD India",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/DD_India_logo.jpg",
      category: "News",
      description: "Government of India’s international broadcasting channel",
      url: "streamxplayer.html?src=https://cdn-7.pishow.tv/live/20/master.m3u8",
    },

    // Music
    {
      id: "9xm",
      name: "9XM",
      logo: "https://jiotvimages.cdn.jio.com/dare_images/images/9XM.png",
      category: "Music",
      description:
        "Indian Hindi music television channel owned by 9X Media, specializing in Bollywood music videos",
      url: "streamxplayer.html?src=https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/9xm/master.m3u8",
    },
    {
      id: "shemaroofilmi-gaane",
      name: "Shemaroo Filmi Gaane",
      logo: "https://jiotvimages.cdn.jio.com/dare_images/images/shemaroofilmigaane.png",
      category: "Music",
      description: "Bollywood music and entertainment",
      url: "streamxplayer.html?src=https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/shemaroo-filmigaane/master.m3u8",
    },
    {
      id: "zoom",
      name: "Zoom",
      logo: "https://jiotvimages.cdn.jio.com/dare_images/images/Zoom.png",
      category: "Music",
      description: "Leading Hindi muic channel",
      url: "streamxplayer.html?src=https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/zoom-tv/master.m3u8",
    },
    {
      id: "b4u-music",
      name: "B4U Music",
      logo: "https://i.imgur.com/KSxPLJA.png",
      category: "Music",
      description: "Bollywood music and entertainment",
      url: "streamxplayer.html?src=https://cdnb4u.wiseplayout.com/B4U_Music/master.m3u8",
    },
    {
      id: "music-india",
      name: "Music India",
      logo: "https://static.wikia.nocookie.net/logopedia/images/2/2f/Music_India.jpeg",
      category: "Music",
      description: "Bollywood music videos, countdowns and entertainment",
      url: "streamxplayer.html?src=https://cdn-2.pishow.tv/live/226/master.m3u8",
    },

    // Movie
    {
      id: "shemaroobollywood",
      name: "Shemaroo Bollywood",
      logo: "https://i.ibb.co/wrdbcfZn/shemaroobollywood.png",
      category: "Movie",
      description: "Bollywood movies and entertainment",
      url: "streamxplayer.html?src=https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/shemaroo-bollywood/master.m3u8",
    },
    {
      id: "b4u-movies",
      name: "B4U Movies",
      logo: "https://jiotv.catchup.cdn.jio.com/dare_images/images/B4U_Movies.png",
      category: "Movie",
      description: "Bollywood music and entertainment",
      url: "streamxplayer.html?src=https://cdnb4u.wiseplayout.com/B4U_Movies/master.m3u8",
    },
    {
      id: "goldmines-movies",
      name: "Goldmines Movies",
      logo: "https://yt3.googleusercontent.com/d66J-MMZ06-55gkF5maclPGB5f5j1L0SAs3iWnl3lhoswlWrJ67wD2a3mZGkgHgt-W3kMrIT=s160-c-k-c0x00ffffff-no-rj",
      category: "Movie",
      description:
        "Popular Hindi movies, especially dubbed South Indian blockbusters",
      url: "streamxplayer.html?src=https://cdn-2.pishow.tv/live/1461/master.m3u8",
    },
    {
      id: "goldmines-2",
      name: "Goldmines 2",
      logo: "https://5.imimg.com/data5/SELLER/Default/2024/7/433249328/BI/AC/EM/184162459/goldmines-telefilms-advertisements-services.png",
      category: "Movie",
      description: "More blockbuster Hindi and dubbed South Indian movies",
      url: "streamxplayer.html?src=https://cdn-2.pishow.tv/live/1460/master.m3u8",
    },
    {
      id: "bollywood-hd",
      name: "Bollywood HD",
      logo: "https://static.wikia.nocookie.net/logopedia/images/d/d5/Bollywood_HD_%282018%29.svg",
      category: "Movie",
      description: "HD Bollywood films and entertainment",
      url: "streamxplayer.html?src=https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/bollywood-hd/manifest.m3u8",
    },
    {
      id: "bollywood-classic-hd",
      name: "Bollywood Classic HD",
      logo: "https://static.wikia.nocookie.net/logopedia/images/0/0d/Bollywood_Clasic_2024.svg",
      category: "Movie",
      description: "Classic Bollywood films in high definition",
      url: "streamxplayer.html?src=https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/bollywood-classic/manifest.m3u8",
    },

    // Entertainment
    {
      id: "koreantv",
      name: "Korean TV",
      logo: "https://i.ibb.co/4ZczvFb7/Chat-GPT-Image-Apr-14-2025-03-25-19-PM-150x150.png",
      category: "Entertainment",
      description: "Popular korean serials, movies and reality shows",
      url: "streamxplayer.html?src=https://amg02537-skandhamediaser-koreantv-samsungin-ad-1s.amagi.tv/playlist/amg02537-skandhamediaser-koreantv-samsungin/playlist.m3u8",
    },
    {
      id: "e24",
      name: "E24",
      logo: "https://upload.wikimedia.org/wikipedia/en/1/17/E24-TV-Channel.jpg",
      category: "Entertainment",
      description:
        "Bollywood gossip, music, movie previews, and celebrity updates",
      url: "streamxplayer.html?src=https://bagnetwork.digivive.com/hlslive/Admin/px09241091/live/E24LiveB/master_1.m3u8",
    },

    // Kids
    {
      id: "babysharktv",
      name: "Baby Shark TV",
      logo: "https://provider-static.plex.tv/epg/cms/production/f8f7c285-f574-4037-84cd-131a22066e57/Channel_Logo_dark_1500x1000_.png",
      category: "Kids",
      description:
        "Fun and educational songs and videos featuring Baby Shark and friends for young children.",
      url: "streamxplayer.html?src=https://newidco-babysharktv-1-eu.rakuten.wurl.tv/playlist.m3u8",
    },
    {
      id: "cartoonnetwork",
      name: "Cartoon Network",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/80/Cartoon_Network_2010_logo.svg",
      category: "Kids",
      description:
        "Popular animated shows and cartoons for kids and teens, featuring characters like Ben 10 and Gumball.",
      url: "streamxplayer.html?src=https://tvsen5.aynaott.com/cartoonnetwork/index.m3u8",
    },

    // Documentary
    {
      id: "natgeo",
      name: "National Geographic",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Natgeologo.svg",
      category: "Documentary",
      description:
        "Exploring science, nature, history, and culture through award-winning documentaries and series.",
      url: "streamxplayer.html?src=https://fl5.moveonjoy.com/National_Geographic/index.m3u8",
    },

    // Education
    {
      id: "ted",
      name: "TED",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/aa/TED_three_letter_logo.svg",
      category: "Education",
      description:
        "Inspiring talks and ideas on technology, entertainment, design, and more",
      url: "streamxplayer.html?src=https://d35j504z0x2vu2.cloudfront.net/v1/master/0bc8e8376bd8417a1b6761138aa41c26c7309312/ted/master.m3u8",
    },

    {
      id: "sonyten5",
      name: "Sony Ten 5 HD",
      logo: "https://www.sonypicturesnetworks.com/images/logos/SONY_SportsTen5_HD_Logo_CLR.png",
      category: "Sports",
      description: "Live sports coverage on Sony Network",
      url: "streamxplayerdrm.html?play=https://sundirectgo-live.pc.cdn.bitgravity.com/hd38/dth.mpd&keyid=5e833f4019554aa394ff6de2eb19bf78:f60e08a145804890492f315b61789ac5&channel=Sony%20Ten%205%20HD&logo=https://www.sonypicturesnetworks.com/images/logos/SONY_SportsTen5_HD_Logo_CLR.png",
    },

    {
      id: "tsn2",
      name: "TSN2",
      logo: "https://www.tsn.ca/content/dam/sports/images/logos/tsn-streams/tsn2-dark.svg",
      category: "Sports",
      description: "Live sports coverage on TSN2",
      url: "streamxplayerdrm.html?play=https://ottb.live.cf.ww.aiv-cdn.net/lhr-nitro/live/clients/dash/enc/v5v9yfn62i/out/v1/0991e33d09da46b2857fcc845db95c40/cenc.mpd&keyid=362202eefc5d9e42eec6450998cce9e8:978dfdd53186ec587d940e0bd1e2ec42&channel=TSN%202&logo=https://www.tsn.ca/content/dam/sports/images/logos/tsn-streams/tsn2-dark.svg",
    },
  ];

  const container = document.getElementById("livetv-sections");

  // Group channels by category
  const grouped = channels.reduce((acc, channel) => {
    const key = channel.category;
    if (!acc[key]) acc[key] = [];
    acc[key].push(channel);
    return acc;
  }, {});

  // Render sections
  for (const [category, chList] of Object.entries(grouped)) {
    const section = document.createElement("section");
    section.classList.add("livetv-container");

    const heading = document.createElement("h2");
    heading.className = "section-title";
    heading.textContent = category;
    section.appendChild(heading);

    const grid = document.createElement("div");
    grid.className = "card-grid";

    chList.forEach((channel) => {
      const card = document.createElement("div");
      card.className = "tv-card";
      card.innerHTML = `
        <div class="tv-thumbnail">
          <img src="${channel.logo}" alt="${channel.name}" loading="lazy">
        </div>
        <div class="tv-overlay">
          <p class="tv-title">${channel.name}</p>
          <span class="tv-category">Live • ${channel.category}</span>
        </div>
        <div class="channel-hover-info">
          <h4>WATCH NOW</h4>
          <p>${channel.description}</p>
        </div>
      `;
      card.onclick = () => {
        window.open(channel.url, "_blank", "noopener,noreferrer");
      };
      grid.appendChild(card);
    });

    section.appendChild(grid);
    container.appendChild(section);
  }
});
