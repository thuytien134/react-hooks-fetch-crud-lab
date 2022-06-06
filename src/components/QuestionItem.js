import React from "react";

function QuestionItem({ question,onDelete,onUpdate}) {

  const { id, prompt, answers, correctIndex } = question;
 

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  // function handleUpdateChange() {
  //   fetch(`http://localhost:4000/items/${question.id}`, {
  //   method: "PATCH",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     "correctIndex":integer,
  //   }),
  // })
  //   .then((r) => r.json())
  //   .then((updatedItem) => onUpdate(updatedItem));
  // }


  function handleDeleteClick(){
    fetch(`http://localhost:4000/questions/${question.id}`,{
      method: "DELETE",
    })
    .then (r=>r.json())
    .then(()=> onDelete(question))
    
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} >{options}</select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
