<template>
  <v-app>
    <section>
      <div class="align-center justify-center mx-auto">
        <v-card elevation="0" class="pb-12">
          <v-card elevation="0" rounded="0">
            <v-img
              src="contect.jpeg"
              height="500"
              gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
            >
              <v-theme-provider dark>
                <v-container fill-height>
                  <v-row align="center" class="white--text mx-auto" justify="center">
                    <v-col class="white--text text-center" cols="12" tag="h1">
                      <span
                        :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                        class="font-weight-light"
                      >Want to hear more? Leave your contact information and we will contact you</span>
                    </v-col>
                  </v-row>
                </v-container>
              </v-theme-provider>
            </v-img>
          </v-card>
          <v-card rounded="20%" max-width="1000" class="card align-center justify-center mx-auto">
            <div class="align-center justify-center mx-auto">
              <v-card elevation="0">
                <v-container>
                  <v-sheet id="contact" color="#333333" dark tag="section" tile>
                    <div class="py-12"></div>

                    <v-container>
                      <h2
                        class="display-2 font-weight-bold mb-3 text-left"
                      ></h2>

                      <v-theme-provider light>
                        <v-row>
                          <v-col cols="12">
                            <v-text-field flat label="Name*" solo></v-text-field>
                          </v-col>

                          <v-col cols="12">
                            <v-text-field flat label="Email*" solo></v-text-field>
                          </v-col>

                          <v-col cols="12">
                            <v-text-field flat label="Subject*" solo></v-text-field>
                          </v-col>

                          <v-col cols="12">
                            <v-textarea flat label="Message*" solo></v-textarea>
                          </v-col>

                          <v-col class="mx-auto" cols="auto">
                            <v-btn color="accent" x-large>Submit</v-btn>
                          </v-col>
                        </v-row>
                      </v-theme-provider>
                    </v-container>

                    <div class="py-12"></div>
                  </v-sheet>
                </v-container>
              </v-card>
            </div>
          </v-card>
        </v-card>
      </div>
    </section>
    <section></section>
  </v-app>
</template>

<style scoped>
.card {
  margin-top: -100px;
  border-top: 5px solid red;
}

.back {
  background-color: darkgray;
}
</style>