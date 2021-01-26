function currentTime() {
  var date = new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  document.querySelector(".clock").innerHTML = hour + ":" + min + ":" + sec;
  var t = setTimeout(function () {
    currentTime();
  }, 1000);
}

function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  } else {
    return k;
  }
}

currentTime();

//store the quotations in arrays
randbackgrounds = new Array(5);
randbackgrounds[0] = `<style>body{background:url(tumblr_0c141596ee67032d4e8ec627ec8bcaa3_c20e9462_500.gif);background-size:cover}</style>`;
randbackgrounds[1] = `<style>body{background:url(tumblr_lollinapolina_mibqywp5Xo1s5t1i4o1_thanksforthis.gif);background-size:cover}</style>`;
randbackgrounds[2] = `<style>body{background:url(tumblr_mt6ckbr7nY1rl1c0bo1_500.gif);background-size:cover}</style>`;
randbackgrounds[3] = `<style>body{background:url(tumblr_mxt1z3M4zj1rl1c0bo1_500.gif);background-size:cover}</style>`;
randbackgrounds[4] = `<style>body{background:url(tumblr_oeor4w91fG1vx777ao1_500.gif);background-size:cover}</style>`;
//randbackgrounds[5] = ``;
//randbackgrounds[6] = ``;
//calculate a random index
index = Math.floor(Math.random() * randbackgrounds.length);
//display the quotation
document.querySelector(".stylescontainer").innerHTML = `\n`;
document.querySelector(".stylescontainer").innerHTML = randbackgrounds[index];
//done

//store the quotations in arrays
quotes = new Array(4);
quotes[0] = `<img width="50px" src="kitty-fish.svg"><h4>Did you knew?</h4><p>Fish is the best meal (what kitties calls as "meaw")! Eating fishes gives you increased health (except when you gulp spines). But because of polution, you should prefer fishes raised on pools/farms.</p>`;
quotes[1] = `<img width="50px" src="space-cat.svg"><h4>A true SpaceCat</h4><p>Soon, Internet Cat will support more networks, give you more ways of monetization, block ads and (really) protect your privacy. Plasmozill Firefloflis already have part of it ❤</p>`;
quotes[2] = `<img width="50px" src="adopted.svg"><h4>Adopt a pet</h4><p>Your overall health will improve a lot! A dog will keep you lovely and energized, and your cat's purr is relaxing and will make you mindful (or mindfurr). But focus on polyalergenic animals if you have respiratory problems, even more on these difficult times of COVID-19.</p><br/><a href="https://ipfs.io/ipfs/QmW7oUoWwtZPSgG9zFfdxEEquNNt2wB2Y5rTnJ86jTVhA7/"><button><img width="64px" src="adopt-pet-now.svg"/><br/><span style="font-size:32px">Adopt a pet now!</span></button></a>`;
quotes[3] = `<img width="50px" src="kitty-sleep.svg"><h4>Sleep is power</h4><p>Sleep isn't just ok; it is a need. Also, sleep isnt't just a power nap; sleep is power. If they calls you a bum for sleeping, don't worry. People like Albert Einstein loved to take a extra sleep ;)</p><p><small>And for sure, the persons who laughes at you are way farther from Einstein than you, literally.</small></p>`;
//quotes[4] = ``;
//quotes[5] = ``;
//calculate a random index
index = Math.floor(Math.random() * quotes.length);
//display the quotation
document.querySelector(".randomfooter").innerHTML = `\n`;
document.querySelector(".randomfooter").innerHTML = quotes[index];
//done

browser.topSites.get()
  .then((sites) => {
    var divtopsites = document.getElementById('site-list');

    if (!sites.length) {
      divtopsites.innerText = 'No sites returned from the topSites API.';
      return;
    }

    let ul = document.createElement('ul');
    ul.className = 'list-group';
    for (let site of sites) {
      let li = document.createElement('li');
      li.className = 'list-group-item';
      let a = document.createElement('a');
      a.href = site.url;
      a.title = site.url;
      a.innerText = topSite.favicon;
      a.innerText = topSite.icon;
      a.innerText = site.favicon;
      a.innerText = site.icon;
      a.innerText = site.title || site.url;
      li.appendChild(a);
      ul.appendChild(li);
    }

    divtopsites.appendChild(ul);
  });
  
var gettingTopSites = browser.topSites.get({
  newtab: true,
  includeFavicon: true,
  limit: 8
});
