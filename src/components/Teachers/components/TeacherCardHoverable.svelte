<script>

    let hover;
	let enter = () => (hover = true)
	let leave = () => (hover = false)
</script>

<div
on:mouseenter={enter}
on:mouseleave={leave}
class="flex h-full card-block"
>
<div class="m-auto">
	<slot {hover}>
 
	</slot>
</div>

</div>