<script>
    import Card from './Card.svelte'; // Adjust path as needed based on your project structure

    import { base } from '$app/paths';

    export let imageData; 
    export let baseFolder = `${base}/${imageData.folder}`; 

</script>

<style>
    
</style>

<div class="grid grid-cols-1 gap-4">
    {#each Object.entries(imageData.files) as [key, fileData]}
        <div>
            <Card
                title={key}
                image={{ url: `${baseFolder}/${key}${fileData.type}`, alt: `${key}` }}
                opt='1'
            />
        </div>
    {/each}
</div>
