<template>
  <BaseCard>
    <template v-slot:header>
      <h3>{{ fullName }}</h3>
      <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
    </template>
    <p>{{ infoText }}</p>
  </BaseCard>
</template>

<script>
export default {
  props: ['fullName', 'infoText', 'role'],
};
</script>