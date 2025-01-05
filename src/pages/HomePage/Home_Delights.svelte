<script lang="ts">
	import { IMG_SMOOTH_CREAMY } from '~/assets/img';
	import FeatureProductCard from '~/components/cards/FeatureProductCard.svelte';

	let { ...restProps }: {} = $props();
</script>

<section class="bg-[#fff7f5] py-12 lg:py-24">
	<div class="max-w-[1920px] px-[7%]">
		<div class="mb-5 text-center lg:mb-20">
			<h1 class="font-serif text-[32px] text-[#231f21] lg:text-[53px]">Artisanal Delights</h1>
		</div>
		<div class="grid grid-cols-1 gap-10 lg:grid-cols-3">
			<FeatureProductCard
				data={{
					img: IMG_SMOOTH_CREAMY,
					title: 'Smooth',
					subtitle: 'creamy',
					link: '/'
				}}
			/>
			<FeatureProductCard
				data={{
					img: IMG_SMOOTH_CREAMY,
					title: 'Smooth',
					subtitle: 'creamy',
					link: '/'
				}}
			/>
			<FeatureProductCard
				data={{
					img: IMG_SMOOTH_CREAMY,
					title: 'Smooth',
					subtitle: 'creamy',
					link: '/'
				}}
			/>
		</div>
	</div>
</section>
