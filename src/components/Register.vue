<template>
  <div>
    <h3>Don't have an account?</h3>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>
      <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
      <v-text-field
        v-model="password"
        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min,]"
        :type="show ? 'text' : 'password'"
        name="input-10-1"
        label="Password"
        hint="At least 8 characters"
        counter
        @click:append="show = !show"
      ></v-text-field>
      <v-text-field
        v-model="confirm"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, (password === confirm) || 'Password must match']"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Confirm"
        hint="At least 8 characters"
        counter
        @click:append="show1 = !show1"
        
      ></v-text-field>

      <v-btn color="#2f435c" block class="mr-4 mt-4" dark @click="register">Register</v-btn>
    </v-form>
  </div>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    show:false,
    show1: false,
    password: "",
    confirm:"",
    rules: {
      required: value => !!value || "Required.",
      min: v => v.length >= 8 || "Min 8 characters",
      emailMatch: () => "The email and password you entered don't match",
   
      
    },
   
    
    
  }),
  methods: {
    register() {
      this.$refs.form.validate();
    }
  }
};
</script>