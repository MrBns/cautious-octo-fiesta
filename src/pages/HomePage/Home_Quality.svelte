<script lang="ts">
	import { IMG_EGGS_IN_BOWL } from '~/assets/img';
</script>

<section class="">
	<!-- Empty Height Block -->
	<div class="height1_block mt-b0 h-[50px] lg:mb-0 lg:h-[157px]"></div>
	<div class="flex flex-col p-3 lg:flex-row lg:p-0 lg:px-0">
		<div class="m-1 lg:w-1/2">
			<img
				src={IMG_EGGS_IN_BOWL}
				class="h-[446px] w-full rounded-2xl object-cover object-center lg:h-[680px]"
				alt=""
			/>
		</div>
		<div
			class="m-1 space-y-4 rounded-2xl bg-[#fce9df] px-5 py-4 lg:w-1/2 lg:space-y-8 lg:px-[122px]"
		>
			<p class="text-[19px] font-medium text-[#dfa58d]">Wholesome Goodness</p>
			<h1 class="font-serif text-[32px] leading-tight text-[#242121] lg:text-[48px]">
				Discover the Exceptional Quality of Tunisian
			</h1>
			<p class="text-base font-medium text-[#635957] lg:text-lg lg:leading-loose">
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
