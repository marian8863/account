<template>
  <v-layout row align-center justify-center >
      <v-col cols="12" md="9">
          <v-card class="mt-6" flat align="center" justify="center">
            <v-card-title primary-title class="layout justify-center mt-8"><div style="border-left:5px solid #07173a"><h2 class="ma-2">5 hyvää syytä valita Accountor Online taloushallintopalvelu</h2></div></v-card-title>
                <v-expansion-panels focusable flat class="mt-6">
                    <v-expansion-panel v-for="item in items" :key="item.id">
                    <v-expansion-panel-header class="white--text">{{ item.question }}</v-expansion-panel-header>
                        <v-expansion-panel-content>
                            <p class="caption text-left mt-4"> {{ item.info }} </p>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-card>
      </v-col>
    </v-layout>
</template>

<script>
export default {
    data: () => {
        
      return {
        
      }
      }
}
</script>

