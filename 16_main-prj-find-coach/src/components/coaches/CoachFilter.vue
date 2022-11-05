<template>
    <Card>
        <h2>Find Your Coach</h2>
        <span class="filter-option">
            <label from="frontend">
                <input type="checkbox" id="frontend" checked @change="setFilter" />
                Frontend
            </label>
        </span>
        <span class="filter-option">
            <label from="backend">
                <input type="checkbox" id="backend" checked @change="setFilter" />
                Backend
            </label>
        </span>
        <span class="filter-option">
            <label from="career">
                <input type="checkbox" id="career" checked @change="setFilter" />
                Career
            </label>
        </span>
    </Card>
</template>

<script>
export default{
    data(){
        return{
            filters:{
                frontend:true,
                backend:true,
                career:true
            }
        }
    },
    methods:{
        setFilter(event){
            const inputId = event.target.id
            const isActive = event.target.checked

            const updatedFilters = {
                ...this.filters,
                [inputId]:isActive
            }

            this.filters = updatedFilters
            this.$emit("change-filter",updatedFilters)
        }
    },
    emits:["change-filter"]
}
</script>
<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>