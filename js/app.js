module.exports = function() {

    var isVisible = 'visibility:visible;';
    var allTheFloors = $('.responsiveImg>img').toArray()
    //console.log(allTheFloors)
    for (z in allTheFloors) {
      console.log($(allTheFloors[z]).attr('style'))
      if ($(allTheFloors).attr('style').toStr() === isVisible) {
        console.log('woo')
      }
    }
}