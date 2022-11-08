import {computed,ref} from "vue"

const useSort = (availableItems,sortItem) => {

    const sorting = ref(null);

    const displayedItems = computed(function () {
        if (!sorting.value) {
            return availableItems.value;
        }
        return availableItems.value.slice().sort((i1, i2) => {
            if (sorting.value === 'asc' && i1[sortItem] > i2[sortItem]) {
                return 1;
            } else if (sorting.value === 'asc') {
                return -1;
            } else if (sorting.value === 'desc' && i1[sortItem] > i2[sortItem]) {
                return -1;
            } else {
                return 1;
            }
        });
    });

    function sort(mode) {
        sorting.value = mode;
    }

    return{
        displayedItems,
        sort,
        sorting
    }
}
export default useSort