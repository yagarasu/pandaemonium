import debug from 'debug'

import BattleState from './states/BattleState'

const log = debug('Pandaemonium:Game')

class Pandaemonium extends Phaser.Game {
  constructor (el) {
    super(720, 480, Phaser.AUTO, el)

    this.state.onStateChange.add((stateName) => {
      log('Changed state to %s', stateName)
    })

    this.state.add('Battle', BattleState, false)

    this.el = el
  }

  run () {
    log('Run!')
    this.state.start('Battle')
  }
}

export default Pandaemonium
