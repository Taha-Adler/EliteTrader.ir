// tradingViewCarousel.js

document.addEventListener("DOMContentLoaded", function() {
  let chart1 = new TradingView.widget({
    container_id: "tv_chart1",
    width: "100%",
    height: "500px",
    symbol: "BINANCE:BTCUSDT",
    interval: "30",
    timezone: "Etc/UTC",
    theme: "dark",
    style: "1",
    locale: "en",
    toolbar_bg: "#f1f3f6",
    enable_publishing: false,
    hide_legend: true
  });

  let chart2 = null;
  let chart3 = null;

  const carouselElement = document.getElementById('mainCarousel');

  const logoMap = {
    0: "images/btc-logo.png",
    1: "images/eth-logo.png",
    2: "images/xau-logo.png",
  };

  const logoImg = document.querySelector("#cryptoLogo img");

  carouselElement.addEventListener('slide.bs.carousel', function(event) {
    if (event.to === 1 && !chart2) {
      chart2 = new TradingView.widget({
        container_id: "tv_chart2",
        width: "100%",
        height: "500px",
        symbol: "BINANCE:ETHUSDT",
        interval: "30",
        timezone: "Etc/UTC",
        theme: "dark",
        style: "1",
        locale: "en",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        hide_legend: true
      });
    }
    if (event.to === 2 && !chart3) {
      chart3 = new TradingView.widget({
        container_id: "tv_chart3",
        width: "100%",
        height: "500px",
        symbol: "FOREXCOM:XAUUSD",
        interval: "30",
        timezone: "Etc/UTC",
        theme: "dark",
        style: "1",
        locale: "en",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        hide_legend: true
      });
    }

    const logoSrc = logoMap[event.to];
    if (logoSrc) {
      logoImg.src = logoSrc;
    }
  });
});
