<script lang="ts">
	import { IMG_EGGS_IN_BOWL } from '~/assets/img';
</script>

<section class="">
	<!-- Empty Height Block -->
	<div class="height1_block h-[157px]"></div>
	<div class="flex">
		<div class="m-1 w-1/2">
			<img
				src={IMG_EGGS_IN_BOWL}
				class="h-[680px] w-full rounded-2xl object-cover object-center"
				alt=""
			/>
		</div>
		<div class="m-1 w-1/2 space-y-8 rounded-2xl bg-[#fce9df] px-[122px] py-4">
			<p class="text-[19px] font-medium text-[#dfa58d]">Wholesome Goodness</p>
			<h1 class="font-serif text-[48px] leading-tight text-[#242121]">
				Discover the Exceptional Quality of Tunisian
			</h1>
			<p class="text-lg font-medium leading-loose text-[#635957]">
				Nourish your body and soul with our carefully curated selection of Tunisian delicacies. From
				fragrant spices and aromatic oils to decadent spreads and honey, each product is handpicked
				to ensure the highest standards of quality and authenticity. Explore the vibrant flavors
				that capture the essence of Tunisian cuisine and elevate your culinary
			</p>
			<button class="explore-button rounded-xl px-6 py-2 text-xl font-semibold text-[#fbcdb3]">
				Explore More
			</button>
			<p class="text-[#df9981]">Save the difference</p>
		</div>
	</div>
</section>

<style lang="postcss">
	.height1_block {
		background: linear-gradient(#f6e9e4 0%, #f6e9e4 100%);
	}

	.explore-button {
		background: linear-gradient(#c0451d 0%, #c0451d 100%);
	}
</style>
