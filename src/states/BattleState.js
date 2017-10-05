import debug from 'debug'

const log = debug('Pandaemonium:State:BattleState')

class BattleState extends Phaser.State {
  create () {
    log('Create')
    this.game.stage.backgroundColor = '#303030'
  }
}

export default BattleState
