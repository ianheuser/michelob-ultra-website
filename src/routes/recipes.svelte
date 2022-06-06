
<script context="module" >
	export const prerender = true;
</script>

<script >
	import RecipeCard from '$lib/RecipeCard.svelte';
</script>


<div class="recipes">

    <div class="food">
        <h3>Food Pairing Recipes</h3>
        <div class="cardRow">
            <RecipeCard small=false/>
            <RecipeCard small=true/>
            <RecipeCard small=true/>
        </div>
    </div>

    <div class="drinks">
        <h5>Drink Recipes</h5>
        <div class="cardRow">
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
        </div>
    </div>

</div>

<style>
    .cardRow{
        display: flex;
        flex-direction: row;
        gap: 30px;
        justify-content: space-around;
    }
</style>
<!--
<section class="builderZone">
	<BuilderSDK.RenderContent model="page" {content} api-key={BUILDER_PUBLIC_API_KEY} />
</section>


<style>
	.builderZone {
		padding: 40px;
		background-color: rgba(0,0,0, 0.05);
	}
</style>

-->

