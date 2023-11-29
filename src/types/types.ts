export interface User {
	img: string
	name: string
	email: string
}

export interface UserWithId extends User {
	id: string
}
