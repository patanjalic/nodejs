var printPicture = (id,callback) => {
  var data = {
    name:'Kate Upton',
    size:'1300x1200',
    id:id
  };
  callback(data);
};


printPicture(10,(data) => console.log(data));
