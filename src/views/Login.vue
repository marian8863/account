<template>
  <v-container class="grey lighten-4">
    <v-row>
      <v-col class="col-12 col-md-9 mx-auto">
        <v-card>
          <v-row no-gutters>
            <v-col class="col-12 col-md-6">
              <v-card class="py-5 px-5" flat tile>
                  
                <v-img src="bg16.png" ></v-img>
                <div class="grey lighten-4 pa-4">
                <h3 class="text-center mt-5">Login</h3>
                <p class="text-center font-weight-bold"> With Your social media account</p>
              <v-btn dark block rounded color="#3b5998" class="my-3">
                <v-icon right dark class="mx-3">fab fa-facebook-f</v-icon>Login with Fackbook
              </v-btn>
                <v-btn dark block rounded class="my-3" color="deep-orange darken-1"> <v-icon right dark class="mx-3">fab fa-google-plus-g</v-icon>Login with google</v-btn>
                </div>
                
              </v-card>
            </v-col>
            <v-col class="col-12 col-md-6 pa-5">
              <v-tabs right color="#2f435c">
                <v-tab>Login</v-tab>
                <v-tab >Register</v-tab>

                <v-tab-item>
                  <v-card flat class="pa-5 ">
                    
                 <Login />
                     
                     
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card flat class="pa-5">
                   <Register />
                 </v-card>
                </v-tab-item>
              </v-tabs>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";

export default {
 components:{
  Login, Register

 },
 data: () => ({
      valid: true,
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      checkbox: false,

      show1: false,
      password: "",
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters",
        emailMatch: () => "The email and password you entered don't match"
      
    }}),
    methods: {
      login () {
        this.$refs.form.validate()
      }
    }
};
</script>