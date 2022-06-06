import React from "react";
import {useState,useEffect} from "react"
import QuestionItem from "./QuestionItem";


function QuestionList({questions,setQuestions,onDelete}) {



useEffect(()=>{
fetch("http://localhost:4000/questions")
.then(r =>r.json())
.then(question => setQuestions(question))
},[])

// function handleUpdateQuestion(updatedQuestion) {
//   const updatedQuestions = questions.map((question) => {
//     if (question.id === updatedQuestion.id) {
//       return updatedQuestion;
//     } else {
//       return question;
//     }
//   });
//   setItems(updatedQuestions);;
// }



  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {/* display QuestionItem components here after fetching */}
        {questions.map((q) => {
         return <QuestionItem key={q.id} question = {q} onDelete={onDelete} />
        })}
        </ul>
    </section>
  );
}

export default QuestionList;
