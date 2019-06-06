const gaTrackingAlert = (identification = 'home', location = '/demo', title, content) =>
  Promise.all([
    window.swal(title, content, 'info'),
    window.gtag('config', 'UA-99384557-3', {
      'page_title': identification,
      'page_path': `/${location}`
    })
  ])

const gaTracking = (identification = 'home', location = '/demo') =>
  Promise.all([
    window.gtag('config', 'UA-99384557-1', {
      'page_title': identification,
      'page_path': `/${location}`
    })
  ])
