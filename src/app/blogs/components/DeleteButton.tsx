"use client";

import React from "react";

// Icon Imports
import { MdDeleteOutline } from "react-icons/md";

// Next Imports
import { useRouter } from "next/navigation";

// Toast Imports
import { toast } from "react-toastify";

const DeleteButton = ({ id, size = 30 }: { id?: string; size?: number }) => {
  const router = useRouter();
  const handleDelete = async () => {
    try {
      const res = await fetch(`/api/blogs/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.refresh();
      }
      const data = await res.json();
      toast.success(data.message);
    } catch (error) {
      console.error("Error deleting blog:", error);
      toast.error("An error occurred while deleting the blog.");
    }
  };
  return (
    <button>
      <MdDeleteOutline size={size} onClick={handleDelete} />
    </button>
  );
};

export default DeleteButton;
