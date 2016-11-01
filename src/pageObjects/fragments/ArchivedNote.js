const Note = require('./Note')

class ArchivedNote extends Note {
  constructor(noteElement) {
    super(noteElement)

    this.unArchiveLink = noteElement.$("a[title='Unarchive']")
  }

  unarchive() {
    this.unArchiveLink.click()
  }

}

module.exports = ArchivedNote