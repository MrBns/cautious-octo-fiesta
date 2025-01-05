<script lang="ts">
	import { IMG_HEADER_BG } from '../../assets/img';
</script>

<header class="h-[411px] lg:h-[780px]" style="--headerBg:url({IMG_HEADER_BG})">
	<div class="relative grid h-full place-items-center">
		<div class="max-w-[500px] space-y-4 p-10 text-center">
			<h1 class="font-serif text-[32px]/tight lg:text-[64px]/tight">Discover the Flavors of</h1>
			<p class="text-base/tight font-medium text-[#554d4d] lg:text-lg">
				Immerse yourself in the aroma and taste of authentic Tunisian cuisine. Gourmandises Lmmima
				offers a curated selection of healthy
			</p>
			<button class="!mt-7 w-full rounded-full bg-[#e3571a] px-4 py-2 font-medium text-white"
				>Shop Now</button
			>
		</div>
	</div>
</header>

<style lang="postcss">
	header {
		background: var(--headerBg) center center;
		background-size: cover;
	}
</style>
