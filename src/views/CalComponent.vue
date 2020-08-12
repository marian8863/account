<template>
    <v-layout row align-center justify-center class="ma-1">
            <v-card class="mt-6" width="600" height=""  align="center" justify="center">
                <v-card-title primary-title class="layout justify-center"><h2>Laske hinta-arvio 2 minuutissa!</h2></v-card-title>
                <v-card-text class="body-2">
                    Hae yrityksesi tilanteeseen parhaiten sopiva taloushallinnon palvelu.Et sitoudu mihinkään!
                </v-card-text>
                    <v-container>
                        <v-row >
                            <v-col cols="12" sm="6" >
                                <v-input class="caption">
                                    MYYNTI EUROINA / VUOSI
                                    <v-tooltip right>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn
                                            color="primary"
                                            class="mt-n8" fab dark x-small
                                            v-bind="attrs"
                                            v-on="on"
                                            > <v-icon v-on="on">mdi-help</v-icon></v-btn>
                                        </template>
                                        <span >
                                            <p class="caption" style="width:100px;">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                            </p>
                                        </span>
                                    </v-tooltip>
                                </v-input>
                            </v-col>
                            <v-col  cols="12" sm="6">
                                <v-select
                                :items="items"
                                    label="select your range"
                                placeholder="Ex: 75,000 - 100,000"
                                rounded
                                outlined
                                ></v-select>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-input class="caption">
                                    PALKKALASKELMAT/KK
                                    <v-tooltip right>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn
                                            color="primary"
                                            class="mt-n8" fab dark x-small
                                            v-bind="attrs"
                                            v-on="on"
                                            > <v-icon v-on="on">mdi-help</v-icon></v-btn>
                                        </template>
                                        <span >
                                            <p class="caption" style="width:100px;">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            </p>
                                        </span>
                                    </v-tooltip>
                                </v-input>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <div>
                                    <NumberInputSpinner
                                    :min="0"
                                    :max="100"
                                    :step="1"
                                    :integerOnly="true"
                                    v-model="yourVModel"
                                    />
                                </div>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-input class="caption">
                                    PALKKALASKELMAT/KK
                                    <v-tooltip right>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn
                                            color="primary"
                                            class="mt-n8" fab dark x-small
                                            v-bind="attrs"
                                            v-on="on"
                                            > <v-icon v-on="on">mdi-help</v-icon></v-btn>
                                        </template>
                                        <span >
                                            <p class="caption" style="width:100px;">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            </p>
                                        </span>
                                    </v-tooltip>
                                </v-input>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <div>
                                    <NumberInputSpinner
                                    :min="0"
                                    :max="100"
                                    :step="1"
                                    :integerOnly="true"
                                    v-model="yourVModel"
                                    />
                                </div>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-input class="caption">
                                    PALKKALASKELMAT/KK
                                    <v-tooltip right>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn
                                            color="primary"
                                            class="mt-n8" fab dark x-small
                                            v-bind="attrs"
                                            v-on="on"
                                            > <v-icon v-on="on">mdi-help</v-icon></v-btn>
                                        </template>
                                        <span >
                                            <p class="caption" style="width:100px;">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            </p>
                                        </span>
                                    </v-tooltip>
                                </v-input>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <div>
                                <NumberInputSpinner
                                :min="0"
                                :max="100"
                                :step="1"
                                :integerOnly="true"
                                v-model="number"
                                />
                                </div>
                            </v-col>
                            <v-col cols="12">
                                    <v-text-field
                                    label="Email"
                                    v-model="email"
                                    :rules="emailRules"
                                    rounded
                                    outlined
                                    color="primary"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
            </v-card>
    </v-layout>
</template>

<script>
import NumberInputSpinner from 'vue-number-input-spinner'
  export default {
       components: {
    NumberInputSpinner,
  },
    data: () => ({
        email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
     
      select: null,
      items: [
        '-',
        '0 - 75,000',
        '75,000 - 100,000',
        '100,000 - 125,000',
        '125,000 - 150,000',
        '150,000 - 200,000'
      ],
    }),
  }
</script>
<style scoped>

</style>