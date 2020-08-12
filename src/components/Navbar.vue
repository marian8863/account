<template>
  <v-app-bar app color="white" height="100">
    <v-avatar class="mr-3" color="grey lighten-5" size="70">
      <v-img contain max-height="70%" src="logo.jpeg"></v-img>
    </v-avatar>

    <v-toolbar-title class="font-weight-black headline hidden-sm-and-down" >Account & consulting</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn depressed text small class="mr-4 d-none d-sm-none d-md-flex" router to="/">Home</v-btn>
    <v-btn depressed text small class="mr-4  d-none d-sm-none d-md-flex" router to="/VisionMisionComponent">Above</v-btn>
    <v-btn depressed text small class="mr-4  d-none d-sm-none d-md-flex" router to="/CareerBanner">Job</v-btn>
    <v-btn depressed text small class="mr-4  d-none d-sm-none d-md-flex" router to="/Team">Our Team</v-btn>
    <v-btn depressed text small class="mr-4  d-none d-sm-none d-md-flex" router to="/Contents">Contact</v-btn>

    <v-btn class="ma-2 d-none d-sm-none d-md-flex" tile large color="teal" icon router to="/Login">
      <i class="fas fa-user-lock"></i>
    </v-btn>
    

   
      <v-app-bar-nav-icon color="primary" dark @click.stop="sheet = true" class="d-flex d-sm-none"></v-app-bar-nav-icon>
      <div class="text-center">
    <v-bottom-sheet v-model="sheet">
      
      <v-list>
      
        <v-list-item
          v-for="tile in tiles"
          :key="tile.title"
          @click="sheet = false"
          :to="tile.path"
        >
          
          <v-list-item-title class="text-center" >{{ tile.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-bottom-sheet>
  </div>
   
  </v-app-bar>
</template>

<script>
  export default {
    data: () => ({
      sheet: false,
      tiles: [
        {  title: 'Home', path:'/'},
        {  title: 'Above', path:'/VisionMisionComponent' },
        {  title: 'Job' , path:'/CareerBanner'},
        {  title: 'Our Team', path:'/Team' },
        {  title: 'contact' , path:'/Contents'},
         {  title: 'Login' , path:'/Login'},
      ],
    }),
  }
</script>