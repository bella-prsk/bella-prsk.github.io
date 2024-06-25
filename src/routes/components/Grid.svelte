<script>
    import Card from './Card.svelte'; // Adjust path as needed based on your project structure

    export let imageData; // Expects an object with a `folder` and `files` properties
    export let baseFolder = ''; // Optional base folder override

    // Compute the base folder from imageData if not provided
    $: computedBaseFolder = baseFolder || `/${imageData.folder}`;
</script>

<style>
    
</style>

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    {#each Object.entries(imageData.files) as [key, extension]}
        <div>
            <Card
                title={key}
                image={{ url: `${computedBaseFolder}/${key}${extension}`, alt: `${key}` }}
            />
        </div>
    {/each}
</div>
