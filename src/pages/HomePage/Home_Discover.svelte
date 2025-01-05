<script lang="ts">
	import { IMG_BOTTLES_OF_YAMMY } from '~/assets/img';
</script>

<section class="bg-[#fffbfb]">
	<div class="px-5 py-8 lg:py-0">
		<div class="flex flex-col lg:flex-row">
			<div class="lg:w-1/2 lg:px-24 lg:pt-[130px]">
				<div class="max-w-[640px] space-y-4 lg:space-y-0">
					<p class="text-xl font-medium text-[#d98f80] lg:mb-6">Embrace Healthy Living</p>
					<h1 class="max-w-[565px] font-serif text-[32px] text-[#2d2929] lg:mb-6 lg:text-[54px]">
						Discover the Heart of Tunisian Cuisine
					</h1>
					<p class="font-medium text-[#9a989a] lg:text-lg lg:leading-loose">
						At Gourmandises Lmmima, we are committed to promoting a healthy lifestyle by offering a
						wide range of high-quality, Tunisian-inspired products. Our mission is to share the rich
						culinary heritage of Tunisia with the world, one delicious bite at a time
					</p>

					<div class="flex flex-col gap-x-12 gap-y-4 lg:mt-12 lg:flex-row">
						<button class="rounded-xl bg-[#c0451d] px-8 py-2 text-lg font-semibold text-[#fbcdb3]">
							Explore More
						</button>

						<button class="font-lg text-[#dea48b]"> Elevate Your Palate </button>
					</div>
				</div>
			</div>

			<div class="mt-6 lg:mt-0 lg:w-1/2">
				<img src={IMG_BOTTLES_OF_YAMMY} alt="" />
			</div>
		</div>
	</div>
</section>
