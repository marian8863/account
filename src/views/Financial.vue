<template class="back">
    <div class="align-center justify-center mx-auto">
        <v-card elevation="0" class="pb-12">
            <v-card elevation="0" rounded="0">
                <v-img src="account/finance-service.jpeg" height="500" gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)">
                  <v-theme-provider dark>
                <v-container fill-height>
                  <v-row align="center" class="white--text mx-auto" justify="center">
                    <v-col class="white--text text-center" cols="12" tag="h1">
                      <span
                        :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                        class="font-weight-light"
                      >Our Finacial Management Services To Develop Your Work</span>
                    </v-col>
                  
                  </v-row>
                </v-container>
              </v-theme-provider>
                </v-img>
            </v-card>
            <v-card rounded="20%" max-width="1000" class="card align-center justify-center mx-auto">
                <div class="align-center justify-center mx-auto">
                    <v-card elevation="0">
                        <v-row class="px-12">
                            <v-col cols="12" md="7">
                                <h4 class="pt-12">{{heading}}</h4>
                                <p class="pt-8">{{text1}}</p>
                                <p>{{text2}}</p>
                            </v-col>
                            <v-col class="mt-6" cols="12" md="5">
                                <v-img max-height="300" max-width="520" src="account/finance-image.jpeg" gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"></v-img>
                            </v-col>
                            
                        </v-row>
                    </v-card>
                    
                </div>
                
            </v-card>
            
        </v-card>
        <v-card height="400" elevation="0">
        
            <v-row class="pt-6 align-center justify-center mx-auto">
                <v-img height="300" max-width="1100" src="account/connect3.jpeg" gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)">
                    <v-row>
                        <v-col class="text-center pt-12 align-center justify-center mx-auto" cols="12" md="5">
                            <h2 class="white--text">Want to connect with us! Contact us to discuss your business needs.</h2>
                            <v-btn class="my-6">Contact us</v-btn>
                        </v-col>
                        <v-col cols="12" md="6">
                        </v-col>
                    </v-row>
                </v-img>
            </v-row>
        </v-card>
    </div>
</template>

<style scoped>
    .card  {
        margin-top: -100px;
        border-top: 5px solid red;
    }

    .back {
        background-color: darkgray;
    }
</style>

<script>
export default {
    data: () => ({
        heading: 'We provide the best Financial Services for you!',
        text1 : 'With our financial services, you get the help of people who have the ability to turn routines into income. We provide everything you need for your economy and free up your time for the right things.',
        text2: 'Whether you are a sole proprietor or a decision maker for a larger company, and whether you need an accounting firm , accounting , help with  payroll  or  human resource management , we can help. With us, you get personal service from someone who understands your business. We serve close to you!',
    })
}
</script>>