import { useSelector } from "react-redux";
export default function CarValue() {
	const filteredCars = useSelector(({ cars: { cars, searchTerm } }) =>
		cars.filter((car) =>
			car.name.toLowerCase().includes(searchTerm.toLowerCase())
		)
	);
	const total_cost = filteredCars.reduce((acc, car) => {
		return acc + car.cost;
	}, 0);
	return <div>{total_cost}</div>;
}
