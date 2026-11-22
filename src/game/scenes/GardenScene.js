
import Phaser from 'phaser';

export default class GardenScene extends Phaser.Scene {
  constructor() {
    super('GardenScene');
  }

  create() {
    // 잔디 배경
    this.cameras.main.setBackgroundColor('#a8d5a2');

    // 정원 중앙 바닥
    this.add.rectangle(400, 300, 500, 350, 0x86b97d);

    // 산책로
    this.add.rectangle(400, 300, 80, 350, 0xd9c5a0);

    // 꽃
    this.add.circle(250, 200, 12, 0xffaacc);
    this.add.circle(550, 200, 12, 0xffe085);

    // 안내 문구
    this.add.text(400, 80, "Garden of Serie", {
      fontSize: '32px',
      color: '#ffffff',
    }).setOrigin(0.5);
  }
}
