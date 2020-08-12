<template>
  <v-app>
    <section id="career">
      <v-container>
        <div>
          <v-img src="careerImage/career.jpg"></v-img>
        </div>
      </v-container>
    </section>

    <section class="grey lighten-3">
      <v-container>
        <v-row class align-content="center">
          <v-col cols="12" md="9">
            <v-card width flat align-center>
              <v-container>
                <div class="d-flex flex-no-wrap justify-space-between text--justify">
                  <div>
                    <v-card-title class="headline">
                      <hr style="width:40px; height: 3px; background-color: cyan;" />
                      <h1 class="ma-3">Our Career</h1>
                    </v-card-title>
                    <v-card-text>
                      <p class="body-1">
                        <b>Surfers, cheerleaders, players, chefs, daughters, boys, fathers and mothers - 2,350 accountants in 7 countries, all different and unique but all part of the a + team!</b>
                      </p>
                    </v-card-text>
                    <v-card-text class="body-1">
                      <p>We at Accountor are pioneers: Curiosity, growth and development strain us because we want to be one step ahead . Accountor's open and flexible work environment is a place where there is always room for new ideas to develop . We keep our promises, set our goals high and work hard to make our customers successful. For us, Accountor is an a + job !.</p>
                    </v-card-text>
                  </div>
                </div>
                <v-card-actions>
                  <v-row>
                    <v-col cols="12" md="3">
                      <v-btn color="black" dark class>
                        <v-icon small color="white mx-auto ml-2">mdi-magnify</v-icon>
                        <v-sapcer></v-sapcer>Vacancies in finland
                      </v-btn>
                    </v-col>
                    <v-col cols="12" md="1"></v-col>
                    <v-col cols="12" md="4">
                      <v-btn color="black" dark class>
                        <v-icon small color="white">mdi-users</v-icon>
                        <v-spacer></v-spacer>recent graduates
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-card-actions>
              </v-container>
            </v-card>
          </v-col>
          <v-col cols="12" md="3" class="mt-12 hidden-sm">
            <v-card flat elevation="10" shaped>
              <v-avatar class size="300">
                <img src="careerImage/c1.jpg" alt class />
              </v-avatar>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section>
      <v-layout row align-center justify-center>
        <v-col cols="12" md="8">
          <v-card class="mt-6" flat align="center" justify="center">
            <v-card flat align-center justify-center>
              <v-card-title class="headline">
                <hr style="width:40px; height: 3px; background-color: cyan;" />
                <h1 class="ma-3 text-center font-weight-regular;">Life at Accountor - People First</h1>
                <hr style="width:40px; height: 3px; background-color: cyan;" />
              </v-card-title>
              <v-card-text>
                <p>At Accountor, we always put our staff first and want to promote the well-being of our employees. We are friendly and always ready to lend a helping hand to our colleagues and customers. But we also achieve; we pride ourselves on our responsibility, keep our promises, aim high and work hard to ensure the success of our customers.</p>
              </v-card-text>
            </v-card>
          </v-card>
        </v-col>
        <v-container>
          <v-row class="mx-10">
            <v-col cols="12" md="4" v-for="item in items" :key="item.id">
              <v-card class="mx-auto" height="480" shaped>
                <v-card elevation="10" height="200" width="200" class="ml-n4">
                  <v-img :src="item.src" height="200" width="200"></v-img>
                </v-card>
                <v-card-title>{{ item.title }}</v-card-title>

                <v-card-subtitle class="font-weight-regular">{{ item.position}}</v-card-subtitle>
                <v-card-text class="body-2">{{ item.info }}</v-card-text>
                <v-card-actions>
                  <p class="teal--text ml-2 body-2">
                    Read More
                    <v-icon small color="teal">mdi-arrow</v-icon>
                  </p>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-layout>
    </section>
  </v-app>
</template>


<script>
export default {
  data: () => {
    return {
      items: [
        {
          id: "1",
          src: "careerImage/c2.jpg",
          title: "Julia Himanen",
          position: "Accountor's employee Ambassador",
          info:
            "Juulia Himanen is a 29-year-old service manager in Accountor Finago's customer experience and service department . He started working as an Accountor ll a almost seven years ago. In his free time, he enjoys hiking in the beautiful nature of Finland. "
        },
        {
          id: "2",
          src: "careerImage/c3.jpg",
          title: "Tiina Koivula",
          position: "Project Manager",
          info:
            "Tiina Koivula, since 2010 with Accountor . He currently serves as Head of Support Services and is the supervisor of his own team at Accountor HR Solutions."
        },
        {
          id: "3",
          src: "careerImage/c4.jpg",
          title: "Theemu",
          position: "Accountor's employee Ambassador",
          info:
            "Teemu, a 33-year-old master of telecommunications technology, joined Accountor in early 2019 as Information Security Manager. Teemu is a passionate surfer, and enjoys spending his free time on the waves."
        }
      ]
    };
  }
};
</script>

<style>
</style>
 
