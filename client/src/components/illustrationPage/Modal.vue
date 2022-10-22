<template>
    <img class="cursor-pointer rounded-xl max-w-md hover:scale-110 transition duration-1000 ease-in" :src=murl alt="image" @click="open = true">
    <div v-if="open" class="modal">
        <div class="bg-slate-100 rounded-xl p-5 w-auto h-1/2 overflow-scroll m-10">
            <div class="flex justify-end">
                <button @click="open = false" >X</button>
            </div>
            <div class="flex">
                <img :src="murl" class="max-w-md rounded-md">
                <div class="mx-10">
                    <h1 class="text-2xl font-bold">{{mtitle}}</h1>
                    <p class="text-xl">{{mdesc}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModalView',
    props: {
        murl: String,
        mtitle: String,
        mdesc: String,
    },
    data() {
        return {
            open: false
        }
    }
}
</script>

<style scoped>
.modal {
    background-color: rgba(22, 22, 22, 0.742);
    position: fixed;
    z-index: 999;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>