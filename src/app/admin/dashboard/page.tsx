"use client";
import { useAppDispatch } from "@/redux/hooks";
import  React, { useEffect, useState } from "react";

export interface Iproduct{
  _id: string;
  imgSrc: string;
  fileKey: string;
  name: string;
  price: string;
  category: string; 
}


const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [updateTable, setUpdateTable] = useState(false);

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setLoading(true))

    axios.get("/api/get_products").then((res) => setProducts(res.data)).catch((err) => console.log(err)).finally(() => disspatch(setLoading(false)));

  },[updateTable])

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard