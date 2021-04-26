// discord.js モジュールのインポート
const Discord = require('discord.js');

// Discord Clientのインスタンス作成
const client = new Discord.Client();

// トークンの用意
const token = 'NzM0NzYzNTg4MTExMTcxNjI0.XxXuyA.vgOACa3Hyezb28LTrPFcjOEisFA';

// 準備完了イベントのconsole.logで通知黒い画面に出る。
client.on('ready', () => {
    console.log('ready...');
});


// 後でここに追記します。

// メッセージがあったら何かをする
client.on('message', message => {
  // メッセージの文字列による条件分岐
  if (message.content === '武器占い') {

    let random1 = Math.ceil(Math.random()*20);
    let random2 = Math.ceil(Math.random()*20);
    let main_weapon = '***';
    let sub_weapon = '***';

    main_weapon = weapon_deal(random1, main_weapon);
    sub_weapon = weapon_deal(random2, sub_weapon);

    let channel = message.channel;
    let author = message.author.username;
    let reply_text = `${author}の今回使う武器は${main_weapon}と${sub_weapon}です！！\n頑張ってネ！！`;
      // そのチェンネルにメッセージを送信する
    message.reply(reply_text)
      .then(message => console.log(`Sent message: ${reply_text}`))
      .catch(console.error);
    return;
  }

  if (message.content === 'キャラ占い') {
    
    let random3 = Math.ceil(Math.random()*13);
    let random4 = Math.ceil(Math.random()*2);

    let [my_character, my_comment]= character_deal(random3, random4);

    let channel = message.channel;
    let author = message.author.username;
    let reply_text = `${author}の今回使うキャラは${my_character}です！！\n「${my_comment}」`;
      // そのチェンネルにメッセージを送信する
    message.reply(reply_text)
      .then(message => console.log(`Sent message: ${reply_text}`))
      .catch(console.error);
    return;
  }

  if (message.content === 'hi') {

    let channel = message.channel;
    let author = message.author.username;
    let reply_text = `Hi!\t${author}！\n誰か来ないか${author}が待機中！！`;
      // そのチェンネルにメッセージを送信する
    message.reply(reply_text)
      .then(message => console.log(`Sent message: ${reply_text}`))
      .catch(console.error);
    return;
  }

  if(message.content === 'パーティ占い'){

    let[charactor1, charactor2, charactor3] = team_deal();

    let channel = message.channel;
    let author = message.author.username;
    let reply_text = `今回のチームは${charactor1}, ${charactor2}, ${charactor3}です！！`;
      // そのチェンネルにメッセージを送信する
    message.reply(reply_text)
      .then(message => console.log(`Sent message: ${reply_text}`))
      .catch(console.error);
    return;

  }

  if (message.content === 'デュエル！') {
    
    let random5 = Math.ceil(Math.random()*2);

    let junban = '***';

    if(random5 == 1){
      junban = '先攻';
    }else{
      junban = '後攻';
    }

    let channel = message.channel;
    let author = message.author.username;
    let reply_text = `${author}は${junban}です！！\n`;
      // そのチェンネルにメッセージを送信する
    message.reply(reply_text)
      .then(message => console.log(`Sent message: ${reply_text}`))
      .catch(console.error);
    return;

  }


  if (message.content === '抜け') {

	let NUKE　= '***';

	let randomout = Math.ceil(Math.random()*3);
	
	if(randomout == 1){
		NUKE = 'オレンジ';
	}else if(randomout == 2){
		NUKE = '緑';
	}else{
		NUKE = '水色';
	}
		
	let channel = message.channel;
	let author = message.author.username;
	let reply_text = `抜けるのはは${randomout}です！！\n`;
	// そのチェンネルにメッセージを送信する
	message.reply(reply_text)
	.then(message => console.log(`Sent message: ${reply_text}`))
	.catch(console.error);
	return;		

  }

});

// Discordへの接続
client.login(token);

function weapon_deal(random, weapon){
  switch(random){
    case 1:
      weapon = 'ウィングマン';
      break;
    case 2:
      weapon = 'マスティフ';
      break;
    case 3:
      weapon = 'R99';
      break;
    case 4:
      weapon = 'プラウラー';
      break;
    case 5:
      weapon = 'P2020';
      break;
    case 6:
      weapon = 'フラットライン';
      break;
    case 7:
      weapon = 'EVA8';
      break;
    case 8:
      weapon = 'ハボック';
      break;
    case 9:
      weapon = 'R301';
      break;
    case 10:
      weapon = 'ロングボウ';
      break;
    case 11:
      weapon = 'ヘムロック';
      break;
    case 12:
      weapon = 'トリプルテイク';
      break;
    case 13:
      weapon = 'チャージライフル';
      break;
    case 14:
      weapon = 'G7スカウト';
      break;
    case 15:
      weapon = 'スピットファイア';
      break;
    case 16:
      weapon = 'オルタネーター';
      break;
    case 17:
      weapon = 'Lスター';
      break;
    case 18:
      weapon = 'センチネル';
      break;
    case 19:
      weapon = 'RE45';
      break;
    case 20:
      weapon = 'モザンビーク';
      break;
  }
  return weapon;
}

function character_deal(randomA, randomB){

  return chara_table(randomA, randomB, 0);

}

function team_deal(){

  let r1 = Math.ceil(Math.random()*13);
  let r2 = 0;
  let r3 = 0;
  let tmp = 0;

  while(tmp == 0){
    r2 = Math.ceil(Math.random()*13);
    if(r2 === r1){
      
    }else{
      tmp = 1;
    }
  }

  tmp = 0;

  while(tmp == 0){
    r3 = Math.ceil(Math.random()*13);
    if(r3 === r1 || r3 === r2){
      
    }else{
      tmp = 1;
    }
  }

  let rA = Math.ceil(Math.random()*2);

  let chara1 = chara_table(r1, rA, 1);
  rA = Math.ceil(Math.random()*2);
  let chara2 = chara_table(r2, rA, 1);
  rA = Math.ceil(Math.random()*2);
  let chara3 = chara_table(r3, rA, 1);

  return [chara1, chara2, chara3];

}

function　chara_table(randomA, randomB, flag){

  let character = '***';
  let comment = '***';

  switch(randomA){
    case 1:
      character = 'ブラッドハウンド';
      if(randomB == 1){
        comment = '我が名はブロスフゥンダル！';
      }else{
        comment = '私は血に欲する者！';
      }
      break;

    case 2:
      character = 'ジブラルタル';
      if(randomB == 1){
        comment = 'よお,ブラザー！';
      }else{
        comment = 'ドームシールド展開！';
      }
      break;

    case 3:
      character = 'ライフライン';
      if(randomB == 1){
        comment = '誕生日プレゼントよ！';
      }else{
        comment = 'ドスケベマシーンザリチャージ！';
      }
      break;

    case 4:
      character = 'パスファインダー';
      if(randomB == 1){
          comment = '君を殺すことになるかもしれない,パスファインダーだ.';
      }else{
        comment = 'お兄ちゃんって呼んでいい？';
      }
      break;

    case 5:
      character = 'レイス';
      if(randomB == 1){
        comment = '虚空を行きましょう.';
      }else{
        comment = 'あなた誰かに狙われてるわよ.';
      }
      break;

    case 6:
      character = 'バンガロール';
      if(randomB == 1){
        comment = 'クリップは髪留めのこと,これはマガジンよ.';
      }else{
        comment = '猛者はスコープを使わないって？私は大砲よ.';
      }
      break;

    case 7:
      character = 'コースティック';
      if(randomB == 1){
          comment = '深呼吸しろ...';
      }else{
        comment = '（ゴホッ 私の視界は良好だ...';
      }
      break;

    case 8:
      character = 'ミラージュ';
      if(randomB == 1){
        comment = '騙られろ！';
      }else{
        comment = 'もう一人俺を送り出す！ったくイケメンだな！';
      }
      break;
    
    case 9:
      character = 'オクタン';
      if(randomB == 1){
          comment = '誰か見えたぞ,クッキー売りじゃなさそうだ';
      }else{
        comment = 'Can you feel the speed?! Yeah baby!';
      }
      break;
  
      case 10:
        character = 'ワットソン';
        if(randomB == 1){
            comment = 'Eye of the Storm！嵐を止めるわ！';
        }else{
          comment = '今の私は絶高調〜！';
        }
        break;

      case 11:
        character = 'クリプト';
        if(randomB == 1){
            comment = '空に目を放つ！';
        }else{
          comment = '俺を見捨てなかったな,感謝する.';
        }
        break;

      case 12:
        character = 'レヴナント';
        if(randomB == 1){
            comment = '私のものだ,触れるな.';
        }else{
          comment = '黙れ！';
        }
        break;

      case 13:
        character = 'ローバ';
        if(randomB == 1){
            comment = 'お目が高いわね.';
        }else{
          comment = '私の物は私の物,あんたの物も私の物';
        }
        break;
  }

  if(flag === 0){
    return [character, comment];
  }else{
    return character;
  }

}

//https://discord.com/api/oauth2/authorize?client_id=734763588111171624&permissions=522304&scope=bot
