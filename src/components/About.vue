<template>
  <section class="grey lighten-3">
    <v-layout row align-center justify-center>
      <v-col cols="12" md="8">
        <h2 class="display-2 font-weight-bold mb-3 text-center">About As</h2>
        <v-responsive class="mx-auto mb-8" width="56">
          <v-divider class="mb-1"></v-divider>

          <v-divider></v-divider>
        </v-responsive>
      </v-col>
      <v-container>
        <v-row class="mx-2">
           <v-col class=" col-md-6 col-sm-12">
            <v-card class="mx-auto" height="420"  shaped>
              <v-card elevation="10" height="400"  class="ml-n4">
                <v-img src="about.jpeg" height="400" ></v-img>
              </v-card>
            </v-card>
          </v-col>
          <v-col  class=" col-md-6 col-sm-12">
            <v-layout row align-center justify-center class="mt-8">
              <v-col cols="12" v-for="item in items" :key="item.id">
                <v-card flat color outlined class>
                  <v-card-title primary-title class="mt-n8">
                    <hr style="width:70px; height: 3px; background-color: cyan;" />
                    <h2 class="mx-2" style>{{ item.title }}</h2>
                  </v-card-title>
                  <v-crad-text>
                    <p class="body-2 ma-5">{{ item.text }}</p>
                  </v-crad-text>
                </v-card>
                <v-progress-linear buffer-value="55" color="cyan" reverse stream value="30"></v-progress-linear>
              </v-col>
            </v-layout>
          </v-col>
         
        </v-row>
      </v-container>
    </v-layout>
  </section>
</template>

<script>
export default {
  data: () => {
    return {
      items: [
        {
          id: "1",
          icon: "mdi-eye",
          title: "OUR VISION",
          text:
            "Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.",
          text2:
            "Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan."
        },
        {
          id: "2",
          icon: "mdi-magnify",
          title: "OUR MISSION",
          text:
            "Consectetur adipiscing elit, sued do eiusmod tempor ididunt udfgt labore et dolore magna aliqua. Quis ipsum suspendisces gravida. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus.",
          text2:
            "Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor maecenas accumsan."
        }
      ]
    };
  }
};
</script>

<style>
</style>