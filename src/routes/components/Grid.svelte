<script>
    import Card from './Card.svelte'; 
    import { base } from '$app/paths';

    export let imageData;
    export let baseFolder = `${base}/${imageData.folder}`;

    let currentPage = 1;
    let itemsPerPage = 10; 

    let totalPages = Math.ceil(Object.keys(imageData.files).length / itemsPerPage);

    function goToPage(page) {
        currentPage = page;
        scrollToTop();
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
</script>



<div class="grid grid-cols-1 gap-4">
    {#each Object.entries(imageData.files).slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) as [key, fileData]}
        <div>
            <Card
                title={key}
                image={{ url: `${baseFolder}/${key}${fileData.type}`, alt: `${key}` }}
                opt='1'
            />
        </div>
    {/each}
</div>


<div class="flex flex-col items-center mt-4">
    <span class="text-sm text-gray">
        Hiển thị trang
        <span class="font-semibold text-white">{currentPage}</span> 
        trên 
        <span class="font-semibold text-white">{totalPages}</span>
    </span>
    <div class="inline-flex mt-2 xs:mt-0">
        <button 
            class="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-navy-700 hover:bg-navy-900"
            on:click={() => goToPage(currentPage - 1)} 
            disabled={currentPage === 1}>
            Trang trước
        </button>
        <button 
            class="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-navy-700 border-0 hover:bg-navy-900"
            on:click={() => goToPage(currentPage + 1)} 
            disabled={currentPage === totalPages}>
            Trang sau
        </button>
    </div>
</div>
