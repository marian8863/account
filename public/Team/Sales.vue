<template>
  <section id="Member" class="grey lighten-3">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-img
            src="cover2.jpeg"
            gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
            height="400"
          >
            <v-theme-provider dark>
              <v-container fill-height>
                <v-row align="center" class="white--text mx-auto" justify="center">
                  <v-col class="white--text text-center" cols="12" tag="h1">
                    <!-- <span
                      :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                      class="font-weight-light"
                    >WELCOME TO</span>

                    <br />-->

                    <span
                      :class="[$vuetify.breakpoint.smAndDown ? 'display-1': 'display-1']"
                      class="font-weight-black"
                    >Is the financial situation and future of your company in the midst of uncertain times?</span>
                  </v-col>
                  <!-- 
                  <v-btn class="align-self-end" fab outlined @click="$vuetify.goTo('#Product')">
                    <v-icon>mdi-chevron-double-down</v-icon>
                  </v-btn>-->
                </v-row>
              </v-container>
            </v-theme-provider>
          </v-img>
        </v-col>
      </v-row>

      <div class="mt-6 d-flex align-center justify-center mx-auto">
        <v-row>
          <v-col class="col-12 col-md-6 mb-6" v-for="team in teams" v-bind:key="team.id">
            <v-row>
              <v-col cols="12" md="5" class="mx-md-auto">
                <v-avatar
                  rounded="30%"
                  centered
                  size="150"
                  v-for="image in team.src"
                  v-bind:key="image"
                >
                  <v-img :src="image" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.4)"></v-img>
                </v-avatar>
              </v-col>

              <v-col cols="12" class="text-body-2 mx-md-auto" md="7">
                <v-container>
                  <v-row
                    class="text-body-1 mx-3 d-flex align-center justify-center mx-auto no-gutters"
                  >
                    <v-col cols="12" class="align-left justify-center mx-auto">
                      <div class="mx-auto title">
                        <h4>{{team.name}}</h4>
                      </div>
                    </v-col>
                    <v-col cols="12" class="mx-auto">
                      <div class="mx-auto text-body-2 font-weight-black">
                        <p>
                          {{team.job}}
                          <br />
                          <a>{{team.mail}}</a>
                          <br />
                          {{team.phone}}
                        </p>
                      </div>
                    </v-col>
                  </v-row>
                </v-container>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </section>
</template>

<script>
export default {
  data: () => ({
    teams: [
      {
        id: "1",
        name: "Timo Kinnunen",
        job: "Sales Manager Southwest Finland",
        mail: "Timo.Kinnunen@accountor.fi",
        phone: "+358 44 410 3556",
        src: ["Team/user1.jpg"]
      },
      {
        id: "2",
        name: "Timo Lahtonen",
        job: "Sales Manager PK-region",
        mail: "Timo.Lahtonen@accountor.fi",
        phone: "+358 44 410 8503",
        src: ["Team/user2.jpg"]
      },
      {
        id: "3",
        name: "Mika Salovaara",
        job: "Senior Sales Manager | Wages",
        mail: "Mika.Salovaara@accountor.fi",
        phone: "+358 44 410 3593",
        src: ["Team/user3.jpg"]
      },
      {
        id: "4",
        name: "Antti Koivisto",
        job: "Sales Manager Kymenlaakso and Päijät-Häme",
        mail: "Antti.Koivisto@accountor.fi",
        phone: "+358 40 590 2835",
        src: ["Team/user4.jpg"]
      },
      {
        id: "5",
        name: "Antti Lötjönenn",
        job: "Sales Manager Central Finland and Northern Savonia",
        mail: "Antti.Lotjonen@accountor.fi",
        phone: "+358 40 350 8049",
        src: ["Team/user5.jpg"]
      },
      {
        id: "6",
        name: "Antti Ropponen",
        job:
          "Sales Manager Lapland and Northern OstrobothniaSales Manager PK-region",
        mail: "Antti.Ropponen@accountor.fi",
        phone: "+358 44 410 3562",
        src: ["Team/user6.jpg"]
      },
      {
        id: "7",
        name: "Jaakko Kaunisto",
        job: "Sales Manager Pirkanmaa",
        mail: "Jaakko.Kaunisto@accountor.fi",
        phone: "+358 40 351 7259",
        src: ["Team/user7.jpg"]
      },
      {
        id: "8",
        name: "Harri Ruusunen",
        job: "Sales Manager",
        mail: "Harri.Ruusunen@accountor.fi",
        phone: "+358 44 410 8650",
        src: ["Team/user8.jpg"]
      }
    ]
  })
};
</script>

