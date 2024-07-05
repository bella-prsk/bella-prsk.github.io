<script>
    import { createEventDispatcher } from 'svelte';
    export let tagName;
    export let colors;
    export let active = true;

    const dispatch = createEventDispatcher();

    function handleClick() {
        dispatch('click', tagName);
    }

    function isDark(color) {
        const r = parseInt(color.slice(1, 3), 16);
        const g = parseInt(color.slice(3, 5), 16);
        const b = parseInt(color.slice(5, 7), 16);
        const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
        return luminance < 125;
    }

    function setTextColor(bgColor) {
        return isDark(bgColor) ? '#ffffff' : '#242424';
    }
</script>

<button on:click={handleClick} 
        style="background-color: {colors[tagName]}; color: {setTextColor(colors[tagName])}" 
        class="text-xs font-medium me-2 px-2.5 py-0.5 rounded-full {active ? '' : 'inactive-tag'}">
    {tagName}
</button>

<style>
    button {
        display: inline-block;
        margin-right: 5px;
        border: none;
        cursor: pointer;
    }
    .inactive-tag {
        opacity: 0.5;
    }
</style>
