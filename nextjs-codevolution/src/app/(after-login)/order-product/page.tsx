"use client";

import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();
  const orderHandler = () => {
    console.log("Order...");
    router.push("/");
  };
  return (
    <>
      <h2 className="text-2xl font-bold">Order Product</h2>
      <button className="" type="button" onClick={orderHandler}>
        Order
      </button>
    </>
  );
}
