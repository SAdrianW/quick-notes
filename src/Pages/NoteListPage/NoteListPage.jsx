import { useState } from 'react';

export default function NoteListPage({ notes, setNotes, user }) {
	// notes is an array
	function addNote(data){
		setNotes([...notes, data])
	};
    const [newNote, setNewNote] = useState({ text: '', user: {user} });
	const noteReminder =  notes.length !== 0 ? '' : 'No Notes Yet! Take Note of this Dire Situation!';
	
	const noteList = notes.filter(note => note.user === user).map(note => 
		(
		<div classname="noteCard">
			<p>{note.text}</p>
			<p>{(note.timestamps).toLocaleString()}</p>
			<p>{(note.createdAt).toLocaleString()}</p>
		</div>
		)
	);

	async function _handleAddNote(evt) {
		evt.preventDefault();
		addNote({newNote});
		setNewNote({text: ''});
		// try {
		// 	const formData = {text};
		// 	console.log(formData);
		// 	setNotes(...formData, newNote)

		// } catch {
		// 	new Error('Bad Note');
		// }
	}

    return (
        <main>
            <h1>Note List Page</h1>
			<form autoComplete='off' onSubmit={_handleAddNote}>
				<textarea 
				name="text"
				value={newNote}
				onChange={(evt) => setNewNote(evt.target.value)}
				placeholder="New Note"
				required
				pattern=".{4,}"
				></textarea>
				<button type='submit'>Add Note</button>
			</form>
            <h3>{noteReminder}</h3>
			{noteList}
        </main>
    )
};




// import './MenuList.css';
// import MenuListItem from '../MenuListItem/MenuListItem';

// export default function MenuList({ menuItems }) {
//   const items = menuItems.map(item =>
//     <MenuListItem
//       key={item._id}
//       menuItem={item}
//     />
//   );
//   return (
//     <main className="MenuList">
//       {items}
//     </main>
//   );
// }

// import './MenuListItem.css';

// export default function MenuListItem({ menuItem }) {
//   return (
//     <div className="MenuListItem">
//       <div className="emoji flex-ctr-ctr">{menuItem.emoji}</div>
//       <div className="name">{menuItem.name}</div>
//       <div className="buy">
//         <span>${menuItem.price.toFixed(2)}</span>
//         <button className="btn-sm" onClick={() => console.log('clicked')}>
//           ADD
//         </button>
//       </div>
//     </div>
//   );
// }