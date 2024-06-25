<script>
    export let title = '';
	export let image = { url: '', alt: '' };
</script>

<style>

    .card-container {
        position: relative;
        transition: all 0.3s ease-in-out;
        padding-bottom: 0 !important;
    }

    .image-container {
        position: relative;
        height: 100%; /* Adjust based on your design requirements */
        width: 100%;
        overflow: hidden;
    }

    
</style>

<div class="w-full">
    <div class="card-container bg-navy-700 mx-auto hover:bg-navy-600 transition duration-300 ease-in-out">
        <div class="image-container relative h-32 md:h-56 2xl:h-64">
            <img src={image.url} alt={image.alt} class="object-cover w-full h-full"/>
        </div>

        {#if title !== ''}
            <h2 class="text-white text-center font-bold text-2xl py-2">{title}</h2>
        {/if}

    </div>
</div>
