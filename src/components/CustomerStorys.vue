<template>
  <v-container  fluid>
    <div class="text-center">
      <p
        class="px-5 font-weight-bold text-h4"
      >Our clients' experiences of Accountor's accounting service</p>

      <v-responsive class="mx-auto mb-8" width="56">
        <v-divider class="mb-1"></v-divider>

        <v-divider></v-divider>
      </v-responsive>
    </div>
    <v-row>
      <v-col class="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 mx-auto">
        <v-card>
          <v-window v-model="onboarding">
            <v-window-item
              v-for="customer in customers"
              :key="customer.id"
              transition="scale-transition"
              reverse-transition="scale-transition"
            >
              <v-row no-gutters>
                <v-col
                  class="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 mx-auto my-auto ml-md-n10 ml-lg-n10 ml-xl-n10"
                >
                  <div class="text-center py-3" >
                    <v-hover>
                      <template v-slot:default="{ hover }">
                        <v-avatar size="290" class="border-round">
                          <v-img :src="customer.src"></v-img>

                          <v-fade-transition>
                            <v-overlay v-if="!hover" absolute color="black"></v-overlay>
                          </v-fade-transition>
                        </v-avatar>
                      </template>
                    </v-hover>
                  </div>
                </v-col>
                <v-col class="col-12 col-md-9">
                  <div class="py-5 px-9">
                    <p class>{{customer.date}}</p>
                    <h2 class="text-decoration-underline mt-n3">Customer Story</h2>
                    <h3 class="font-weight-bold">{{customer.title}}</h3>
                    <p class="py-5">{{customer.story}}</p>
                    <v-btn color :to="customer.path" dark rounded>Read More</v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
        <v-card-actions class="justify-space-between">
          <v-btn text @click="prev">
            <v-icon>mdi-chevron-left-box</v-icon>
          </v-btn>
          <v-item-group v-model="onboarding" class="text-center" mandatory>
            <v-item v-for="n in length" :key="`btn-${n}`" v-slot:default="{ active, toggle }">
              <v-btn :input-value="active" icon @click="toggle">
                <v-icon>mdi-record</v-icon>
              </v-btn>
            </v-item>
          </v-item-group>
          <v-btn text @click="next">
            <v-icon>mdi-chevron-right-box</v-icon>
          </v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    length: 3,
    onboarding: 0,
    overlay: false,
    customers: [
      {
        id: 1,
        src: "Member/5.jpg",
        date: "26 June 2020",
        title:
          "Ensure that your company’s beneficial ownership is registered at the Swedish company registration office",
        story:
          "Beneficial ownership. Is your company’s beneficial ownership registered at the Swedish company registration office/Bolagsverket? In order to combat money laundering, the European Parliament adopted a new directive in 2015 where the majority of companies must notify the beneficial ownership. The law that regulates this; The Act on the Registration of beneficial ownership (2017: 63) has been in force in Sweden since 1 August 2017. Among companies we are in contact with we occasionally note that there is still no registration of a beneficial ownership at the Swedish company registration office/Bolagsverket.",
        path: "/"
      },
      {
        id: 1,
        src: "Member/8.jpg",
        date: "26 June 2020",
        title:
          "Ensure that your company’s beneficial ownership is registered at the Swedish company registration office",
        story:
          "Beneficial ownership. Is your company’s beneficial ownership registered at the Swedish company registration office/Bolagsverket? In order to combat money laundering, the European Parliament adopted a new directive in 2015 where the majority of companies must notify the beneficial ownership. The law that regulates this; The Act on the Registration of beneficial ownership (2017: 63) has been in force in Sweden since 1 August 2017. Among companies we are in contact with we occasionally note that there is still no registration of a beneficial ownership at the Swedish company registration office/Bolagsverket.",
        path: "/"
      },
      {
        id: 1,
        src: "Member/5.jpg",
        date: "26 June 2020",
        title:
          "Ensure that your company’s beneficial ownership is registered at the Swedish company registration office",
        story:
          "Beneficial ownership. Is your company’s beneficial ownership registered at the Swedish company registration office/Bolagsverket? In order to combat money laundering, the European Parliament adopted a new directive in 2015 where the majority of companies must notify the beneficial ownership. The law that regulates this; The Act on the Registration of beneficial ownership (2017: 63) has been in force in Sweden since 1 August 2017. Among companies we are in contact with we occasionally note that there is still no registration of a beneficial ownership at the Swedish company registration office/Bolagsverket.",
        path: "/"
      }
    ]
  }),
  methods: {
    next() {
      this.onboarding =
        this.onboarding + 1 === this.length ? 0 : this.onboarding + 1;
    },
    prev() {
      this.onboarding =
        this.onboarding - 1 < 0 ? this.length - 1 : this.onboarding - 1;
    }
  }
};
</script>


<style scoped>
.border-round {
  border-radius: 15px;
}
.border {
  border-style: solid;
  border-color: black;
  border-width: 1px;
}
</style>