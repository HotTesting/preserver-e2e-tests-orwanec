const Note = require('./Note')

class CreatedNote extends Note {
  constructor(noteElement) {
    super(noteElement)
    this.archiveLink = noteElement.$("a[title='Archive']")
  }

  moveToArchive() {
    this.archiveLink.click()
  }
  
}

module.exports = CreatedNote