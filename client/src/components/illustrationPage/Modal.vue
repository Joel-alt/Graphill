<template>
    <div id="container">
        <img class="cursor-pointer rounded-xl md:max-w-md" :src=mUrl alt="image" @click="open = true; userLikes()">
        <div class="font-extrabold title">
            {{mTitle}}
        </div>
    </div>
    <div v-if="open" class="modal">
        <div class="bg-slate-100 rounded-xl h-4/5 md:h-auto overflow-scroll m-10 frombottom">
            <div class="flex flex-col md:flex-row">
                <img class="min-h-96 md:h-auto object-cover md:w-96" :src="mUrl">
                <div class="flex flex-col px-5 justify-between">
                    <div class="justify-center">
                        <h5 class="text-gray-900 text-3xl font-medium my-4">{{mTitle}}</h5>
                        <p class="text-gray-700 text-lg mb-4 md:w-72">
                            {{mDesc}}
                        </p>
                        <p class="text-red-600 font-semibold text-medium flex gap-2 items-center">{{newLikes}}
                            <img class="w-5 h-5 flex" src="@/assets/like-64.png" alt="like">
                        </p>
                    </div>
                    <button @click="open = false" class="close">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModalView',
    props: {
        mId: Number,
        mUrl: String,
        mTitle: String,
        mDesc: String,
        mLikes: Number,
    },
    data() {
        return {
            open: false,
            newLikes: this.mLikes,
        }
    },
    methods: {
        userLikes() {
            fetch(`http://localhost:3300/illustrations/${this.mId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                },
            })
                .then(response => response.json())
                .then(response => {
                    response.forEach(element => {
                        if (element.id == this.mId) {
                            this.newLikes = element.likes
                        }
                    });
                })
        },
    },
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

.close {
    margin: 1rem;
    background-color: rgb(56, 56, 56);
    border: 2px solid #242423;
    border-radius: 30px;
    box-shadow: #242423 4px 4px 0 0;
    color: #f3f3f3;
    cursor: pointer;
    font-weight: 600;
    font-size: 18px;
    line-height: 40px;
    padding: 0 18px;
    text-align: center;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
}

.close:active {
    box-shadow: #422800 2px 2px 0 0;
    transform: translate(2px, 2px);
}

.frombottom {
    /* animation properties */
    animation-name: frombottomanimation;
    animation-duration: 0.8s;
    animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
}

@keyframes frombottomanimation {
    from {
        opacity: 0;
        transform: translateY(10%);
    }

    to {
        opacity: 1;
        transform: translateY(0%);
    }
}

#container {
    position: relative;
}

.title {
    border-radius: 0.75rem;
    padding: 0.5rem 1rem;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    height: fit-content;
    font-size: 40px;
    display: none;
    color: whitesmoke
}

#container:hover .title {
    background: rgb(58, 66, 180);
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.722), rgba(255, 255, 255, 0) 100%);
    display: flex;
    justify-content: start;
    align-items: center;
}
</style>