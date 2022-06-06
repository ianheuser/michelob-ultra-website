<script>
    export let small = false;
    console.log((small) ? 'hello' : 'poo');
</script>

<div class="card">
    <img class="photo" src="/img/burgers.png" alt="Burgers" />
    <div class="row">
        <div class="recipeInfo">
            <b class="recipeName">Buffallo Turkey Burgers</b>
            <span class="pairsWith">Pairs with Michelob ULTRA</span>
        </div>
        <div class="pair">
            <img src="/img/canUltra.png" alt="A can of ULTRA" />
        </div>
    </div>
</div>


<style>
    .photo {
       /* background-image: url(/img/burgers.png); */
        width: 450px;
        height: 450px;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .card {
        max-width: 450px;
        background: #FFFFFF;
        box-shadow: 0px 3px 8px -1px rgb(0 0 0 / 25%);
        display: flex;
        flex-direction: column;
    }

    .row {
        display: flex;
        flex-direction: row;
        padding: 15px 30px;
    }

    .pair{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .recipeInfo {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        font-size: 1.13em;
    }

</style>
