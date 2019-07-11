import 'pixi'
import 'p2'
import Phaser from 'phaser'

import SnakeState from './states/Snake'
import config from './config'

class Game extends Phaser.Game {
  constructor () {
    const docElement = document.documentElement
    const width = docElement.clientWidth > config.gameWidth ? config.gameWidth : docElement.clientWidth
    const height = docElement.clientHeight > config.gameHeight ? config.gameHeight : docElement.clientHeight

    super(width, height, Phaser.CANVAS, 'content', null)

    this.state.add('Snake', SnakeState, false)

    this.state.start('Snake')
  }
}

window.game = new Game()
