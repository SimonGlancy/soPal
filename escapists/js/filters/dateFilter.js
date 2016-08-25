app.filter('dateFilter', function () {
  return function (items) {
    console.log(items)
    items.sort(function(a,b){
      return b.date - a.date;
    })
    return items
  };
});
