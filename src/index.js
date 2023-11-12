import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.scss';
import './style.scss';
import image1 from './img/1.jpg';
import image2 from './img/2.jpg';
import image4 from './img/4.jpg';
import image5 from './img/5.jpg';
import image7 from './img/7.jpg';
import image8 from './img/8.jpg';

const list = [
	{
		image: image1,
		text: "【表参道駅 A2出口】から地上に出ます。",
	},
	{
		image: image2,
		text: "地上へ上がり、真っ直ぐ進むと右手にApple Storeがあります。その角を右に曲がってください。",
	},
	{
		image: image4,
		text: "約100m先の左手にflying tigerがあります。その角を左に曲がってください。",
	},
	{
		image: image5,
		text: "すぐ左手にAfternoon Teaがあります。そこを右に曲がってください。",
	},
	{
		image: image7,
		text: "約100m先の右手に杉養蜂園があります。その角を右に曲がってください。",
	},
	{
		image: image8,
		text: "左手に「CHARMANT SCENA」という看板が見えます。到着です！！",
	}
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<>
    <div className="map">
      <a href="https://maps.app.goo.gl/4UDZJjF2KyMrZHZM9">
        <span>Google Mapはこちら</span>
      </a>
    </div>
    <div className="wrapper">
      <header>
        <h1><span>笠原家・野崎家</span><br />シャルマンシーナ東京 道案内</h1>
        <img src="https://yuji-kyoko.weddingday.jp/template/v3_nuance_bluegreen/images/message_under_title.svg" width="65" height="20" alt="---" />
      </header>
      <ul>
        {list.map((item, index) =>
          <li key={index}>
            <div><img src={item.image} width="540" alt="道案内" /></div>
            <p>{item.text}</p>
          </li>
        )}
      </ul>
      <div className="thank">
        式場内にはクローク、ベビーケア、<br />
        ゲスト用更衣室・着付室がございますので、<br />
        ぜひご利用ください :)
      </div>
    </div>
  </>
);