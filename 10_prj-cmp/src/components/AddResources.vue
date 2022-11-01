<template>
    <BaseCard>
      <form @submit.prevent="submitForm">
        <label>
            Title
            <input type="text" ref="titleInput" />
        </label>
        <label>
            Description
            <input type="text" ref="descriptionInput" />
        </label>
        <label>
            Link
            <input type="text" ref="linkInput" />
        </label>
        <BaseButton>Add Resource</BaseButton>
      </form>  
    </BaseCard>
</template>
<script>
export default{
    methods:{
        submitForm(){

            const title = this.$refs.titleInput.value
            const description = this.$refs.descriptionInput.value
            const link = this.$refs.linkInput.value

            if(title.trim() === "" || description.trim() === "" || link.trim() === ""){
                this.dialogRef().openDialog({title:"Error!",message:"No empty fields are not allowed here.",type:"error"})
                return
            }
            this.addResource({title,description,link})

            //this.$refs.titleInput.value = this.$refs.descriptionInput.value = this.$refs.linkInput.value = "" no needed

            
        }
    },
    inject:["addResource","dialogRef"]
}
</script>
<style scoped>
    label{
        display: block;
        margin:10px;
        display: flex;
        flex-direction: column;
        font-weight: bold;
    }
    label input{
        display: block;
        padding: 5px;
    }
</style>