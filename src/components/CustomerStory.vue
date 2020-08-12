<template>
  <section id="blog">
    <v-container>
      <h2 class="display-2 font-weight-bold mb-3 text-center">Read more about accounting services and financial administration</h2>
      <v-responsive class="mx-auto mb-8" width="56">
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>
      <vue-horizontal-list
        :items="items"
        :options="{responsive: [{end: 576, size: 1}, {start: 576, end: 768, size: 2},{start: 768, end: 992, size: 3},{size: 4}]}"
      >
        <template v-slot:default="{item}">
          <v-card class="mx-auto text-center" :elevation="0">
            <v-avatar size="150" class>
              <v-img class="white--text align-end" height="200px" :src="item.src"></v-img>
            </v-avatar>

            <v-card-title class="font-weight-black mb-4  text-left">{{item.title}}</v-card-title>

            <v-card-text class="text--primary text-left">
              <div
                class="title font-weight-light mb-5"
              >{{item.content}}</div>

              <div></div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="light-blue" text>
                <v-icon color="black">mdi-arrow-right-bold</v-icon>Read More
              </v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </vue-horizontal-list>
    </v-container>
  </section>
</template>

<script>
import VueHorizontalList from "./vue-horizontal-list.vue";

export default {
  name: "ServeDev",
  components: {
    VueHorizontalList
  },
  data() {
    return {
      items: [
        {
          src: "service/1.jpg",
          title: "Download Modern Financial Management Guide",
          content: " Corporate financial management has changed in many ways with digitalisation. "
        },
        {
          src: "service/2.jpg",
          title: "A guide to choosing the right accounting firm",
          content: "- It is worth spending a lot of time and effort to choose a suitable accounting firm. "
        },
        {
          src: "service/1.jpg",
          title: "Dictionary of modern financial management",
          content: " What is the financial governance of the 2020s like? We wrote a dictionary in which we listed the most important terms of modern financial management from A to Ö."
        },
        {
          src: "service/2.jpg",
          title: "A designated contact person ensures the quality of the service",
          content: "Content item with description"
        },
        {
          src: "service/1.jpg",
          title: "Item 4",
          content: "Customers expect a quick response to their contacts. A designated contact person and teams are effective ways to respond to these changed expectations."
        },
        {
          src: "service/2.jpg",
          title: "Item 5",
          content: "Content item with description"
        },
        {
          src: "service/1.jpg",
          title: "Item 6",
          content: "Content item with description"
        },
        {
          src: "service/2.jpg",
          title: "Item 7",
          content: "Content item with description"
        },
        {
          src: "service/1.jpg",
          title: "Item 8",
          content: "Content item with description"
        },
        {
          src: "service/2.jpg",
          title: "Item 9",
          content: "Content item with description"
        }
      ]
    };
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>

<style scoped>
#app {
  font-family: "Roboto", sans-serif;

  max-width: 1400px;

  margin-left: auto;
  margin-right: auto;

  padding: 80px 24px;
}

@media (min-width: 1200px) {
  #app {
    padding-left: 80px;
    padding-right: 80px;
  }
}

h5 {
  font-size: 18px;
  line-height: 1.5;
  margin: 0 0 8px;
}

p {
  font-size: 17px;
  line-height: 1.5;
  font-weight: 400;
  margin: 0;

  word-break: break-word;
}

.item {
  padding: 16px 24px;
  border-radius: 3px;
  background: #f5f5f5;
}

section {
  margin-top: 24px;
}
</style>
