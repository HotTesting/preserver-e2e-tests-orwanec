//const hqUser = require('../data/credentials').hg
const MyNotesPage = require('../src/pageObjects/MyNotesPage')

describe('MyNotes Page', function () {
  const myNotesPage = new MyNotesPage()
  
  xit('should have correct title', function () {
    expect(myNotesPage.getHeaderTitle()).toBe('Preserver',
      'Title not found')
    expect(myNotesPage.notes(0).isShown()).toBeFalsy('None notes should be visible')
  })

  xit('should create the task with title only', function () {
    myNotesPage.createNote('some Title')
    expect(myNotesPage.notes(0).isShown()).toBeTruthy('Note should be created')
    
    browser.sleep(5*1000)
  })

  xit('should create the task with body only', function () {
    let note = myNotesPage.createNote(undefined, 'some Title')
    expect(myNotesPage.notes(0).isShown()).toBeTruthy('Note should be created')

    browser.sleep(5*1000)
  })

  xit('should create the task with empty fields', function () {
    let note = myNotesPage.createNote()
    expect(myNotesPage.notes(0).isShown()).toBeFalsy('Note should not be created')

    browser.sleep(5*1000)
  })

  it('should create the task with title and body', function () {
    let note = myNotesPage.createNote('some Title', 'some Body')
    expect(myNotesPage.notes(0).isShown()).toBeTruthy('Note should be created')

    browser.sleep(5*1000)
  })

})
