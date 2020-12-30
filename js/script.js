$(document).ready(function () {
    
    $('#searchArea').keyup(function () {
        var filter = this.value.toLowerCase();  // no need to call jQuery here
        $('.user-prof').each(function() {
            /* cache a reference to the current .media (you're using it twice) */
            var _this = $(this);
            var title = _this.find('h5').text().toLowerCase();
    
            if (title.indexOf(filter) < 0) {
                _this.fadeOut('slow');
            }else {
                _this.fadeIn('slow')
            }
        });
    });

});
