let EC = protractor.ExpectedConditions;

class Note {
  constructor(noteElement) {
    this.noteElement = noteElement;
    
    this.colorLink = noteElement.$("a[title='Color']");
    this.deleteLink = noteElement.$("a[title='Delete']");
    this.deleteForeverLink = noteElement.$("a[title='Delete forever']")

    this.colorGray = noteElement.$(".dropdown-menu .btn-default")
    this.colorOrange = noteElement.$(".dropdown-menu .btn-primary")
    this.colorGreen = noteElement.$(".dropdown-menu .btn-success")
    this.colorBlue = noteElement.$(".dropdown-menu .btn-info")

  }
  isShown() {
    return browser.wait(EC.visibilityOf(this.noteElement), 3000)
    .then(()=> true, err=> false)
    //return this.noteElement.$('.note-footer').isDisplayed()
    //   .then(undefined, err => false)
  }
  

  remove() {
    this.deleteLink.click()
  }

  // TODO implement the method below
  hasColor(colorName){
    // looking for a specific class name
    // .class=label-info
    // .class=label-success
    // .class=label-primary-old
    // .class=label-darkgray
  }

  // TODO implement the method below
  changeColor(){
    //
  }
  
}

module.exports = Note
