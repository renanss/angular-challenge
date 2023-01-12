//Create a mock of 10 random users

import {faker} from "@faker-js/faker";

export const user = () => {
	const name = faker.name.fullName();
	const email = faker.internet.email();
	const password = faker.internet.password();
	const phone = faker.phone.phoneNumber();
	const avatar = faker.image.avatar();
	const id = Math.random().toString(36).substr(2, 9);

	return {
		name,
		email,
		password,
		phone,
		avatar,
		id
	};
}

export const generateUsers = (min: number, max: number) => {
	const numberOfUsers = Math.floor(Math.random() * (max - min + 1)) + min;
	return Array(numberOfUsers).fill(null).map(() => user());
}