 const Product = require('./models/product');



 const products =[
     {name:'Iphone 13 pro',
    price:100,
    desc:'The new iPhone 13 Pro and iPhone 13. Buy now. Water resistant. Wide camera. Retina display. Privacy built in. Services: Free no-contact delivery, Chat with a Specialist, Online Personal Session.',
    img:'https://images.unsplash.com/photo-1530319067432-f2a729c03db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aXBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60'
},
{name:'MacBook',
    price:4000,
    desc:'The new iPhone 13 Pro and iPhone 13. Buy now. Water resistant. Wide camera. Retina display. Privacy built in. Services: Free no-contact delivery, Chat with a Specialist, Online Personal Session.',
    img:'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFjYm9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60'
},
{name:'Ipad',
    price:1700,
    desc:'The new iPhone 13 Pro and iPhone 13. Buy now. Water resistant. Wide camera. Retina display. Privacy built in. Services: Free no-contact delivery, Chat with a Specialist, Online Personal Session.',
    img:'https://media.istockphoto.com/photos/man-looking-tv-series-and-movies-on-his-digital-tablet-picture-id1288375703?b=1&k=20&m=1288375703&s=170667a&w=0&h=utybcZcvaX4A0ItOINv46f1acbWUcvooBTWdrkcdGTU='
},
{   name:'Drones',
    price:1504,
    desc:'The new iPhone 13 Pro and iPhone 13. Buy now. Water resistant. Wide camera. Retina display. Privacy built in. Services: Free no-contact delivery, Chat with a Specialist, Online Personal Session.',
    img:'https://media.istockphoto.com/photos/drone-white-cloudy-dusk-sky-picture-id492683865?b=1&k=20&m=492683865&s=170667a&w=0&h=PtECbEZJ1Yxq0h_pGUzGZnGxnkPENqz5X8ZMcNiKst8='
},
{   name:'Sneaker',
    price:154,
    desc:'The new iPhone 13 Pro and iPhone 13. Buy now. Water resistant. Wide camera. Retina display. Privacy built in. Services: Free no-contact delivery, Chat with a Specialist, Online Personal Session.',
    img:'https://media.istockphoto.com/photos/object-patternsneakers-picture-id1304862992?b=1&k=20&m=1304862992&s=170667a&w=0&h=Emf1s0oY7xw7HjOCloT7XHLXlkdznJ9Tve-l9FZWBBA='
},
{   name:'Shoes',
    price:200,
    desc:'The new iPhone 13 Pro and iPhone 13. Buy now. Water resistant. Wide camera. Retina display. Privacy built in. Services: Free no-contact delivery, Chat with a Specialist, Online Personal Session.',
    img:'https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c25lYWtlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60'
},
{   name:'Jeans',
    price:200,
    desc:'The new iPhone 13 Pro and iPhone 13. Buy now. Water resistant. Wide camera. Retina display. Privacy built in. Services: Free no-contact delivery, Chat with a Specialist, Online Personal Session.',
    img:'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8amVhbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60'
}
 ];
 const seedDB =async()=>{
     await Product.deleteMany({});
     await Product.insertMany(products);
     console.log('DB Seeded');

 }
 module.exports=seedDB;