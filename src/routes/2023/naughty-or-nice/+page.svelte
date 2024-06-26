<script lang="ts">
	export let data;
</script>

<div class="container">
	{#await data.naughtyOrNice}
		Loading Santa's list...
	{:then naughtyOrNice}
		<table>
			<thead>
				<th>Name</th>
				<th>Goodness Level</th>
			</thead>
			<tbody>
				{#each naughtyOrNice as child}
					<tr class={child.tally > 0 ? 'nice' : 'naughty'}>
						<td class={child.tally >= 0 ? 'pico-color-green-150' : 'pico-color-red-500'}
							>{child.name}</td
						>
						<td class={child.tally >= 0 ? 'pico-color-green-150' : 'pico-color-red-500'}
							>{child.tally}</td
						>
					</tr>
				{/each}
			</tbody>
		</table>
	{/await}
</div>

<style>
	table {
		border-collapse: separate;
		border-spacing: 2px;
	}
	td,
	th {
		text-align: center;
	}
</style>
