const initialStateProduct = {
    products:[
      {id:1,
      name:'Sony WX-5',
      price:100.75,
      category:'Headphone',
      rating:3,
      color:'red',
      size:'S',
      details:{
          product:'',
          warrenty:'',
          merchant:''
      },
      image:'product-1-square',
      img:['image-1-square','image-1-square','image-1-square']
  },
      {
          id:2,
      name:'Apple Watch 2',
      price:500.75,
      category:'SmartWatch',
      rating:4,
      color:'black',
      size:'M',
      details:{
          product:'',
          warrenty:'',
          merchant:''
      },
      image:'product-2-square',
      img:['image-2-square','image-2-square','image-2-square']
  },
      {
          id:3,
      name:'Apple iPhone 11',
      price:700.75,
      category:'Mobile',
      rating:4,
      color:'black',
      size:'',
      details:{
          product:'',
          warrenty:'',
          merchant:''
      },
      image:'product-3-square',
      img:['image-3-square','image-3-square','image-3-square']
  },
  ]
  }
  
  const productReducer=(state=initialStateProduct,action)=>{
    return state;
  }
  

  export {productReducer}