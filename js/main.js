// navbar

function closeNav() {
  $('#nav-bar').width('0px');
  $('.main').css('margin-left', '0px');
}

$('.main span').click(() => {
  if ($('#nav-bar').width() === 0) {
    $('.main').css({ marginLeft: '200px' });
    $('#nav-bar').width('200px');
  } else {
    closeNav();
  }
});

$('#nav-bar icon').click(closeNav);

// singers

$(document).ready(() => {
  $('.singers article:first').css('display', 'block');
  $('.singers h3').click(function () {
    $(this).next().slideToggle(500);
    $('.singers article').not($(this).next()).slideUp(500);
  });
});

// text area

$('textarea').keydown(function () {
  const { length } = $(this).val();
  const character = 100 - length;
  if (character <= 0) {
    $('#char').text('your available character finished');
  } else {
    $('#char').text(character);
  }
});
