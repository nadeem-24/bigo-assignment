import {
  addProduct,
  getAllProducts,
  getProductsById,
  deleteProduct,
  updateProduct,
} from "@/utils/axiosUtil";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";

const useAllProduct = () => {
  return useQuery({ queryKey: ['products'], queryFn:getAllProducts });
};

const useProductById = () => {
  return useQuery(["posts"], getProductsById());
};

const useCreateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation(
    () => {
      return addProduct();
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("posts");
      },
    }
  );
};

const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  return useMutation(
    () => {
      return updateProduct();
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("posts");
      },
    }
  );
};

const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation(
    () => {
      return deleteProduct();
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("posts");
      },
    }
  );
};

export {
  useCreateProduct,
  useUpdateProduct,
  useProductById,
  useAllProduct,
  useDeleteProduct,
};
