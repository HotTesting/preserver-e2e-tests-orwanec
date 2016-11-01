const BaseNotesPage = require('./BaseNotesPage')
const CreatedNote = require('./fragments/CreatedNote')

class MyNotesPage extends BaseNotesPage {
  constructor() {
    super()

    this.noteBody = $('.label-floating textarea[placeholder="Write a note"]')
    this.noteTitle = $('.panel-body input[placeholder="Title"]')
    this.saveButton = $('.panel-body button')

  }

  createNote(noteTitle, noteBody){
    let EC = protractor.ExpectedConditions
    this.noteBody.click();
    EC.visibilityOf(this.noteTitle)
    if (noteTitle) {
      this.noteTitle.sendKeys(noteTitle)
    }
    if (noteBody) {
      this.noteBody.sendKeys(noteTitle)
    }
    this.saveButton.click()
  }
  
  /**
   * @param {int} index - number starting from 0
   * @returns {Note} Note object on the page
   */
  notes(index) {
    return new CreatedNote(this.noteCards.get(index));
  }
  
}

module.exports = MyNotesPage