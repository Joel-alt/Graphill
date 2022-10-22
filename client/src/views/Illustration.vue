<template>
    <div class="w-full flex snap-y md:snap-x overflow-auto justify-center flex-col md:justify-start p-7" id="gallery">
      <div class="flex">
        <div>
          <div v-if="sortLikes == 'desc'">
            <button type="button" @click="sortByLikes(this.sortLikes);" v-bind:class="(focusLikes) ? 'buttonUp': 'buttonDown'">Likes 👇</button>
          </div>
          <div v-else>
            <button type="button" @click="sortByLikes(this.sortLikes);" v-bind:class="(focusLikes) ? 'buttonUp': 'buttonDown'">Likes 👆</button>
          </div>
        </div>
        <div>
          <div v-if="sortTitles == 'desc'">
            <button type="button" @click="sortByTitles(this.sortTitles);" v-bind:class="(focusTitles) ? 'buttonUp': 'buttonDown'">Titles 👇 </button>
          </div>
          <div v-else>
            <button type="button" @click="sortByTitles(this.sortTitles);" v-bind:class="(focusTitles) ? 'buttonUp': 'buttonDown'">Titles 👆 </button>
          </div>
        </div>
      </div>
      <div class="flex md:flex-row flex-col gap-16">
        <span v-for="card in items" :key="card" class="snap-center self-center">
          <Card :url=card.url :likes=card.likes :id=card.id :isLiked=card.isLiked :title=card.title :desc=card.description />
        </span>
      </div>
    </div>
</template>

<script>
import Card from "@/components/illustrationPage/Card.vue";
import BaseHeader from '@/components/global/BaseHeader.vue'
import BaseFooter from '@/components/global/BaseFooter.vue'
export default {
  name: "IllustrationView",
  components: {
    Card,
    BaseFooter,
    BaseHeader
  },
  data() {
    return {
      items: [],
      sortLikes: 'desc',
      sortTitles: 'desc',
      focusLikes: true,
      focusTitles: false
    }
  },
  methods: {
    sortByLikes(sort) {
      fetch(`http://localhost:3300/illustrations/all?cat=likes&sortBy=${sort}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
      })
        .then(response => response.json())
        .then(response => {
          this.items = response;
          this.userLikes();
          if (sort == 'desc') {
            this.sortLikes = 'asc';
          } else {
            this.sortLikes = 'desc';
          }
          this.focusLikes = true;
          this.focusTitles = false;
        })
    },
    sortByTitles(sort) {
      fetch(`http://localhost:3300/illustrations/all?cat=title&sortBy=${sort}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
      })
        .then(response => response.json())
        .then(response => {
          this.items = response;
          this.userLikes();
          if (sort == 'desc') {
            this.sortTitles = 'asc';
          } else {
            this.sortTitles = 'desc';
          }
          this.focusLikes = false;
          this.focusTitles = true;
        })
    },
    userLikes() {
      fetch(`http://localhost:3300/illustrations/hasLiked`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
      })
        .then(response => response.json())
        .then(response => {
          for (let i = 0; i < this.items.length; i++) {
            response.forEach(element => {
              if (element.id === this.items[i].id) {
                this.items[i] = { ...this.items[i], isLiked: true };
              }
              if (this.items[i].isLiked === undefined) {
                this.items[i] = { ...this.items[i], isLiked: false };
              }
            });
          }
        })
    },
  },
  created() {
    if (this.items.length === 0) {
      this.sortByLikes(this.sortLikes);
    }
  },
};
</script>

<style scoped>
/* Hide scrollbar for Safari, Chrome */
#gallery::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
#gallery {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}

/* CSS */
.buttonUp, .buttonDown {
  margin: 1rem;
  background-color: 709CA7;
  border: 2px solid #242423;
  border-radius: 30px;
  box-shadow: #242423 4px 4px 0 0;
  color: #242423;
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

.buttonUp {
  background-color: #8bc0cd;
}

.buttonUp:active, .buttonDown:active {
  box-shadow: #422800 2px 2px 0 0;
  transform: translate(2px, 2px);
}

@media (min-width: 768px) {
  .buttonUp, .buttonDown {
    min-width: 120px;
    padding: 0 25px;
  }
}
</style>
