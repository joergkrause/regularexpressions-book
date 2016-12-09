function check_form(date) {
  var pattern = /(0[1-9]|[12][0-9]|3[01])[.](0[1-9]|1[012])[.](19|20)\d\d/;
  if (date.match(pattern)) {
    var date_array = date.split('.');
    var day = date_array[0];
    // Months are internally 0-11
    var month = date_array[1] - 1;
    var year = date_array[2];
    // Let JS check this
    source = new Date(year, month, day);
    if (year != source.getFullYear()) {
      console.log('Year wrong!');
      return false;
    }

    if (month != source.getMonth()) {
      console.log('Month wrong!');
      return false;
    }

    if (day != source.getDate()) {
      console.log('Day wrong!');
      return false;
    }
  }
  else {
    console.error('Pattern wrong!');
    return false;
  }

  return true;
}
if (check_form('08.07.2017')) {
  console.log('Checked successfully.')
}