const Note = require('./fragments/Note')
const Navigation = require('./fragments/Navigation')

const EC = protractor.ExpectedConditions

class BaseNotesPage {
  constructor() {
    this.noteCards = $$('div.container div.grid-item');

    this.navigation = new Navigation()
  }

  getHeaderTitle() {
    return $('head title').getText()
  }
  
  /**
   * TODO: define if we need notes method in parent class...
   * @param {int} index - number starting from 0
   * @returns {Note} Note object on the page
   */
  notes(index) {
    return new Note(this.noteCards.get(index));
  }

}

module.exports = BaseNotesPage
