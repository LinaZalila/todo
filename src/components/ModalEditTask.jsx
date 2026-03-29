import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



export default function EditTaskModal(props) {
    const { list, setList, selectedTask } = props; // on reçoit la liste, la fonction pour mettre à jour la liste et l'index de la tâche sélectionnée en props
    const [inputValue, setInputValue] = useState(list[selectedTask]?.text ); // state pour stocker la nouvelle valeur de la tâche à éditer, initialisée avec le texte de la tâche sélectionnée ou une chaîne vide si aucune tâche n'est sélectionnée
    useEffect(() => {
        if (selectedTask !== null) {
            setInputValue(list[selectedTask]?.text || ""); // mettre à jour l'inputValue lorsque selectedTask change
        }
    }, [selectedTask]);

    
    
    const handleEdit = () => {
   
    if (inputValue !== null && inputValue.trim() !== "") {
      const newList = [...list]
      newList[selectedTask] = { ...newList[selectedTask], text: inputValue }
      setList(newList)
        props.onHide() // on ferme le modal après la modification
        
    }
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Edit Task
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" placeholder="Edit your task here..." className="form-control" />

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleEdit} variant="primary">Save</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


