function httpGet(url) {
  return new Promise((resolve, reject) => {
    const http = require('http'),
      https = require('https');

    let client = http;

    if (url.toString().indexOf("https") === 0) {
      client = https;
    }

    client.get(url, (resp) => {
      let chunks = [];

      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
        chunks.push(chunk);
      });

      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        resolve(Buffer.concat(chunks));
      });

    }).on("error", (err) => {
      reject(err);
    });
  });
}

var i=0;
while (i < 10) {
  var renew = setInterval(function(){

countrys = [
	"US",
	"ES",
	"FR",
	"AL",
	"DZ",
	"AT",
	"CI",
	"EG",
	"ET",
	"EE",
	"FI",
	"GM",
	"IS",
	"HU",
	"KW",
	"LT",
	"MA",
	"NE"
];

country = Math.floor(Math.random() * countrys.length);

user_agent = [
	"Mozilla%2F5.0%20(iPhone%3B%20CPU%20iPhone%20OS%208_0_2%20like%20Mac%20OS%20X)%20AppleWebKit%2F600.1.4%20(KHTML%2C%20like%20Gecko)%20Version%2F8.0%20Mobile%2F12A366%20Safari%2F600.1.4",
	"Mozilla%2F5.0%20(iPhone%3B%20CPU%20iPhone%20OS%208_0%20like%20Mac%20OS%20X)%20AppleWebKit%2F600.1.4%20(KHTML%2C%20like%20Gecko)%20Version%2F8.0%20Mobile%2F12A366%20Safari%2F600.1.4",
	"Mozilla%2F5.0%20(Linux%3B%20U%3B%20Android%204.2.2%3B%20nl-nl%3B%20GT-I9505%20Build%2FJDQ39)%20AppleWebKit%2F534.30%20(KHTML%2C%20like%20Gecko)%20Version%2F4.0%20Mobile%20Safari%2F534.30'",
	"Mozilla%2F5.0%20(Linux%3B%20U%3B%20Android%204.2.2%3B%20nl-nl%3B%20GT-I9505%20Build%2FJDQ39)%20AppleWebKit%2F534.30%20(KHTML%2C%20like%20Gecko)%20Version%2F4.0%20Mobile%20Safari%2F534.30",
	"Mozilla%2F5.0%20(Linux%3B%20Android%204.3%3B%20GT-I9505%20Build%2FJSS15J)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F32.0.1700.99%20Mobile%20Safari%2F537.36",
	"Mozilla%2F5.0%20(Linux%3B%20Android%204.3%3B%20GT-I9500%20Build%2FJSS15J)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F32.0.1700.99%20Mobile%20Safari%2F537.36",
	"Mozilla%2F5.0%20(Linux%3B%20Android%205.1.1%3B%20SM-G925F%20Build%2FLMY47X)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F47.0.2526.83%20Mobile%20Safari%2F537.36",
	"Mozilla%2F5.0%20(Linux%3B%20Android%205.1.1%3B%20SM-G925F%20Build%2FLMY47X)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F45.0.2454.94%20Mobile%20Safari%2F537.36",
	"Mozilla%2F5.0%20(Windows%20NT%2010.0%3B%20Win64%3B%20x64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F55.0.2883.87%20Safari%2F537.36",
	"Mozilla%2F5.0%20(Windows%20NT%206.1%3B%20WOW64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F55.0.2883.87%20Safari%2F537.36",
	"Mozilla%2F5.0%20(Windows%20NT%2010.0%3B%20WOW64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F55.0.2883.87%20Safari%2F537.36",
	"Mozilla%2F5.0%20(Macintosh%3B%20Intel%20Mac%20OS%20X%2010_12_2)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F55.0.2883.95%20Safari%2F537.36",
	"Mozilla%2F5.0%20(Macintosh%3B%20Intel%20Mac%20OS%20X%2010_12_2)%20AppleWebKit%2F602.3.12%20(KHTML%2C%20like%20Gecko)%20Version%2F10.0.2%20Safari%2F602.3.12",
	"Mozilla%2F5.0%20(Windows%20NT%2010.0%3B%20WOW64%3B%20rv%3A50.0)%20Gecko%2F20100101%20Firefox%2F50.0",
	"Mozilla%2F5.0%20(X11%3B%20Linux%20x86_64)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F55.0.2883.87%20Safari%2F537.36"
];
user_agnt = Math.floor(Math.random() * user_agent.length);


(async(url) => {
  var buf = await httpGet(url);
  
})('https://www.google-analytics.com/r/collect?v=1&_v=j47&a=1642660441&t=pageview&_s=1&dl=/&ul=e&de=UTF-8&dt=title&sd=24-bit&sr=400x100&vp=100&je=0&fl=24.0%20r0&_u=AAgAAMABI~&jid=759653687&cid='+Math.floor(Math.random() * 999999999)+'.'+Math.floor(Math.random() * 999999999)+'&tid=UA-162171075-1&_r=1&z=646999952&geoid='+countrys[country]+'&cm=organic&cs=google&ck=Prayer+Online&cc=content&utt=100&ua='+user_agent[user_agnt]+'');   
},0);

  i++;
}
