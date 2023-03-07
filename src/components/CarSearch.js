import { changeSearchTerm } from "../store";
import { useSelector, useDispatch } from "react-redux";
export default function CarSearch() {
	const dispatch = useDispatch();
	const { searchTerm } = useSelector((state) => state.cars);

	const handleInputChange = (e) => {
		dispatch(changeSearchTerm(e.target.value));
	};

	return (
		<div>
			<input value={searchTerm} onChange={handleInputChange} />
		</div>
	);
}
