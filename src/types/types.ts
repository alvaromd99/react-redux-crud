export interface User {
	img: string
	name: string
	email: string
}

export interface UserWithId extends User {
	id: string
}

// From types
interface CustomElements extends HTMLFormControlsCollection {
	name: HTMLInputElement
	email: HTMLInputElement
}

export interface CustomForm extends HTMLFormElement {
	readonly elements: CustomElements
}

// Error types
type Error = null | boolean

export interface ErrorInterface {
	name: Error
	email: Error
}
