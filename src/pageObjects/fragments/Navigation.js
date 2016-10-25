class Navigation {
  constructor() {
    this.navDropdown = $('ul.navbar-right a.dropdown-toggle')
    this.myNotesPage = $('a[href="/preserver/notes"]')
    this.archivePage = $('a[href="/preserver/archive-notes"]')
    this.recycleBin = $('a[href="/preserver/recycle-bin"]')
  }

}

module.exports = Navigation