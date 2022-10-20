function showpanel(name) {
  $(".panel").slideDown();
  switch (name) {
    case 'lights':
      $(".lights").slideDown();
    break;

  }
}

function hidepanel() {
  $(".panel").slideUp();
}
