<template>
 <section id="Member" class="grey lighten-3">
  <v-container fluid>
    <section id="Product">
      <v-row no-gutters>
        <v-col class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <div class="text-center">
            <h2 class="display-2 font-weight-bold mb-3">PRODUCT</h2>
            <v-responsive class="mx-auto mb-8" width="56">
              <v-divider class="mb-1"></v-divider>

              <v-divider></v-divider>
            </v-responsive>
            <div class="col-md-9 col-lg-9 col-xl-9 mx-auto my-5 pb-8">
              <p>
                You get the full financial management service from us at a fixed price.
                Payroll calculation goes according to reality, but there is also a clear pricing model.
                The prices we quote include everything, such as e.g. annual preparation of the tax return and financial statements.
              </p>
            </div>
          </div>
        </v-col>
        <v-col class="col-12 col-md-4 col-lg-4 col-xl-4">
          <v-card class="text-center pb-16 mt-md-n9" tile elevation="12">
            <v-card class="indigo darken-4 py-3 mt-5" tile dark flat>
              <h2>Wear Flame</h2>
              <p class="text-body-2">MOST POPULAR</p>
            </v-card>
            <p class="text-h4 pt-5">Alk. 120 €</p>
            <v-btn rounded disabled outlined>/ month</v-btn>
            <p
              class="py-5 px-5"
            >For companies that have increased their turnover to more than 75,000 euros.</p>
            <v-btn rounded outlined color="indigo darken-4" router to="/CalComponent">Read more</v-btn>
          </v-card>
        </v-col>
        <v-col class="col-12 col-md-4 col-lg-4 col-xl-4">
          <v-card class="text-center pb-5 border-top mt-5" tile flat>
            <div class="py-5">
              <h2>Wearing Bonfire</h2>
              <v-responsive class="mx-auto" width="56" >
                <v-divider class="mb-1 indigo"></v-divider>

               
              </v-responsive>
            </div>

            <p class="text-h4 pt-3">Alk. 120 €</p>
            <v-btn rounded disabled outlined>/ month</v-btn>
            <p
              class="py-5 px-5"
            >For companies that have increased their turnover to more than 75,000 euros.</p>
            <v-btn rounded outlined color="indigo darken-4" router to="/CalComponent">Read more</v-btn>
          </v-card>
        </v-col>
        <v-col class="col-12 col-md-4 col-lg-4 col-xl-4">
          <v-card class="text-center pb-5 border-top mt-5" tile flat>
            <div class="py-5">
              <h2>Wearing a Real Deal</h2>
              <v-responsive class="mx-auto" width="56">
                <v-divider class="mb-1 indigo" ></v-divider>

             
              </v-responsive>
            </div>

            <p class="text-h4 pt-3">Alk. 120 €</p>
            <v-btn rounded disabled outlined>/ month</v-btn>
            <p class="pt-5 pb-11 px-5">For large companies with stable growth careers.</p>
            <v-btn rounded outlined color="indigo darken-4" router to="/CalComponent">Read more</v-btn>
          </v-card>
        </v-col>
      </v-row>
    </section>
  </v-container>
 </section>
</template>

<script>
export default {
  components: {}
};
</script>
<style scoped>
.border-top {
  border-bottom: solid;
  /* border-top: solid;
  border-left: solid;
  border-right: solid; */
  border-top-width: 1px;
  border-bottom-width: 5px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-color: #7986cb;
}

.top {
  position: relative;
  transform: translateY(-40px);
}
</style>