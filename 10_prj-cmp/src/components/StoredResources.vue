<template>
    <ul>
        <li v-for="resource in resources" :key="resource.id">
            <ResourceElement
            :id="resource.id"
            :title="resource.title"
            :description="resource.description"
            :link="resource.link"
            />
        </li>
    </ul>
</template>
<script>
import ResourceElement from './ResourceElement.vue';

export default{
    inject: ["resources"],
    components: { ResourceElement }
}
</script>