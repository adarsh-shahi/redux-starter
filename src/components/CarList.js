import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

export default function CarList() {
	const dispatch = useDispatch();

	const cars = useSelector(({ cars: { cars, searchTerm } }) => {
		return cars.filter((car) =>
			car.name.toLowerCase().includes(searchTerm.toLowerCase())
		);
	});

	const { name } = useSelector((state) => {
		return state.form;
	});

	const handleDelete = (id) => {
		dispatch(removeCar(id));
	};

	const renderedCars = cars.map((car) => {
		return (
			<div className="flex" key={car.id}>
				<div
					className={
						name.length > 1 &&
						car.name.toLowerCase().includes(name.toLowerCase())
							? "text-lg font-semibold"
							: ""
					}
				>
					{car.name} - ${car.cost}
				</div>
				<button onClick={() => handleDelete(car.id)}>Delete</button>
			</div>
		);
	});
	return <div>{renderedCars}</div>;
}
