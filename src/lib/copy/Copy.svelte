<script>
	export let highlighted = true
</script>

<p
	class="text-2xl leading-[calc(36/24)] lg:max-w-[754px] [&:not(:last-child)]:mbe-12 lg:[&:not(:last-child)]:mbe-8"
>
	<span class={highlighted ? 'bg-primary' : ''}>
		<slot />
	</span>
</p>
