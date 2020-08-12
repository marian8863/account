<template>
  <div>
    <h3>Already have an account?</h3>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
      <v-text-field
        v-model="password"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Password"
        hint="At least 8 characters"
        counter
        @click:append="show1 = !show1"
      ></v-text-field>

      <v-checkbox v-model="checkbox" label="Rember Me?"></v-checkbox>

      <v-btn color="#2f435c" block class="mr-4" dark @click="login">Login</v-btn>

      <ForgetPassword />
    </v-form>
  </div>
</template>
<script>

import ForgetPassword from "@/components/ForgetPassword.vue";
export default {
  components: {
    
    ForgetPassword
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
    }
  }),
  methods: {
    login() {
      this.$refs.form.validate();
    }
  }
};
</script>