import React, { useState, useEffect, useRef, useCallback } from 'react';
// import Data from './Data';
import Form from './Form';
// import ToDoList from './ToDoList';
import DoneListItem from './DoneListItem';
//console.log(Data[0])

const toDoListData = [
	{
		title: 'Learn more about React',
		completed: true
	},
	{
		title: 'Write a new Component',
		completed: false
	},
	{
		title: 'Add some style',
		completed: false
	}
];

export default function App(props) {
	const [toDoList, setToDoList] = useState(toDoListData);
	const [doneList, setDoneList] = useState([]);

	//console.log(toDoList[0]);

	// useEffect(() => {
	// 	(async () => {
	// 		try {
	//
	// 		} catch (error) {
	// 			console.error(error);
	// 		}
	// 	})();
	// }, []);

	//handle submit - I could not make this work like documentation. It
	//did a callback even without button being clicked.
	//index:
	// const handleDone = index => {
	// 	console.log(`handleDone index: ${index}`);
	// 	const newDoneList = [...doneList];
	// 	newDoneList[index].completed = true;
	// 	setDoneList(newDoneList);
	// };

	//I mapped a new list because I couldn't work with the children of the old
	// list. I don't know what that means but regardless, I can't see why
	// this only maps the new item instead of the new and old list:
	const handleDone = item => {
		// console.log(`handleDone index: ${item}`);
		item.completed = true;

		const newDoneList = [item, ...doneList];
		const mappedDoneList = newDoneList.map(listItem => {
			return (
				<>
					<li key={listItem.title}>
						<div>{listItem.title}</div>
					</li>
				</>
			);
		});
		setDoneList(mappedDoneList);
	};

	// I copied this version from Madeline's sandbox to try a different
	// handle method on the form but I couldn't get to the form bugs:
	const handleFormSubmit = item => {
		setToDoList([{ title: item }, ...toDoList]);
	};

	const listItems = toDoList.map((item, index) => {
		return (
			<>
				<li
					key={item.title}
					onClick={event => {
						event.preventDefault();
						// handleDone(index);
						handleDone(item);
					}}
				>
					<div>{item.title}</div>
					{!item.completed && <button>Done</button>}
				</li>
			</>
		);
	});

	// const doneItems = toDoList.map(item => (
	// 	<>
	// 		{item.completed && (
	// 			<li key={item.title}>
	// 				<div>{item.title}</div>
	// 			</li>
	// 		)}
	// 	</>
	// ));

	return (
		<div className="Page-wrapper">
			<h2>To Do List</h2>
			<ul>{listItems}</ul>
			{/*<Form newToDoItem={newToDoItem} />*/}
			<h2>Done List</h2>
			<ul>{doneList}</ul>
		</div>
	);
}

/*
Issues: I'm struggling to import the components, create a unique key
and to handleChange events.

Pseudocode:
 */
