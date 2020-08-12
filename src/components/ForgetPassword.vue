<template>
  <div class="text-center py-4">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="deep-orange darken-1"
          dark
          v-bind="attrs"
          v-on="on"
          text
          block
        >Forget Password?</v-btn>
      </template>
      <v-card class="pa-5">
          <div class="text-center">
          <h2>Forget Password ?</h2>
          <p class="py-3">Enter your Email address below to recieve a reset password link</p>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field  outlined v-model="email" :rules="emailRules" label="E-mail" required color="#2f435c"></v-text-field>

          <v-spacer></v-spacer>
          <v-btn color="#2f435c" block @click="dialog = false" dark class="my-3" to="/login">Send Recovery Email</v-btn>
          <p class="font-weight-bold"> Just remebered? </p>
          <v-btn color="primary" @click="dialog = false" dark class="" text to="/login" >Login</v-btn>
        </v-form>
          </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    };
  }
};
</script>