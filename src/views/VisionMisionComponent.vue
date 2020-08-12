<template>
  <v-app>
    <section id="career">
      <v-container>
        <div>
          <v-img src="about2.jpeg" max-height="400"></v-img>
        </div>
      </v-container>
    </section>

    <section>
      <v-layout row align-center justify-center class="mt-8">
        <!-- <v-col cols="12" md="7" v-for="item in items" :key="item.id">
            <v-card flat color="" outlined class="">
            <v-card-title primary-title class=" mt-n8 "><hr style="width:70px; height: 3px; background-color: cyan;"><h2 class="mx-2" style="">{{ item.title }}</h2></v-card-title>
            <v-crad-text> <p class="body-2 ma-5">{{ item.text }}</p> </v-crad-text>
            </v-card>
            <v-progress-linear
                buffer-value="55"
                color="cyan"
                reverse
                stream
                value="30"
                ></v-progress-linear>
        </v-col>-->
        <v-col cols="12" md="7">
          <v-card flat color outlined class="my-5">
            <v-card-title primary-title class="mt-n8">
              <hr style="width:50px; height: 3px; background-color: cyan;" />
              <h2 class="mx-2" style>OUR STRENGTHS</h2>
            </v-card-title>
            <v-list v-for="s in strengths" :key="s.id" dense>
              <v-list-item>
                <v-list-item-avatar size="10" color="cyan darken-1"></v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="nl-n2">{{ s.info }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-progress-linear buffer-value="55" color="cyan" reverse stream value="30"></v-progress-linear>
          </v-card>
        </v-col>
      </v-layout>
    </section>

    <section>
      <v-layout row align-center justify-center>
        <v-col cols="12" md="9">
          <v-card class="mt-6" flat align="center" justify="center">
            <v-card-title primary-title class="layout justify-center mt-8">
              <div style="border-left:5px solid #07173a">
                <h2 class="ma-2">5 Good Reasons to Choose an Accountor Online Financial Management Service</h2>
              </div>
            </v-card-title>
            <v-expansion-panels focusable flat class="mt-6">
              <v-expansion-panel v-for="item in items" :key="item.id">
                <v-expansion-panel-header class="white--text">{{ item.question }}</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <p class=" text-left mt-4 " style="border-left:5px solid rgb(51, 95, 182) ;padding-left:15px">{{ item.info }}</p>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card>
        </v-col>
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
                  id: '1',
                  question: "1.In the same package, you get everything you need for the financial management of your company",
                  info: "Accountor Online offers a solution that covers all aspects of financial management, including reporting. You have access to easy-to-use software where you can make the entries you want or just track the progress of the outsourced work. In connection with the implementation of the service, we conduct a needs assessment, on the basis of which we agree on the division of labor between you and your accountant. The division of labor is flexible.",
              },
               {
                  id: '2',
                  question: "2. Get your own designated accountant to help you",
                  info: "When you are with us as a customer, the same expert is responsible for the service from month to month. Through close collaboration, our experts get to know their customers, their business and needs. You don't have to deal with potential problems alone, but our experts provide guidance and advice on both accounting and financial management issues more broadly. Our experts are always available to you - by email, phone and face to face.",
              },
               {
                  id: '3',
                  question: "3. You get fast service and always up-to-date information",
                  info: "As an Accountor Online customer, you get access to the accounting Procountor software. The software that works as a cloud service allows all your company's financial information to be available to you regardless of time and place, including mobile. You can retrieve reports easily and quickly directly from the software. Up-to-date financial monitoring and forecasting is a great advantage in maintaining and developing a company’s finances.",
              },
               {
                  id: '4',
                  question: "4. Smooth financial management with mobile application",
                  info: "With Procountor's smartphone-free, free Mini app, you can check and approve invoices even when you're on the road. You can also complete the travel invoice during the trip. In addition, receipts can be easily scanned and saved, eliminating the need to keep paper versions.",
              },
               {
                  id: '5',
                  question: "5. Pricing is clear and transparent",
                  info: "You pay for the service and the system according to the actual amounts of documents - no hidden costs or unexpected costs. Accountor Online is the only comprehensive financial administration service on the market based on purely realized billing. A unit price has been agreed for each type of document, on the basis of which we only invoice the customer according to the actual quantities. The price per document includes all costs for both the work done and the system. As a customer, you can also check the monthly document volumes in real time from the service. For the main accounts, we agreed on a single monthly price, which we invoice evenly throughout the year. As our customer, you will be able to forecast your company's financial administration costs even better.Accountor Online is designed for small and medium-sized businesses and is suitable for all types of businesses. In addition to Finland, we also operate in other Nordic countries, so our customer companies can manage their finances with one system across national borders. We serve our customers with more than 2,000 professionals in more than 100 locations.",
              },
          ],
      strengths: [
        {
          id: "1",
          info: "Professional and competent staff"
        },
        {
          id: "2",
          info:
            "Direct and simple processes for communicating with our customers"
        },
        {
          id: "3",
          info:
            "The ability to work flexibly in cooperation with companies and organizations of all sizes, regardless of their field"
        },
        {
          id: "4",
          info: "Modern electronic systems"
        }
      ]
    };
  }
};
</script>

<style>
.v-expansion-panel-header{
    cursor: pointer;
    padding: 20px;
    background: rgb(51, 95, 182);
    color: rgb(5, 5, 5);
    border-bottom: 1px solid #ccc;
}
.v-expansion-panel-content{
    padding: 30px;
    font-size: 16px;
    font-weight: bold;
    background: #ffffff;
    color:grey;
}
</style>