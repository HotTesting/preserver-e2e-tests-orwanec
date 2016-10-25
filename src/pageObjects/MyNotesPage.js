const BaseNotesPage = require('./BaseNotesPage')

class MyNotesPage extends BaseNotesPage {
  constructor() {
    super()
    this.saveButton = $('.container button')

  }

  saveNote(noteTitle, noteBody){
    this.noteBody.click();
    if (noteTitle) {
      this.noteTitle.sendKeys(noteTitle)
    }
    if (noteBody) {
      this.noteBody.sendKeys(noteTitle)
    }
    this.saveButton.click()
  }
}

module.exports = MyNotesPage