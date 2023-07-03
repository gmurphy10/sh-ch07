// run a function on scroll
// figure out how far down user has scrolled

$(document).on('scroll', function () {
  var pixelsFromTop = $(document).scrollTop()

  $('.progress').text(pixelsFromTop + ' pixels from top')

  if (pixelsFromTop > 50) {
    $('header').addClass('hidden')
  } else {
    $('header').removeClass('hidden')
  }

  if (pixelsFromTop < 600) {
    $('body').css('background-color', '#fff')
  } else if (pixelsFromTop < 1400) {
    $('body').css('background-color', '#a29c97')
  } else if (pixelsFromTop < 2200) {
    $('body').css('background-color', '#d9dfe4')
  } else if (pixelsFromTop < 3000) {
    $('body').css('background-color', '#fff0f0')
  } else {
    $('body').css('background-color', '#cdccc7')
  }

  // join number of % scrolled with % symbol
  $('.bar').css('width', 25 + '%')

  // create 2 x variables (documentHeight and windowHeight)
  // create variables to work out difference
  // using the difference and scrollPosition, divide them into eachother
  // join number of % scrolled with the % symbol
  var documentHeight = $(document).height()
  var windowHeight = $(window).height()

  var difference = documentHeight - windowHeight

  var percentage = (100 * pixelsFromTop) / difference

    $(".bar").css("width", percentage + "%")
})
