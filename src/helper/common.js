const DownloadARRAY2CSV = (array) => {
  //var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
  if (array?.length > 0) {
    var str = Object.keys(array[0]).join(",") + "\r\n";

    for (var i = 0; i < array.length; i++) {
      var line = new Array();

      for (var index in array[i]) {
        line.push('"' + array[i][index] + '"');
      }

      str += line.join(",");
      str += "\r\n";
    }
    window.open("data:text/csv;charset=utf-8," + encodeURIComponent(str));
  } else {
    alert("No data");
  }
};

export { DownloadARRAY2CSV };
