// Note: having length != 4 will mess with layout based on how the site is styled
const bookmarks = [
  {
    title: "Daily",
    links: [
      { name: "Inbox",    url: "https://inbox.google.com" },
      { name: "Twitter",  url: "https://twitter.com" },
      { name: "Drive",    url: "https://drive.google.com" },
      { name: "GitHub",   url: "https://github.com" },
    ],
  },
  {
    title: "Media",
    links: [
      { name: "Youtube",     url: "https://youtube.com" },
      { name: "Netflix",     url: "https://netflix.com" },
      { name: "Crunchyroll", url: "https://crunchyroll.com" },
      { name: "Twitch",      url: "https://www.twitch.tv",},
    ],
  },
  {
    title: "Reddit",
    links: [
      { name: "/r/askreddit",      url: "https://reddit.com/r/askreddit" },
      { name: "/r/android",        url: "https://reddit.com/r/android",},
      { name: "/r/videos",         url: "https://reddit.com/r/videos" },
      { name: "/r/news",           url: "https://reddit.com/r/news" },
      { name: "/r/battlestations", url: "https://reddit.com/r/battlestations",},
      { name: "/r/unixporn",       url: "https://reddit.com/r/unixporn" },
    ],
  },
  {
    title: "Crypto News",
    links: [
      { name: "CoinMarketCap",     url: "https://coinmarketcap.com" },
      { name: "Crypto Panic",      url: "https://cryptopanic.com/" },
      { name: "CryptoSlate",       url: "https://cryptoslate.com/" },
      { name: "Bitcoin.com",       url: "https://news.bitcoin.com/" },
      { name: "Bitcoin Magazine",  url: "https://bitcoinmagazine.com/" },
      { name: "Bitcoinist",        url: "https://bitcoinist.com/" },
      { name: "Coindesk",          url: "https://www.coindesk.com/" },
      { name: "Forbes",            url: "https://www.forbes.com/crypto-blockchain/" },
      { name: "CoinTelegraph",     url: "https://cointelegraph.com/" },
      { name: "NullTX",            url: "https://nulltx.com/" },
    ],
  },
  {
    title: "Crypto Trading",
    links: [
      { name: "Coinbase Pro",  url: "https://pro.coinbase.com/portfolios" },
      { name: "BlockFi",       url: "https://app.blockfi.com/home" },
      { name: "1inch",         url: "https://1inch.exchange/" },
      { name: "Coinbase",      url: "https://www.coinbase.com/dashboard" },
      { name: "Binance",       url: "https://www.binance.us/en/usercenter/dashboard/overview" },
    ],
  },
];

// Handle writing out Bookmarks
function setupBookmarks() {
  const bookmarkContainer = document.getElementById("bookmark-container");
  bookmarkContainer.innerHTML = bookmarks
    .map((b) => {
      const html = ["<div class='bookmark-set'>"];
      html.push(`<div class="bookmark-title">${b.title}</div>`);
      html.push('<div class="bookmark-inner-container">');
      html.push(
        ...b.links.map(
          (l) =>
            `<a class="bookmark" href="${l.url}" target="_blank">${l.name}</a>`
        )
      );
      html.push("</div></div>");
      return html.join("");
    })
    .join("");
}