import { useState  } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getUser } from "../../Utilities/users-service";
import NewNotePage from '../NewNotePage/NewNotePage';
import AuthPage from '../AuthPage/AuthPage';
import NoteListPage from '../NoteListPage/NoteListPage';
import NavBar from '../../Components/NavBar/NavBar';
import './App.css';

export default function App() {
    const [user, setUser] = useState(getUser());
    const [notes, setNotes] = useState([]);
    const noteReminder =  notes.length !== 0 ? '' : 'No Notes Yet! Take Note of this Dire Situation!';

    return (
        <main className="App">
            { user ?
                <>
                    <NavBar user={user} setUser={setUser} />
                    <h1>Quick Notes</h1>
                    <h2>{ noteReminder }</h2>
                    <Routes>
                        {/* Route components go in here */}
                        <Route path="/notes/new" element={<NewNotePage setNotes={setNotes} />} />
                        <Route path="/notes" element={<NoteListPage notes={notes} setNotes={setNotes} user={user} />} />
                    </Routes>
                </> 
                :
                <>
                    <h1>Home Page</h1>
                    <AuthPage setUser={setUser} />
                </>
            }
        </main>
    );
}


