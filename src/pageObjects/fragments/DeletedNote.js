const Note = require('./Note')

class DeletedNote extends Note {
  constructor(noteElement) {
    super(noteElement)

    this.deleteForeverLink = noteElement.$("a[title='Delete forever']")
    this.restoreLink = noteElement.$("a[title='Restore']")
  }

  restore() {
    this.restoreLink.click()
  }

  remove() {
    this.deleteForeverLink.click()
  }

  deleteForever() {
    this.remove()
  }

}

module.exports = DeletedNote;