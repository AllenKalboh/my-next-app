import { useState } from "react";

  const [word, setWord] = useState<string>("");
  const [isPalindrome, setIsPalindrome] = useState<boolean>()

  const handleWordChange = (e: any) => {
    setWord(e.target.value)
  }
  const wordToArray = word.split("");
  console.log(wordToArray)
  const reversedArray = wordToArray.reverse().join("");

  const checkIfPalindrome = () => {
    setIsPalindrome(word === reversedArray);
  }

  {/* <input
        type="text"
        placeholder="enter a word"
        value={word ?? ""}
        onChange={handleWordChange}
        className="border-2 p-2 m-2" />
      <button className="border-2 p-2 m-2" onClick={checkIfPalindrome}> Check if Palindrome </button>
      <p> {isPalindrome ? "The word is Palindrome" : "The word is not Palindrome"}</p> */}

