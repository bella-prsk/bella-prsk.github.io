<script>
    export let title = '';
	export let image = { url: '', alt: '' };
    export let opt = '';
    export let description = '';
</script>

<style>

    .card-container {
        position: relative;
        transition: all 0.3s ease-in-out;
        padding-bottom: 0 !important;
    }

    .image-container {
        position: relative;
        height: 100%;
        width: 100%;
        overflow: hidden;
    }

    .description {
        white-space: pre-line;
    }
    
</style>

{#if opt === '1'}
    <div class="w-full">
        <div class="card-container bg-navy-700 mx-auto hover:bg-navy-600 transition duration-300 ease-in-out">
            <div class="image-container relative h-32 md:h-56 2xl:h-64">
                <img src={image.url} alt={image.alt} class="w-full h-full"/>
            </div>

            {#if title !== ''}
                <h2 class="text-white text-center font-bold text-lg md:text-2xl py-2">{title}</h2>
            {/if}
        </div>
    </div>

{:else if opt === '2'}

    <div class="w-full">
        <div class="card-container bg-navy-700 mx-auto p-5 lg:p-10 hover:bg-navy-600 transition duration-300 ease-in-out">
            {#if title !== ''}
                <h2 class="text-white font-bold text-2xl mb-2">{title}</h2>
            {/if}

            {#if description !== ''}
                <p class="description text-white font-extralight mb-5">
                    {description}
                </p>
            {/if}
            <div class="image-container relative h-32 md:h-56 2xl:h-64">
                <img src={image.url} alt={image.alt} class="w-full h-full"/>
            </div>
        </div>
    </div>

{/if}


