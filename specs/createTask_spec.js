//const hqUser = require('../data/credentials').hg
const MyNotesPage = require('../src/pageObjects/MyNotesPage')
const ArchiveNotesPage = require('../src/pageObjects/ArchiveNotesPage')

describe('Task page', function () {
  const myNotesPage = new MyNotesPage()
  const archiveNotesPage = new ArchiveNotesPage()

  it('should have correct title', function () {
    expect(browser.getTitle()).toBe('???',
      'Title not found')
  })

  it('should create the task', function () {
    //
  })

})
