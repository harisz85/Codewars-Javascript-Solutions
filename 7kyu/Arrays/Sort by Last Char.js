function last(x) {
  let arr = x.split(" ");

  arr.sort(function (a, b) {
    return (a[a.length - 1].charCodeAt(0) - b[b.length - 1].charCodeAt(0));

  });


  return arr;


}