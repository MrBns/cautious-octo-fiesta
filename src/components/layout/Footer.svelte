<script lang="ts">
	import { IMG_TREE_LOGO } from '~/assets/img';
	import footerLinksData from '~/lib/data/footerLinksData';

	let { ...restProps }: {} = $props();
</script>

<footer class="bg-[#cde8e6]">
	<div class="max-w-[1920px] p-[120px] pb-[80px]">
		<div class="flex">
			<div class="w-[300px] shrink-0 pr-16">
				<img src={IMG_TREE_LOGO} alt="" class="size-[96px]" />
				<p class="mt-10 text-[#3d4244]">© 2024 Gourmandises, Inc. <br /> All rights reserved.</p>
			</div>
			<div class="flex flex-1">
				{#each footerLinksData as link}
					<div class="flex-1">
						<h5 class="mb-2 font-semibold text-[#3d4244]">{link[0]}</h5>
						<ul class="">
							{#each link[1] as l}
								<li class="">
									<a href={l.link} class="my-2 inline-block text-[#3d4244]">{@html l.text}</a>
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</div>
	</div>
</footer>
