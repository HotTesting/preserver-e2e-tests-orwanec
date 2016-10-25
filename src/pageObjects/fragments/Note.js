class Note {
  constructor() {
    this.archiveLink = $("a[title='Archive']")
    this.colorLink = $("a[title='Color']")
    this.deleteLink = $("a[title='Delete']")

    this.colorGray = $(".dropdown-menu .btn-default")
    this.colorOrange = $(".dropdown-menu .btn-primary")
    this.colorGreen = $(".dropdown-menu .btn-success")
    this.colorBlue = $(".dropdown-menu .btn-info")
    
  }
  isShown() {
    return this.playerElement.$('.player-controls').isDisplayed()
      .then(undefined, err => false)
  }

  moveToArchive() {
    this.archiveLink.click()
  }

  moveToMyNotes() {
    this.archiveLink.click()
  }

  hasColor(colorName){
    // looking for a specific class name
    // .class=label-info
    // .class=label-success
    // .class=label-primary-old
    // .class=label-darkgray
  }

  deleteNote() {
    //
  }

  fullDeleteNote() {
    //
  }
}

module.exports = Note