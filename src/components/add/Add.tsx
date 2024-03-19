import React, { useState, useEffect } from "react";
import getall from "../../store/useproducts";
import { NavLink } from "react-router-dom";

import './Add.scss';

const Add = () => {
  const { post, getproducts } = getall();
  const [product, setproduct] = useState({
    img:'',
    name: '',
    title: '',
    category: '',
    description: '',
    price: '',
  });



  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; 
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const image = new Image(); 
        image.onload = () => {
          const canvas = document.createElement('canvas');
          const maxWidth = 200; 
          const maxHeight = 200; 
  
          let width = image.width;
          let height = image.height;
  
          if (width > height) {
            if (width > maxWidth) {
              height *= maxWidth / width;
              width = maxWidth;
            }
          } else {
            if (height > maxHeight) {
              width *= maxHeight / height;
              height = maxHeight;
            }
          }
  
          canvas.width = width;
          canvas.height = height;
  
          const ctx = canvas.getContext('2d');
          ctx?.drawImage(image, 0, 0, width, height);
  
          const resizedImageUrl = canvas.toDataURL('image/jpeg');
          setproduct({ ...product, img: resizedImageUrl });
        };
        image.src = reader.result as string; 
      };
      reader.readAsDataURL(file);
    }
  };

 
  
  const addproduct = () => {
    post(product);
    setTimeout(() => {
      getproducts();
      getproducts()
    }, 600);

  }


  return (
    <div className="add__component">
      <form>
        <input onChange={(e) => setproduct({ ...product, name: e.target.value })} placeholder="Name..." type="text" />
        <input onChange={(e) => setproduct({ ...product, title: e.target.value })} placeholder="title..." type="text" />
        <input onChange={(e) => setproduct({ ...product, description: e.target.value })} placeholder="description..." type="text" />
        <input onChange={(e) => setproduct({ ...product, price: e.target.value })} placeholder="price..." type="number" />


        <label className="lab   block w-[300px] mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload file</label>
        <input onChange={handleFileChange} className="inp block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"/>

        <NavLink to='/'> <button onClick={addproduct}>Add</button></NavLink>
      </form>
    </div>
  );
}

export default Add;