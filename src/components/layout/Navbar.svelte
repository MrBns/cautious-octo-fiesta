<script lang="ts">
</script>

{#snippet navLink(text: string, link: string)}
	<li>
		<a href={link} class="inline-block px-4 py-2">{@html text}</a>
	</li>
{/snippet}

<nav class="px-[8%] py-4">
	<div class="">
		<div class="navbar-container flex items-center justify-between">
			<div class="logo">
				<p class="bold text-xl">Logo</p>
			</div>
			<div class="nav-links hidden md:block">
				<ul class="flex">
					{@render navLink('Home', '/')}
					{@render navLink('About', '/')}
					{@render navLink('Products', '/')}
					{@render navLink('Contact', '/')}
				</ul>
			</div>
		</div>
	</div>
</nav>

<!-- <style lang="postcss">
</style> -->
