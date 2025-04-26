"use client"
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [word, setWord] = useState<string>("");
  const [isPalindrome, setIsPalindrome] = useState<boolean>()

  const handleWordChange = (e) => {
    setWord(e.target.value)
  }
  const wordToArray = word.split("");
  console.log(wordToArray)
  const reversedArray = wordToArray.reverse().join("");

  const checkIfPalindrome = () => {
    setIsPalindrome(word === reversedArray);
  }
  return (
    <div className="font-bold underline m-2 p-2">
      <input
        type="text"
        placeholder="enter a word"
        value={word ?? ""}
        onChange={handleWordChange}
        className="border-2 p-2 m-2" />
      <button className="border-2 p-2 m-2" onClick={checkIfPalindrome}> Check if Palindrome </button>
      <p> {isPalindrome ? "The word is Palindrome" : "The word is not Palindrome"}</p>
    </div>
  );
}
