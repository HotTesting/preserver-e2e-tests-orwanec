const MyNotesPage = require('../src/pageObjects/MyNotesPage')
const RecycleBinPage = require('../src/pageObjects/RecycleBinPage')

describe('Notes page', function () {
  const myNotesPage = new MyNotesPage()
  const recycleBinPage = new RecycleBinPage()

  it('should create the task for deleting', function () {
    let note = myNotesPage.createNote('some Title', 'some Body')
    //
  })

  it('should delete the task with title only', function () {
    myNotesPage.notes(0).remove();
  })

  it('should move the task to Recycle Bin', function () {
    myNotesPage.navigation.navigateTo('recycle-bin')
    expect(recycleBinPage.notes(0).isShown())
      .toBeTruthy('Note should have appeared in Recycle Bin');
  })

  it('should delete the task forever', function () {
    recycleBinPage.notes(0).fullDelete()
    expect(recycleBinPage.notes(0).isShown())
      .toBeFalsy('Note should have disappeared from Recycle Bin');
  })


})