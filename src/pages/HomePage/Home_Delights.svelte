<script lang="ts">
	import { IMG_SMOOTH_CREAMY } from '~/assets/img';
	import FeatureProductCard from '~/components/cards/FeatureProductCard.svelte';

	let { ...restProps }: {} = $props();
</script>

<section class="bg-[#fff7f5] py-24">
	<div class="max-w-[1920px] px-[7%]">
		<div class="mb-20 text-center">
			<h1 class="font-serif text-[53px] text-[#231f21]">Artisanal Delights</h1>
		</div>
		<div class="flex gap-x-10">
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
