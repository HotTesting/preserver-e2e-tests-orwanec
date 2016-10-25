const Note = require('./fragments/Note')
const Navigation = require('./fragments/Navigation')

const EC = protractor.ExpectedConditions

class BaseNotesPage {
  constructor() {
    this.noteCards = $$('div.container div.grid-item');

    this.noteBody = $('.container textarea.form-control')
    this.noteTitle = $('.container title.form-control')
  }

  getHeaderTitle() {
    return $('head title').getText()
  }

}

module.exports = BaseNotesPage
