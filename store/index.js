import { setDoc, doc, collection } from "firebase/firestore";
import { db } from "@/utils/firebase";
import { create } from "zustand";

export const useBioStore = create((set) => ({
  totalBio: 0,
  setTotalBio: (e) => set((state) => ({ totalBio: e })),
}));
