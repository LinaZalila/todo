// import React, { useState } from 'react'
// import { Button } from 'react-bootstrap'
// import { Link, Navigate, useNavigate } from 'react-router-dom'
// import { Container, Row, Col, Form, ListGroup } from "react-bootstrap";



//  export default function Home() {
//   const navigate=useNavigate()
//    return (
        
//      <div className="text-center mt-3">

//        <h1>Stay Organized Every Day</h1>
    

//        <div>
//           <img
//           src="/img todo.png"
        
//          alt="todo"
//          width="300px"

//          />
       
       

//       {/* <p className="text-muted fs-5 mt-3" >Organize your daily tasks easily</p> */}
//       </div>
//       <div className="d-flex justify-content-center gap-3 mt-4">
    
//          <Button onClick={() => navigate('/contact-us')}>
//            Go to contact us
//          </Button>
//          <Button onClick={() => window.location.href = '/about'}>
//            Go to about
//          </Button>
//           {/* {<Link to="/todo" > }
//            Go to todo
//          </Link> */}
//           <Button as={Link} to="/todo">
//      Go to todo
//    </Button>
//          </div>
//      </div>  
    
//   )
//  }


// // export default function TodoMicrosoft() {   

// //     const [tasks, setTasks] = useState([]);
// //   const [text, setText] = useState("");

// //   const addTask = () => {
// //     if (!text) return;
// //     setTaskss([...tasks, { id: Date.now(), text, done: false }]);
// //     setText("");
// //   };

// //   const toggleTask = (id) => {
// //     setTasks(tasks.map(t =>
// //       t.id === id ? { ...t, done: !t.done } : t
// //     ));
// //   };

// //   const deleteTask = (id) => {
// //     setTasks(tasks.filter(t => t.id !== id));
// //   };
  

// //   return (
// //     <Container fluid style={{ height: "100vh", padding: 0 }}>
// //       <Row style={{ height: "100%" }}>

// //         {/* 🧭 Sidebar */}
// //         <Col md={3} style={{ background: "#f3f2f1", padding: "20px" }}>
// //           <h4 className="mb-4">📝 My Tasks</h4>

// //           <div className="mb-3">📅 Today</div>
// //           <div className="mb-3">⭐ Important</div>
// //           <div className="mb-3">📌 Planned</div>
// //         </Col>

// //         {/* 📋 Main Content */}
// //         <Col md={9} style={{ padding: "30px" }}>
// //           <h3 className="mb-4">Today</h3>

// //           {/* ➕ Add Task */}
// //           <div className="d-flex gap-2 mb-4">
// //             <Form.Control
// //               placeholder="Add a task..."
// //               value={text}
// //               onChange={(e) => setText(e.target.value)}
// //             />
// //             <Button onClick={addTask}>Add</Button>
// //           </div>

// //           {/* 📌 Task List */}
// //           <ListGroup>
// //             {tasks.map(task => (
// //               <ListGroup.Item
// //                 key={task.id}
// //                 className="d-flex justify-content-between align-items-center"
// //                 style={{
// //                   border: "none",
// //                   borderBottom: "1px solid #ddd"
// //                 }}
// //               >
// //                 <Form.Check
// //                   type="checkbox"
// //                   checked={task.done}
// //                   onChange={() => toggleTask(task.id)}
// //                   label={
// //                     <span style={{
// //                       textDecoration: task.done ? "line-through" : "none"
// //                     }}>
// //                       {task.text}
// //                     </span>
// //                   }
// //                 />

// //                 <Button
// //                   variant="light"
// //                   size="sm"
// //                   onClick={() => deleteTask(task.id)}
// //                 >
// //                   ❌
// //                 </Button>
// //               </ListGroup.Item>
// //             ))}
// //           </ListGroup>

// //         </Col>

// //       </Row>
// //     </Container>
// //   );
// // } 
 
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Home() { 
  const navigate = useNavigate();

  // exemples de données
  const tasks = [""];
const motivations = [
  "Le succès commence par la discipline.",
  "Ne jamais abandonner 💪",
  "Chaque jour est une nouvelle chance",
];

const randomMotivation =
  motivations[Math.floor(Math.random() * motivations.length)];
  return (
    








    <Container className="mt-5">

      {/* 🔹 Section principale */}
      <div className="text-center mb-5">
        <h1>Bienvenue 👋</h1>
        <p>Organisez vos tâches simplement et efficacement</p>

        <Button onClick={() => navigate("/todo")}>
          Voir mes tâches
        </Button>
      </div>

      {/* 🔹 Cartes */}
      {/* <Row>

        Tâches aujourd’hui
        <Col md={4}>
          <Card className="p-3 shadow-sm">
            <h5>📌 Tâches aujourd’hui</h5>
            <p><strong>{tasks.length}</strong> tâches à accomplir</p>
            <Button variant="link" onClick={() => navigate("/todo")}>
              Voir
            </Button>
          </Card>
        </Col>

        {/* Tâches récentes */}
        {/* <Col md={4}>
          <Card className="p-3 shadow-sm">
            <h5>🕒 Tâches récentes</h5> */}

            {/* <ul>
              {tasks.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul> */}

            {/* <Button variant="link" onClick={() => navigate("/todo")}>
              Voir
            </Button>
          </Card>
        </Col> */}

        {/* Motivation */}
        {/* <Col md={4}>
          <Card className="p-3 shadow-sm">
            <h5>💡 Motivation</h5>
            <p>{randomMotivation}</p> */}
            

            {/* <ul>
              <li>✔ Réviser Javascript</li>
              <li>✔ Faire du sport</li>
              <li>✔ Préparer la réunion</li>
      //       </ul> */}
      {/* //     </Card> */}
      {/* //   </Col> */}

      {/* // </Row> } */}

      {/* 🔹 Section Cartes du Haut */}
<Row className="g-4">
  {/* Tâches aujourd’hui */}
  <Col md={4}>
    <div className="p-4 rounded-4 bg-white border border-secondary border-opacity-25 shadow-sm h-100 text-dark">
      <div className="d-flex align-items-center mb-3">
        <span className="me-2 fs-5">📌</span>
        <h6 className="mb-0 text-secondary text-uppercase small fw-bold">Tâches aujourd’hui</h6>
      </div>
      <div className="display-6 fw-bold mb-1"></div>
      <p className="text-secondary small">tâches à accomplir</p>
      <Button variant="link" className="p-0 text-info text-decoration-none mt-2" onClick={() => navigate("/todo")}>
        Voir ➔
      </Button>
    </div>
  </Col>

  {/* Tâches récentes */}
  <Col md={4}>
    <div className="p-4 rounded-4 bg-white border border-secondary border-opacity-25 shadow-sm h-100 text-white">
      <div className="d-flex align-items-center mb-3">
        <span className="me-2 fs-5">🕒</span>
        <h6 className="mb-0 text-secondary text-uppercase small fw-bold">Tâches récentes</h6>
      </div>
      <div className="text-secondary small italic mb-3">Aucune activité récente</div>
      <Button variant="link" className="p-0 text-info text-decoration-none mt-auto" onClick={() => navigate("/todo")}>
        Voir ➔
      </Button>
    </div>
  </Col>

  {/* Motivation */}
  <Col md={4}>
    <div className="p-4 rounded-4 bg-white border border-secondary border-opacity-25 shadow-sm h-100 text-dark">
      <div className="d-flex align-items-center mb-3">
        <span className="me-2 fs-5">💡</span>
        <h6 className="mb-0 text-secondary text-uppercase small fw-bold">Motivation</h6>
      </div>
      <p className="fst-italic text-dark opacity-75">"{randomMotivation}"</p>
    </div>
  </Col>
</Row>










      { /* Section bas */ 
      <Row className="mt-4 justify-content-center" >

      

         { <Col md={6}>
          {/* <Card className="p-3 shadow-sm text-center">
            ✅ tâches terminées <br />
            
          </Card> */}
        </Col> }
      </Row>}
          
       
{ <Row className="justify-content-center g-4 mt-4 px-3"> 
  {/* Carte Tâches Terminées */}
  <Col md={5} lg={4}>
    <div className="p-4 rounded-4 bg-white border border-secondary border-opacity-25 shadow-sm h-100 text-center text-dark">
      <div className="d-flex align-items-center justify-content-center mb-3">
        <span className="me-2">✅</span>
       <div className="mb-0 text-secondary text-uppercase small fw-bold" >tâches terminées</div>
      </div>
      
      <div className="text-success small">Toutes vos tâches sont à jour</div>
    </div>
  </Col>

  {/* { Carte Temps Moyen} */}
  <Col md={5} lg={4}>
    <div className="p-4 rounded-4 bg-white border border-secondary border-opacity-25 shadow-sm h-100 text-center text-dark">
      <div className="d-flex align-items-center justify-content-center mb-2">
        <span className="me-2">⏳</span>
        <h6 className="mb-0 text-secondary text-uppercase small fw-bold">Performance</h6>
      </div>
      <div className="display-6 fw-bold text-info">36 min</div>
      <div className="text-secondary small">Durée moyenne par tâche</div>
    </div>
  </Col>
</Row>
  
}



    </Container>
  );

}
