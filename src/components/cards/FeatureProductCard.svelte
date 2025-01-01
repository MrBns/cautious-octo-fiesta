<script lang="ts">
	let {
		data,
		...restProps
	}: {
		data: {
			img: string;
			title: string;
			subtitle: string;
			link: string;
		};
	} = $props();
</script>

<a href={data.link} class="block">
	<div class="">
		<img src={data.img} alt="" class="rounded-xl" />
	</div>
	<div class="mt-9 text-center">
		<h3 class="text-[23px]/[28px] text-[#6c696b]">{data.title}</h3>
		<p class="text-sm text-[#b3afb0]">{data.subtitle}</p>
	</div>
</a>
