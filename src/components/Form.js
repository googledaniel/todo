import React from 'react';

export default function Form(props) {
	return (
		<form onSubmit={newToDoItem}>
			<label>
				Task: <input type="text" ref={title} />
			</label>

			<br />
			<input type="submit" value={'Add'} />
		</form>
	);
}
