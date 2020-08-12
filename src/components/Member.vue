<template>
  <section id="Member" class="grey lighten-3">
    <link
      href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css"
      rel="stylesheet"
    />
  
    <v-container class="grey lighten-4">
        <h2 class="display-2 font-weight-bold mb-3 text-center">Member</h2>
    <v-responsive class="mx-auto mb-8" width="56">
      <v-divider class="mb-1"></v-divider>

      <v-divider></v-divider>
    </v-responsive>
      <v-row>
        <v-col class="col-12 col-md-4 mt-5" v-for="member in members" :key="member.name">
          <v-card class="px-5" outlined flat>
            <div class="text-center pt-5">
              <v-card class="mt-n10" elevation="5">
                <v-img :src="member.src" height="300px"></v-img>
              </v-card>
            </div>
            <div class="text-center">
              <p class="text-h5 font-weight-bold indigo--text text--darken-1 mt-3">{{member.name}}</p>
              <p class="mt-n3">{{member.job}}</p>
              <v-btn
                class="mx-2"
                fab
                dark
                small
                color="indigo"
                v-for="social in member.socials"
                :key="social.icon"
                :to="social.link"
              >
                <v-icon dark>{{social.icon}}</v-icon>
              </v-btn>

              <p class="py-2"></p>
              <v-card-actions>
                <v-btn color="indigo darken-4" text>About me</v-btn>

                <v-spacer></v-spacer>

                <v-btn @click="member.show = !member.show" x-small text>
                  <v-icon
                    color="indigo"
                  >{{ member.show ? 'mdi-chevron-up-box' : 'mdi-chevron-down-box' }}</v-icon>
                </v-btn>
              </v-card-actions>
              <v-expand-transition>
                <div v-show="member.show">
                  <v-divider></v-divider>

                  <v-card-text class="font-weight-bold">{{member.about}}</v-card-text>
                </div>
              </v-expand-transition>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
export default {
  data: () => ({
    members: [
      {
        show: false,
        name: "Marjo Pekkinen",
        job: "financial management",
        src: "Member/8.jpg",
        socials: [
          {
            icon: "fab fa-twitter",
            link: "/"
          },
          {
            icon: "fab fa-facebook-f",
            link: ""
          },
          {
            icon: "fas fa-envelope-open-text",
            link: ""
          }
        ],
        about:
          "Marjo has 20 years of professional experience in financial management. Marjo is a Bachelor of Business Administration, and has continued to complement her education throughout her career. At present, a KLT diploma and PHT training have been received. Prior to joining the Tilirex shareholder group (2002), Marjo worked, among others, in Vähittäiskaupan Tilipalvelu VTP Oy and in the financial administration of the Central Electronics Repair Shop of the Finnish Defence Forces. In her free time, Marjo likes to enjoy forest walks with her dog."
      },
      {
        show: false,
        name: "Piia Hanninen",
        job: "financial administration",
        src: "Member/5.jpg",
        socials: [
          {
            icon: "fab fa-twitter",
            link: ""
          },
          {
            icon: "fab fa-facebook-f",
            link: ""
          },
          {
            icon: "fas fa-envelope-open-text",
            link: ""
          }
        ],
        about:
          "Piia joined the Tilirex shareholder group in 2004. After graduating with a KTM diploma, work experience has been gathered in several fields before she began actual financial administration work. Music, theatre and movies take up a lion’s share of Piia’s free time."
      },
      {
        show: false,
        name: "Matti Vainio",
        job: "financial management",
        src: "Member/4.jpg",
        socials: [
          {
            icon: "fab fa-twitter",
            link: ""
          },
          {
            icon: "fab fa-facebook-f",
            link: ""
          },
          {
            icon: "fas fa-envelope-open-text",
            link: ""
          }
        ],
        about:
          "Senja started at Tilirex in February 2019 and brought with her a strong expertise. Senja has worked in various financial administrations since 1988. After graduating in 2004 as a Merkonomi, she has only worked in accounting firms. In her free time, Senja hikes in Lapland and the Finnish National Parks, which since the autumn of 2019 have already gotten acquainted with half of them, that is twenty."
      },
      {
        show: false,
        name: "Senja Balk",
        job: "financial management",
        src: "Member/2.jpg",
        socials: [
          {
            icon: "fab fa-twitter",
            link: ""
          },
          {
            icon: "fab fa-facebook-f",
            link: ""
          },
          {
            icon: "fas fa-envelope-open-text",
            link: ""
          }
        ],
        about:
          "Marjo has 20 years of professional experience in financial management. Marjo is a Bachelor of Business Administration, and has continued to complement her education throughout her career. At present, a KLT diploma and PHT training have been received. Prior to joining the Tilirex shareholder group (2002), Marjo worked, among others, in Vähittäiskaupan Tilipalvelu VTP Oy and in the financial administration of the Central Electronics Repair Shop of the Finnish Defence Forces. In her free time, Marjo likes to enjoy forest walks with her dog."
      },
      {
        show: false,
        name: "Susanna Huuhka",
        job: "financial management",
        src: "Member/6.jpg",
        socials: [
          {
            icon: "fab fa-twitter",
            link: ""
          },
          {
            icon: "fab fa-facebook-f",
            link: ""
          },
          {
            icon: "fas fa-envelope-open-text",
            link: ""
          }
        ],
        about:
          "Marjo has 20 years of professional experience in financial management. Marjo is a Bachelor of Business Administration, and has continued to complement her education throughout her career. At present, a KLT diploma and PHT training have been received. Prior to joining the Tilirex shareholder group (2002), Marjo worked, among others, in Vähittäiskaupan Tilipalvelu VTP Oy and in the financial administration of the Central Electronics Repair Shop of the Finnish Defence Forces. In her free time, Marjo likes to enjoy forest walks with her dog."
      },
      {
        show: false,
        name: "Kristiina Lehto",
        job: "financial management",
        src: "Member/3.jpeg",
        socials: [
          {
            icon: "fab fa-twitter",
            link: ""
          },
          {
            icon: "fab fa-facebook-f",
            link: ""
          },
          {
            icon: "fas fa-envelope-open-text",
            link: ""
          }
        ],
        about:
          "Marjo has 20 years of professional experience in financial management. Marjo is a Bachelor of Business Administration, and has continued to complement her education throughout her career. At present, a KLT diploma and PHT training have been received. Prior to joining the Tilirex shareholder group (2002), Marjo worked, among others, in Vähittäiskaupan Tilipalvelu VTP Oy and in the financial administration of the Central Electronics Repair Shop of the Finnish Defence Forces. In her free time, Marjo likes to enjoy forest walks with her dog."
      }
    ]
  })
};
</script>

