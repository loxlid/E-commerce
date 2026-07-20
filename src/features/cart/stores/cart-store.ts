"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type CartItem = {
  productId: string;
  variantId: string;
  sellerId: string;
  name: string;
  slug: string;
  imageUrl: string;
  unitPrice: number;
  quantity: number;
  stock: number;
};

type CartState = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (variantId: string) => void;
  setQuantity: (variantId: string, quantity: number) => void;
  clear: () => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (incoming) =>
        set((state) => {
          const current = state.items.find(
            (item) => item.variantId === incoming.variantId,
          );

          if (!current) {
            return {
              items: [
                ...state.items,
                {
                  ...incoming,
                  quantity: Math.min(
                    Math.max(1, incoming.quantity),
                    incoming.stock,
                  ),
                },
              ],
            };
          }

          return {
            items: state.items.map((item) =>
              item.variantId === incoming.variantId
                ? {
                    ...item,
                    quantity: Math.min(
                      item.quantity + incoming.quantity,
                      item.stock,
                    ),
                  }
                : item,
            ),
          };
        }),
      removeItem: (variantId) =>
        set((state) => ({
          items: state.items.filter((item) => item.variantId !== variantId),
        })),
      setQuantity: (variantId, quantity) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.variantId === variantId
              ? {
                  ...item,
                  quantity: Math.min(Math.max(1, quantity), item.stock),
                }
              : item,
          ),
        })),
      clear: () => set({ items: [] }),
    }),
    {
      name: "nexa-cart-v1",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ items: state.items }),
    },
  ),
);

export const selectCartQuantity = (state: CartState) =>
  state.items.reduce((total, item) => total + item.quantity, 0);

export const selectCartSubtotal = (state: CartState) =>
  state.items.reduce(
    (total, item) => total + item.unitPrice * item.quantity,
    0,
  );
