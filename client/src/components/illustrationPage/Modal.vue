<template>
    <img class="cursor-pointer rounded-xl max-w-md hover:scale-110 transition duration-1000 ease-in" :src=murl
        alt="image" @click="open = true">
    <div v-if="open" class="modal">
        <div class="bg-slate-100 rounded-xl h-4/5 md:h-auto  overflow-scroll m-10">
            <div class="flex flex-col md:flex-row">
                <img class="h-96  md:h-auto object-cover md:w-96" :src="murl">
                <div class="flex flex-col px-5 justify-between">
                    <div class="justify-center">
                        <h5 class="text-gray-900 text-3xl font-medium my-4">{{mtitle}}</h5>
                        <p class="text-gray-700 text-lg mb-4 md:w-72">
                            Basic examples
                            Radio buttons are a popular way to allow users to make a single selection & should be used
                            instead of checkboxes if only one item can be selected from a list of options.

                            Group a series of buttons together on a single line using the following code.
                        </p>
                        <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
                    </div>
                    <button @click="open = false" class="m-10">Go back</button>
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