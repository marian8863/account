<template>
  <v-card elevation="0">
    <h2 class="display-2 font-weight-bold mb-3 text-center">SERVICES</h2>
    <v-responsive class="mx-auto mb-8" width="56">
      <v-divider class="mb-1"></v-divider>

      <v-divider></v-divider>
    </v-responsive>
    <div class="d-flex align-center justify-center mx-auto">
      <v-card elevation="0">
        <v-container>
          <v-row>
            <v-col cols="12" md="3" v-for="detail in details" v-bind:key="detail">
              <v-hover v-slot:default="{ hover }">
                <v-card
                  :elevation="hover ? 12 : 2"
                  :class="{ 'on-hover': hover }"
                  height="300"
                  light
                  class="px-3 py-6"
                >
                  <v-row no-gutters>
                    <v-col cols="12" class="d-flex align-center justify-center mx-auto">
                      <v-avatar centered size="50" v-for="image in detail.src" v-bind:key="image">
                        <v-img :src="image"></v-img>
                      </v-avatar>
                    </v-col>
                    <v-col
                      height="300"
                      cols="12"
                      class="d-flex align-center justify-center mx-auto"
                    >
                      <div>
                        <h5 class="text-center">{{detail.heading}}</h5>
                        <hr
                          class="align-center justify-center mx-auto mt-3"
                          style="width:30%;text-align:left;margin-left:0"
                        />
                        <v-card-text height="200px" class="py-6 white text--primary">
                          <p style="text-size:12px; text-align:center;">{{detail.text}}</p>
                        </v-card-text>
                      </div>
                    </v-col>
                    <v-fade-transition>
                      <v-overlay v-if="hover" absolute color="grey" light>
                        <v-btn color="teal" light rounded="20%" router :to="detail.route">
                          read more
                          <v-icon>mdi-arrow-right-thick</v-icon>
                        </v-btn>
                      </v-overlay>
                    </v-fade-transition>
                  </v-row>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </div>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    details: [
      {
        heading: "Professional Services For Your Specific Needs",
        src: ["service/profession.jpg"],
        text:
          "We can take care of your accounts receivable, either in its entirety, or you can choose one of the individual segments to suit your own needs.",
        route: "/Professional"
      },
      {
        heading: "Our Finacial Management Services To Develop Your Work",
        src: ["service/finance.png"],
        text:
          "Through our financial management service, we help you develop your business from an economic perspective.",
        route: "/Financial"
      },
      {
        heading: "Accounting For Your Company's Specific Needs",
        src: ["service/account.jpg"],
        text:
          "We plan accounting services to fit your company’s specific needs.",
        route: "/Account"
      },
      {
        heading: "Our Salary Services For Developing Your Work",
        src: ["service/salary.jpg"],
        text: "Salary scales, job specifications, verification of employment",
        route: "/Salary"
      }
    ]
  })
};
</script>