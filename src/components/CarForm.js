import { useSelector, useDispatch } from "react-redux";
import { changeName, changeCost, addCar } from "../store";

export default function CarForm() {
	const { name, cost } = useSelector((state) => state.form);
	const dispatch = useDispatch();

	const handleChangeName = (e) => {
		dispatch(changeName(e.target.value));
	};

	const handleChangeCost = (e) => {
		const carCost = parseInt(e.target.value) || 0;
		dispatch(changeCost(carCost));
	};

	const handleFormSubmit = () => {
		const data = {
			name,
			cost,
		};
		dispatch(addCar(data));
	};

	return (
		<div>
			<label>Name</label>
			<input value={name} onChange={handleChangeName} className="border-2" />
			<label>Cost</label>
			<input
				value={cost || ""}
				onChange={handleChangeCost}
				type="number"
				className="border-2"
			/>
			<button
				onClick={handleFormSubmit}
				className="bg-orange-400 px-2 py-1 text-white rounded-full shadow-2xl"
			>
				ADD
			</button>
		</div>
	);
}
