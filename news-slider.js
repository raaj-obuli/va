function createNewsSlider($container, $nextButton, $prevButton, $pager) {
  var $articles = $container.find(".ui-tabs-panel");

  function adjustSliderSize() {
    var maxHeight = 0;

    $container.height('auto');

    $articles.each(function () {
      $(this).css({ position: "absolute" });
      maxHeight = Math.max(maxHeight, $(this).outerHeight());
    });

    $container.height(maxHeight);

    $articles.hide().eq(0).show();
  }
  window.setTimeout(adjustSliderSize, 0);

  $pager.text("1 of " + $articles.length);

  var slider = { articles: $articles, index: 0, pager: $pager };
  $nextButton.click(function (e) {
    slider.articles.eq(slider.index).fadeOut();
    slider.index = (slider.index + 1) % slider.articles.length;
    slider.articles.eq(slider.index).fadeIn();
    slider.pager.text(slider.index + 1 + " of " + slider.articles.length);
    e.preventDefault();
  });
  $prevButton.click(function (e) {
    slider.articles.eq(slider.index).fadeOut();
    slider.index =
      (slider.index - 1 + slider.articles.length) % slider.articles.length;
    slider.articles.eq(slider.index).fadeIn();
    slider.pager.text(slider.index + 1 + " of " + slider.articles.length);
    e.preventDefault();
  });

  $(window).resize(function () {
    adjustSliderSize();
  });
}
