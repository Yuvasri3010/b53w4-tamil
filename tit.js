let str = function () {
    let arr = "hello there how are you"
    let titlecase = arr.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
    console.log(titlecase)
  }
  str()

  //anonymous functon

  (function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++){
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    console.log(str.join(' '));
    })("hello there how are you")

    //iifc
    