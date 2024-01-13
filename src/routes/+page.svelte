<script lang="ts">
	import { superForm } from "sveltekit-superforms/client"
	import type { PageData } from "./$types"
	import { user } from "$lib/types"
	export let data: PageData
	import { Button } from "$lib/components/ui/button"
	import SuperDebug from "sveltekit-superforms/client/SuperDebug.svelte"

	const { form, errors, enhance, constraints } = superForm(data.form, {
		taintedMessage: "Certeza que quer sair?",
		validators: user
	})
	// console.log(form)
</script>

<SuperDebug data={$form} />
<article class="flex flex-col">
	<header>
		<h1 class="mb-0 flex-col bg-slate-600 inline">Login</h1>
	</header>

	<form method="POST" use:enhance>
		<label for="email" class="flex flex-col">Email address</label>
		<input type="email" id="email" name="email" bind:value={$form.email} class="flex flex-col" />
		{#if $errors.email}
			<small>{$errors.email}</small>
		{/if}

		<label for="password" class="flex flex-col">Password</label>
		<input
			type="text"
			id="password"
			name="password"
			bind:value={$form.password}
			class="flex flex-col"
		/>
		{#if $errors.password}
			<small>{$errors.password}</small>
		{/if}

		<br />
		<Button type="submit" class="flex flex-col bg-blue-800">Login</Button>
	</form>
</article>
