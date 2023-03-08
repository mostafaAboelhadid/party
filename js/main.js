// navbar

function closeNav() {
  $('#nav-bar').width('0px');
  $('.main').css('margin-left', '0px');
}

$('.main span').click(() => {
  if ($('#nav-bar').width() === 0) {
    $('.main').css({
      marginLeft: '200px',
    });
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

// countdown

function countdown() {
  const todayDate = new Date();
  const eventDate = new Date('2024, 3, 8');

  const now = todayDate.getTime();
  const eventTime = eventDate.getTime();

  const restTime = eventTime - now;

  let s = Math.floor(restTime / 1000);
  let m = Math.floor(s / 60);
  let h = Math.floor(m / 60);
  let d = Math.floor(h / 24);

  d -= 30;
  h %= 24;
  m %= 60;
  s %= 60;

  $('.days').text(`${d} D`);
  $('.hours').text(`${h} h`);
  $('.mins').text(`${m} m`);
  $('.sec').text(`${s} s`);

  setTimeout(countdown, 1000);
}
countdown();

// text area

$('textarea').keydown(function () {
  const {
    length,
  } = $(this).val();
  const character = 100 - length;
  if (character <= 0) {
    $('#char').text('your available character finished');
  } else {
    $('#char').text(character);
  }
});