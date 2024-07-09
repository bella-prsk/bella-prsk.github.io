<script>
    import Tag from './Tag.svelte';

    export let title = '';
	export let image = { url: '', alt: '', onLoad: () => {} };
    export let opt = '';
    export let description = '';

    export let fileData;
    export let colors = '';

</script>

<style>

    .card-container {
        position: relative;
        transition: all 0.3s ease-in-out;
        padding-bottom: 0 !important;
    }

    .text-container {
        position: relative;
        transition: all 0.3s ease-in-out;
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
            <div class="p-5 lg:p-10">
                {#if title !== ''}
                    <h2 class="text-white font-bold text-xl">{title}</h2>
                {/if}
            </div>
            <div class="image-container relative h-32 md:h-56 2xl:h-64">
                <img src={image.url} alt={image.alt} on:load="{image.onLoad}" class="w-full h-full"/>
            </div>
        </div>
    </div>

{:else if opt === '2'}

    <div class="w-full">
        <div class="card-container bg-navy-700 mx-auto p-5 lg:p-10 hover:bg-navy-600 transition duration-300 ease-in-out">
            {#if title !== ''}
                <h2 class="text-white font-bold text-xl mb-2">{title}</h2>
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

{:else if opt === '3'}

    <div class="w-full">
        <div class="text-container bg-navy-700 mx-auto p-5 lg:p-10 hover:bg-navy-600 transition duration-300 ease-in-out">
            {#if title !== ''}
                <h2 class="text-white font-bold text-xl mb-2">{title}</h2>
            {/if}

            {#if description !== ''}
                <p class="description text-white font-extralight">
                    {description}
                </p>
            {/if}
        </div>
    </div>

{:else if opt === '4'}
    <div class="w-full">
        <div class="card-container bg-navy-700 mx-auto hover:bg-navy-600 transition duration-300 ease-in-out">
            <div class="p-5 lg:p-10">
                {#if title !== ''}
                    <h2 class="text-white font-bold text-xl mb-2">{title}</h2>
                {/if}

                {#if description !== ''}
                    <p class="description text-white font-extralight">
                        {description}
                    </p>
                {/if}
            </div>

            <div class="image-container relative h-32 md:h-56 2xl:h-64">
                <img src={image.url} alt={image.alt} class="w-full h-full"/>
            </div>


        </div>
    </div>

{:else if opt === '5'}
    <div class="w-full">
        <div class="card-container bg-navy-700 mx-auto hover:bg-navy-600 transition duration-300 ease-in-out">
            <div class="p-5 lg:p-10">
                
                <div class="grid grid-rows-2 grid-flow-col">
                    <div class="row-span-1 col-span-1 text-white font-bold text-xl">{title}
                        {#if fileData.crystal != ''}
                        - {fileData.crystal} đá
                        {/if}
                    </div>
                    <div>
                        <span class="col-span-1 text-white font-extralight text-sm">Note to: {fileData.big_note} - </span>
                        <span class="col-span-1 text-white font-extralight text-sm">Note nhỏ: {fileData.small_note}</span>
                    </div>
                    <div class="row-span-2 text-end text-white font-bold text-4xl">{fileData.price}</div>
                </div>

                <div>
                    {#each fileData.tags as tag}
                        <Tag tagName={tag} colors={colors}/>
                    {/each}
                </div>

            </div>

            <div class="image-container relative h-32 md:h-56 2xl:h-64">
                <img src={image.url} alt={image.alt} class="w-full h-full"/>
            </div>
        </div>
    </div>
{/if}


