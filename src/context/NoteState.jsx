import React,{useEffect,useState} from 'react'
import noteContext from "./notecontext";
import axios from 'axios';

export default function NoteState(props) {
    let [products,setProducts] =useState(null);
    // let[category,setCategory]=useState(null);
    // let [categoryWiseProducts,setCategoryWiseProducts] =useState(null);


    function getData(){
        let url=`https://fakestoreapi.com/products`

        axios.get(url)
        .then(res=>{
          setProducts(res.data)
      // setCategoryWiseProducts(res.data)

      // let cat=res.data.map((e)=>e.category)
      // let set =new Set(cat)
      // let finalCat=(...set)
      // setCategoryWiseProducts(finalCat);
        }
      );


    }

    useEffect(()=>{
        getData();
    },[]);
  return (
    <noteContext.Provider value={{products}}>
      {props.children}
    </noteContext.Provider>
  )
}

