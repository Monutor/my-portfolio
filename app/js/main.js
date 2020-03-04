$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$('.about__title').click(function () {
  $('.about__text').slideToggle(800);
});

$('.project__title').click(function () {
  $('.project__content').slideToggle(800);
});

$('.skills__title').click(function () {
  $('.skills__desc, .skills__items').slideToggle(800);
});

$('.planned__title').click(function () {
  $('.planned__list').slideToggle(800);
});

$('#myModal').modal({
  backdrop: true,
  1
  show: true,
  keyboard: true
})