import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

export const getBio = (e) => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: `{"prompt":"${e.bio}","tone":"${e.name} from ${e.show}"}`,
  };

  return fetch("https://gpt3-api-wapp.onrender.com/", options).then(
    (response) => response.json()
  );
};

export const getTotalBios = async () => {
  const biosCol = collection(db, "bios");
  const docRef = doc(biosCol, "QvyrAlomYFk9pM5hiwi1");
  const docSnap = await getDoc(docRef);
  let data = docSnap.data();
  return data;
};

export const incrementBio = async (totalBio) => {
  const biosCol = collection(db, "bios");
  const docRef = doc(biosCol, "QvyrAlomYFk9pM5hiwi1");
  await setDoc(docRef, {
    totalBios: totalBio + 1,
  });
};
