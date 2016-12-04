var Master = function(Map , Player) {

  this.Map = Map;
  this.Player = Player;
  this.map = new Map();
  this.players = {};

  /*
    プレイヤーを追加
  */
  this.addPlayer = function(id) {
    var newPlayer = new Player(id , this.map);
    this.players[id] = newPlayer;
  };

  /*
    プレイヤーを削除
  */
  this.removePlayer = function(id) {
    if (this.players[id]) {
      var x = this.players[id].x;
      var y = this.players[id].y;
      this.map.reset(x , y);
      delete this.players[id];
    }
  };

  /*
    プレイヤーを移動
  */
  this.movePlayer = function(id , direction) {
    var player = this.players[id];
    if (direction == 'up') {
      player.moveUp();
    } else if (direction == 'down') {
      player.moveDown();
    } else if (direction == 'left') {
      player.moveLeft();
    } else if (direction == 'right') {
      player.moveRight();
    }
  };

  /*
    爆弾設置
  */
  this.putBom = function(playerId , direction) {
    var player = this.players[playerId];
    if (direction == 'up') {
      player.putUp();
    } else if (direction == 'down') {
      player.putDown();
    } else if (direction == 'left') {
      player.putLeft();
    } else if (direction == 'right') {
      player.putRight();
    }
  };
};

module.exports = Master;
