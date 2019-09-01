const {Command, flags} = require('@oclif/command')
const adjs = require('./adjs')
const nouns = require('./nouns')
const adverbs = require('./adverbs')

class ComplimentCliCommand extends Command {
  async run() {
    const {flags} = this.parse(ComplimentCliCommand)

    const randomSelect = arr => {
      return arr[Math.floor(Math.random() * arr.length)]
    }

    const sentenceGenerator = (noun, adj, adverb) => {
      const templates = [
        `Your ${noun} is looking ${adverb} ${adj} today!`,
        `You have ${adverb} ${adj} ${noun}`,
        `You are ${adverb} ${adj}`,

      ]
      this.log(randomSelect(templates))
    }

    // const name = flags.name

    sentenceGenerator(randomSelect(nouns), randomSelect(adjs), randomSelect(adverbs))
  }
}

ComplimentCliCommand.description = `Describe the command here
Extra documentation goes here
`

ComplimentCliCommand.flags = {
  // add --version flag to show CLI version
  version: flags.version({char: 'v'}),
  // add --help flag to show CLI version
  help: flags.help({char: 'h'}),
  name: flags.string({char: 'n', description: 'name to compliment'}),
}

module.exports = ComplimentCliCommand
