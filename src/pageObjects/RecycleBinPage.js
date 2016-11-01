const BaseNotesPage = require('./BaseNotesPage')
const DeletedNote = require('./fragments/DeletedNote')


class RecycleBinPage extends BaseNotesPage{
  constructor() {
    super()
  }

  /**
   * @param {int} index - number starting from 0
   * @returns {Note} Note object on the page
   */
  notes(index) {
    return new DeletedNote(this.noteCards.get(index));
  }
  
}

module.exports = RecycleBinPage
