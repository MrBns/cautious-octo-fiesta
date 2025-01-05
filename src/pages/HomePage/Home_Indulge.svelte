<script lang="ts">
	import { IMG_BOTTLES_OF_YAMMY, IMG_SMOOTHEST_YAMMY_BISKITS } from '~/assets/img';
</script>

<section class="bg-[#fbede4]">
	<div class="p-5 lg:p-0">
		<div class="flex flex-col lg:flex-row">
			<div class="grid place-items-center lg:w-1/2 lg:px-24">
				<div class="max-w-[750px] space-y-4 lg:space-y-0">
					<h1 class="font-serif text-[32px]/tight text-[#2d2929] lg:mb-6 lg:text-[54px]">
						Indulge in the Finest Tunisian <span class="lg:hidden">Tunisian Delicacies</span>
					</h1>
					<p class="font-medium leading-snug text-[#807979] lg:text-lg lg:leading-loose">
						Discover the essence of Tunisian cuisine at Gourmandises Lmmima. Our curated selection
						of gourmet products celebrates the rich flavors and healthy attributes of the
					</p>

					<div class="flex flex-col gap-x-12 md:flex-row lg:mt-12">
						<button class="rounded-xl bg-[#e2535d] px-8 py-2 text-lg font-semibold text-[#fbc8c8]"
							>Shop More</button
						>

						<button class="  mt-4 text-left text-lg font-medium text-[#e08d8b] lg:mt-0"
							>Explore More
						</button>
					</div>
				</div>
			</div>

			<div class="mt-4 lg:mt-0 lg:w-1/2">
				<img
					src={IMG_SMOOTHEST_YAMMY_BISKITS}
					alt=""
					class="max-h-[380px] w-full max-w-[924px] rounded-lg lg:max-h-[960px]"
				/>
			</div>
		</div>
	</div>
</section>
