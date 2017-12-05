$(function() {

  function initNav() {

    var nav = $('#banner nav'),
        navLinks = nav.find('a'),
        threshold = $(nav).offset().top,
        casesPos = $('section#case-studies').offset().top,
        sectionPositions = [];

    $(window)
      .on('resize', function() {
        $('section.feature').each(function(i) {
          sectionPositions[i] = {
            id: $(this).attr('id'),
            pos: $(this).offset().top-150
          };
        });
        sectionPositions.reverse();
        casesPos = $('section#case-studies').offset().top;
      })
      .on('scroll', function() {
        var top = $(window).scrollTop();
        nav[top >= threshold ? 'addClass' : 'removeClass']('fixed');
        nav[(top >= casesPos-150) ? 'addClass' : 'removeClass']('is-hidden');

        $(sectionPositions).each(function() {
          if (top >= this.pos) {
            navLinks.removeClass('active');
            nav.find('a[href="#' + this.id + '"]').addClass('active');
            return false;
          }
        });
      })
      .on('load', function() {
        window.setTimeout(function() { $(window).trigger('resize'); }, 500);
      })
      .trigger('resize')
      .trigger('scroll');

    navLinks.on('click', function(e) {
      e.preventDefault();
      var section = $(this).attr('href'),
          pos = $(section).offset().top-150;
      $('html, body').animate({scrollTop: pos}, 400);
      navLinks.removeClass('active');
      $(this).addClass('active');
    });

  }

  function initSelectors() {

    $('.feature-selector').each(function() {

      var links = $(this).find('ul > li > a'),
          images = $(this).find('.col-sm-7').children();

      links.on('click', function() {
        links.removeClass('active');
        $(this).addClass('active');
        images.stop(true).fadeOut(500);
        $(images[$(this).parent().index()]).stop(true).fadeIn(500);
      });

    });

  }

  function initParallax() {
    $('.parallax').each(function() {
      $(this).find('img').each(function() {

        if ($(window).width() > 768 && parseInt($(this).css('top')) == 0) {
          var img = $(this),
              top = $(this).offset().top;

          $(window).on('scroll', function() {
            var y = -(($(window).scrollTop() + ($(window).height() >> 1) - top) / 10);
            img.css('top', y);
          });
        }
      });
    });
  }

  initNav();
  initSelectors();
  initParallax();

});
