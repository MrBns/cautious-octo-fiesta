<script lang="ts">
	import { IMG_TREE_LOGO } from '~/assets/img';
	import footerLinksData from '~/lib/data/footerLinksData';

	let { ...restProps }: {} = $props();
</script>

<footer class="bg-[#cde8e6]">
	<div class="max-w-[1920px] p-8 lg:pb-[80px] xl:p-[120px]">
		<div class="flex flex-col lg:flex-row">
			<div class="flex shrink-0 items-center pr-16 lg:block lg:w-[300px]">
				<img src={IMG_TREE_LOGO} alt="" class="size-[48px] lg:size-[96px]" />
				<h2 class="text-2xl">Gourmandises</h2>
				<p class="hidden text-[#3d4244] lg:mt-10 lg:block">
					© 2024 Gourmandises, Inc. <br /> All rights reserved.
				</p>
			</div>
			<div class="mt-5 flex flex-1 flex-wrap gap-y-10 lg:mt-0 lg:gap-y-0">
				{#each footerLinksData as link}
					<div class="w-1/2 lg:w-full lg:flex-1">
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
		<div class="mt-5 lg:hidden">
			<p class=" text-[#3d4244] lg:mt-10">
				© 2024 Gourmandises, Inc. <br /> All rights reserved.
			</p>
		</div>
	</div>
</footer>
