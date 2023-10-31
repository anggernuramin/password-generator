import { useState } from "react";
import Layout from "../organisme/Layout";

const Home = () => {
  const [inputText, setInputText] = useState("");
  const [passwords, setPasswords] = useState(new Set());
  const [currentPassword, setCurrentPassword] = useState("");
  const [nameActive, setNameActive] = useState("");

  function validatiInput(input) {
    const regex = /^[a-zA-Z0-9~!$]+$/;
    return regex.test(input);
  }
  function handlerGenerate() {
    if (inputText === "") {
      alert("Mohon isi input terlebih dahulu !");
      setCurrentPassword("");
      return;
    }

    // valiadasi input  menggunakan regex
    if (!validatiInput(inputText)) {
      alert("Input yang Anda masukkan tidak valid");
      setCurrentPassword("");
      return;
    }

    let password;
    do {
      password = generatePassword(inputText);
    } while (passwords.has(password));

    setPasswords(new Set([...passwords, password]));
    setCurrentPassword(password);
    setNameActive(inputText);
  }

  function generatePassword(input) {
    const shuffledWorld = suffleWord(input);
    return shuffledWorld;
  }

  function suffleWord(word) {
    const wordArray = word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    return wordArray.join("");
  }
  return (
    <div className="hero min-h-screen bg-white text-slate-800">
      <div className="hero-content text-left">
        <Layout inputText={inputText} setInputText={setInputText} handlerGenerate={handlerGenerate} currentPassword={currentPassword} nameActive={nameActive} />
      </div>
    </div>
  );
};

export default Home;
