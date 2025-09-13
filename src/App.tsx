import {useState} from "react";
import "./App.css"

type NextButtonProps = {
	onClick: () => void,
};

function NextButton(props: NextButtonProps) {
	return (
		<button
			onClick={props.onClick}
			className="text-lg bg-gradient-to-br from-green-700 to-green-400 px-12 py-3 rounded-lg shadow-lg transform hover:scale-105 active:scale-95"
		>
			Next
		</button>
	)
}

function randomNote(): string {
	const allNotes: Array<string> =
		["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B", "C"];

	return allNotes[Math.floor(Math.random() * allNotes.length)];
}

type NoteDisplayProps = {
	currentNote: string,
};

function NoteDisplay(props: NoteDisplayProps) {
	return <h1 className="text-[210px] font-bold box-shadow-xl">{props.currentNote}</h1>
}

export default function App() {
	const [currentNote, setCurrentNote] = useState<string>(randomNote());
	
	return (
		<div className="Body flex flex-col items-center justify-center h-screen bg-neutral-800 text-stone-200">
			<NoteDisplay currentNote={currentNote}></NoteDisplay>
			<NextButton onClick={() => setCurrentNote(randomNote())}></NextButton>
		</div>
	);
}
