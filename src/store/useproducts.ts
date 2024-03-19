
import axios from "axios";
import { create } from "zustand";
import { storetype } from "../components/store.type";

export const getall = create<storetype>((set) => ({
  loading: false,
  products: [],
  error: null,

  getproducts: async () => {
    set(() => ({ loading: true }));
    try {
      const res = await axios.get('https://65f5ce5741d90c1c5e0a2ea7.mockapi.io/products');
      const data = res.data;
      set(() => ({
        products: data,
        loading: false
      }));
    } catch (error) {
      console.error(error);
    }
  },

  post: async (prod: any) => {
    try {
        const res = await axios.post(`https://65f5ce5741d90c1c5e0a2ea7.mockapi.io/products`,prod);
    } catch (error) {
        console.error(error);
    }
  },

  deleteproduct: async (id:number) => {
    try {
      console.log(id);
      const res = await axios.delete(`https://65f5ce5741d90c1c5e0a2ea7.mockapi.io/products/${id}`,{
        method: 'DELETE',
      });
    } catch (error) {
        console.error(error);
      }
  },






  //  handleDelete : async (id: number): Promise<void> => {
  //   try {
  //     // Perform delete operation
  //     await fetch(`https://65f7443bb4f842e8088565a2.mockapi.io/products/${id}`, {
  //       method: "DELETE",
  //     });
  //     // After successful deletion, fetch updated students list
  //   } catch (err) {
  //     console.error("Error deleting student:", err);
  //   }
  // }
  
}));

export default getall;