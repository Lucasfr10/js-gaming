import Phaser from 'phaser'
import config from '../config'

export default class extends Phaser.State {
  init () {
    this.segments = [
      { x: 1, y: 1 },
      { x: 1, y: 12 },
      { x: 1, y: 23 }
    ]
  }

  create () {
  }

  render () {
    for (var segment of this.segments) {
      this.game.debug.geom(new Phaser.Rectangle(segment.x, segment.y, 10, 10), '#f00')
    }
  }
}
