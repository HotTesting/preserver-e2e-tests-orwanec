const BaseNotesPage = require('./BaseNotesPage')
const ArchivedNote = require('./fragments/ArchivedNote')

class ArchiveNotesPage extends BaseNotesPage {
  constructor() {
    super()
      
  }

  /**
   * @param {int} index - number starting from 0
   * @returns {Note} Note object on the page
   */
  notes(index) {
    return new ArchivedNote(this.noteCards.get(index));
  }

}

module.exports = ArchiveNotesPage