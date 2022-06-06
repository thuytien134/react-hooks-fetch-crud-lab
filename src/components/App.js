import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");

  const [questions,setQuestions] = useState([])

function handleAddquestion(newquestion){
  setQuestions([...questions,newquestion])
}

function handleDelete(deleteQuestion){
  const updateQuestion = questions.filter(question => question.id !== deleteQuestion.id);
  setQuestions(updateQuestion)
}


  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestion={handleAddquestion}/> : <QuestionList questions={questions} setQuestions={setQuestions} onDelete={handleDelete}/>}
    </main>
  );
}

export default App;
