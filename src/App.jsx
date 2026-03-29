import { useState } from 'react'
import { Button, Form, InputGroup, Navbar, Container, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import EditTaskModal from './components/ModalEditTask';

function App() {
  const [list, setList] = useState([])
  const [inputValue, setInputValue] = useState("")
 const [modalShow, setModalShow] = useState(false);
        //  el modalShow li bech ykoun true wla false 3la 7asb el button li bech yed5el el modal wla y5arj menno
        // setmodalshow heya el fonction eli bch tbadel biha el modalshhow w nesta3mlouha fi fonctionnet o5rin kima onclick ou onchange mtaa l'input 
        const [selectedTask, setSelectedTask] = useState(null); // state pour stocker l'index de la tâche sélectionnée pour l'édition
  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  // const handleSave = () => {
  //   if (inputValue.trim() !== "") {
  //     setList([...list, inputValue])
  //     setInputValue("")
  //   }
  // }

const handleSave = () => {
  if (inputValue.trim() !== "") {
    setList([
      ...list,
      { text: inputValue, status: "todo" }
    ])
    setInputValue("")
  }
}
  const handleDelete = (index) => {
    const newList = [...list]
    newList.splice(index, 1)
    setList(newList)
  }

  // const handleEdit = (index) => {
  //   const newValue = prompt("Enter the new value:", list[index].text)
  //   if (newValue !== null && newValue.trim() !== "") {
  //     const newList = [...list]
  //     newList[index] = { ...newList[index], text: newValue }
  //     setList(newList)
  //   }
  // }

  const changeStatus = (index, newStatus) => {
  const newList = [...list]; // copie du tableau
  newList[index] = { ...newList[index], status: newStatus }; // on change le statut
  setList(newList); // on met à jour le state
};

  return (

    <>
    
       
       {/* <Container className="mt-4">
        
         <div className='col-md-6 mx-auto d-flex gap-2'>
           <InputGroup className="mb-3">
             <InputGroup.Text>@</InputGroup.Text>
             <Form.Control
               size='sm'
               type="text"
               placeholder="Type something..."
               value={inputValue}
               onChange={handleInputChange}
             />
           </InputGroup>

           <Button onClick={handleSave}>Save</Button>
        
         </div>

         <ol className="col-md-6 mx-auto">
           {list.map((item, index) => (
             item.trim() !== "" && (
               <li key={index} className="mb-2 d-flex justify-content-between align-items-center">
                 <span>{item}</span>

                 <div className="d-flex gap-2">
                   <Button size="sm" variant='info' onClick={() => handleEdit(index)}>Edit</Button>
                   <Button size="sm" variant='danger' onClick={() => handleDelete(index)}>Delete</Button>
                 </div>
               </li>
             )
           ))}
         </ol>

      </Container> */}
      <Container className="mt-5">
 

  {/* INPUT */}
  <div className="inputBox mx-auto d-flex">
    <Form.Control
      type="text"
      placeholder="Type something..."
      value={inputValue}
      onChange={handleInputChange}
    />
    <Button onClick={handleSave}>Save</Button>
  </div>

  {/* COLUMNS */}
  <div className="columns mt-5">

    {/* TODO */}
    <div className="column">
      <h4>À faire</h4>
      {list.map((item, index) =>
        item.status === "todo" && (
          <div className="card" key={index}>
            <span>{item.text}</span>

            <div className="actions">
              <button onClick={() => changeStatus(index, "progress")}>➡️</button>
              <button onClick={() => { setSelectedTask(index); setModalShow(true); }}>✏️</button>
              <button onClick={() => handleDelete(index)}>🗑️</button>
            </div>
          </div>
        )
      )}
    </div>

    {/* PROGRESS */}
    <div className="column">
      <h4>En cours</h4>
      {list.map((item, index) =>
        item.status === "progress" && (
          <div className="card" key={index}>
            <span>{item.text}</span>

            <div className="actions">
              <button onClick={() => changeStatus(index, "done")}>➡️</button>
              <button onClick={() => { setSelectedTask(index); setModalShow(true); }}>✏️</button>
              <button onClick={() => handleDelete(index)}>🗑️</button>
            </div>
          </div>
        )
      )}
    </div>

    {/* DONE */}
    <div className="column">
      <h4>Terminées</h4>
      {list.map((item, index) =>
        item.status === "done" && (
          <div className="card" key={index}>
            <span>{item.text}</span>

            <div className="actions">
              <button onClick={() => { setSelectedTask(index); setModalShow(true); }}>✏️</button>
              <button onClick={() => handleDelete(index)}>🗑️</button>
            </div>
          </div>
        )
      )}
    </div>

  </div>

</Container>
<EditTaskModal
        show={modalShow}
        list={list}
        setList={setList}
        selectedTask={selectedTask}
        onHide={() => setModalShow(false)}
      />
     </>
   )
 
}
   
export default App