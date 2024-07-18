<script>
    import Card from './Card.svelte'; 
    import Tag from './Tag.svelte';
    import { base } from '$app/paths';
    import tagColors from '$lib/json/tag_colors.json'; 

    export let imageData; 
    export let baseFolder = `${base}/${imageData.folder}`; 
    let selectedTags = new Set();

    let currentPage = 1;
    const itemsPerPage = 10;

    function handleTagClick(tagName) {
        if (selectedTags.has(tagName)) {
            selectedTags.delete(tagName);
        } else {
            selectedTags.add(tagName);
        }
        selectedTags = new Set(selectedTags);
        currentPage = 1; 
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    $: filteredImages = selectedTags.size > 0
        ? Object.entries(imageData.files)
            .filter(([key, fileData]) =>
                Array.from(selectedTags).every(tag => fileData.tags.includes(tag)))
            .sort((a, b) => b[0] - a[0]) 
        : Object.entries(imageData.files)
            .sort((a, b) => b[0] - a[0]); 

    $: paginatedImages = filteredImages.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    function goToPage(page) {
        if (page > 0 && page <= Math.ceil(filteredImages.length / itemsPerPage)) {
            currentPage = page;
            scrollToTop();
        }
    }

    $: totalPages = Math.ceil(filteredImages.length / itemsPerPage);
</script>

<div class="w-full">
    <div class="card-container bg-navy-700 mx-auto hover:bg-navy-600 transition duration-300 ease-in-out mb-4">
        <div class="p-5 lg:p-10">
            <h2 class="text-white font-bold text-xl mb-2 lg:text-2xl">Bộ lọc tìm kiếm</h2>
            <div>
                {#each Object.keys(tagColors) as tagName}
                    <Tag 
                        tagName={tagName} 
                        colors={tagColors} 
                        active={selectedTags.has(tagName)}
                        on:click={() => handleTagClick(tagName)}
                    />
                {/each}
            </div>
        </div>
    </div>
</div>

<!-- Image Grid -->
<div class="grid grid-cols-1 gap-4">
    {#each paginatedImages as [key, fileData] (key)}
        <div>
            <Card
                title={key}
                image={{ url: `${baseFolder}/${key}${fileData.type}`, alt: `${key}` }}
                fileData={fileData}
                colors={tagColors}
                opt='5'
            />
        </div>
    {/each}

    {#if paginatedImages.length === 0}
    <Card
        title="Không tìm thấy"
        description="Không tìm thấy dữ liệu phù hợp"
        image={{ url: 'assets/not_found.png', alt: `not found` }}
        opt='4'
    />
    {/if}
</div>

<!-- Pagination Controls -->
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
