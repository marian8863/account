<template>
  <v-app>
   
   
    
      <Cover />
      <About />
      <Services />

      <Product />
     
      <CustomerStorys />
      <Team />
      <Packages />
      <Packages2 />
       <CustomerStory />
      <Sales />
      <!-- <Contents /> -->

      <Member />

      <CalComponent />
      <!-- <ReasonComponent /> -->
      <ReferenceComponent />
      <test />
    
  </v-app>
</template>



<script>

import test from "../components/test";
import About from "../components/About";
import Cover from "../components/Cover";
import Services from "../components/Services";
import CustomerStory from "@/components/CustomerStory";
import CustomerStorys from "../components/CustomerStorys";
import Packages from "../components/Packages";
import Packages2 from "../components/Packages2";
import Sales from "../components/Sales";
// import Contents from "../components/Contents";
import Product from "../components/Product";
// import Member from '@/components/Member';
// import Team from '../components/Team';
// import CalComponent from '@/components/CalComponent';
// import ReasonComponent from '@/components/ReasonComponent';
// import ReferenceComponent from '@/components/ReferenceComponent';

export default {
  name: "Home",

  components: {
    test,
    Packages,
    About,
    Packages2,
    Sales,
    // Contents,

    Cover,
    CustomerStory,
    CustomerStorys,
    Product,
    // ReasonComponent,
    Services,
    // Member,
    // Team,
    // CalComponent,ReferenceComponent
  },


};
</script>

