// const showPeople = (people) => {
//   const newPeople = people
//     .map((person) => {
//       const { name, job } = person;
//       return `<p>${name} <strong>${job}</strong></p>`;
//     })
//     .join('');
//   return newPeople;
// };

// // name must match (showPeople)
// // can only have one default
// export default showPeople;

// other way to do default
export default (people) => {
	const newPeople = people
		.map((person) => {
			const { name, job } = person;
			return `<p>${name} <strong>${job}</strong></p>`;
		})
		.join('');
	return newPeople;
};
