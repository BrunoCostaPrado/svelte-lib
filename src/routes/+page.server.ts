import { superValidate } from "sveltekit-superforms/server"
import { fail } from "@sveltejs/kit"
import { user } from "$lib"

export const load = async (event) => {
	const form = await superValidate(event, user)
	return { form }
}

export const actions = {
	default: async (event) => {
		const form = await superValidate(event, user)
		// console.log(form)

		if (!form.valid) {
			return fail(400, { form })
		}
		return { form }
	}
}
