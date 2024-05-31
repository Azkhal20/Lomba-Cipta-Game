setGame("1200x600");
game.folder = "assets";
//file gambar yang dipakai dalam game
const gambar = {
	logo:"logo.png",
	startBtn:"startBtn.png",
	cover:"cover.png",
	playBtn:"playBtn.png",
	maxBtn:"maxBtn.png",
	minBtn:"minBtn.png",
	closeBtn:"closeBtn.png",
	pauseBtn:"pauseBtn.png",
	musicBtn:"musicBtn.png",
	startLine:"startLine.png",
	finishLine:"finishLine.png",
	settingBtn:"settingBtn.png",
	windowSetting:"windowSetting.png",
	headerSetting:"headerSetting.png",
	car1:"car1.png",
	indicatorOn:"indicatorOn.png",
	indicatorOff:"indicatorOff.png",
}
//file suara yang dipakai dalam game
var suara = {
}

//load gambar dan suara lalu jalankan startScreen
loading(gambar, suara, startScreen);

function startScreen(){	
	hapusLayar("#577B8D");
	tampilkanGambar(dataGambar.logo, 600, 250);
	var startBtn = tombol(dataGambar.startBtn, 600, 350);
	if (tekan(startBtn)){
		jalankan(halamanCover);
	}
}
function halamanCover(){
	hapusLayar("#67d2d6");
	gambarFull(dataGambar.cover);
	let playBtn = tombol(dataGambar.playBtn, 600, 450);
	if (tekan(playBtn)){
		setAwal();
		jalankan(gameLoop);
	}	
	resizeBtn(1150,50);

	// Tombol CLose
	// let closeBtn = tombol(dataGambar.closeBtn, 50, 50);
	// if (tekan(closeBtn)){
	// 	jalankan(startScreen);
	// }

	// Tombol Setting (blom jadi)
	let settingBtn = tombol(dataGambar.settingBtn, 50, 50);
	if (tekan(settingBtn)){
		jalankan(windowSetting, 600, 400);
	}
}

function setAwal(){
}

function gameLoop(){
	hapusLayar();	
}