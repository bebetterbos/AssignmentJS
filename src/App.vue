<template>

  <div>
    <!--Nav Bar-->
    <nav class="navbar navbar-dark bg-primary justify-content-between flex-nowrap flex-row">
      <div class="container">
        <router-link to="/" class="navbar-brand float-left">KMUTNB Acardemy</router-link>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link to="/createsubject" class="nav-link px-3 disabled"  v-if="username == ''">Create Subject</router-link>
            <router-link to="/createsubject" class="nav-link px-3"   v-else>Create Subject</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/viewsubject" class="nav-link px-3 disabled" v-if="username == ''">View Subject</router-link>
            <router-link to="/viewsubject" class="nav-link px-3" v-else>View Subject</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/createstudent" class="nav-link px-3 disabled" v-if="username == ''">Create Student</router-link>
            <router-link to="/createstudent" class="nav-link px-3" v-else>Create Student</router-link>            
          </li>
          <li class="nav-item">
            <router-link to="/view" class="nav-link px-3 disabled" v-if="username == ''">View Student</router-link>
            <router-link to="/view" class="nav-link px-3" v-else>View Student</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/history" class="nav-link disabled px-3" v-if="username == ''">History</router-link>
            <router-link to="/history" class="nav-link px-3 " v-else>History</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link active" @click="login" v-if="username == ''">Login</router-link>
            <router-link to="/" class="nav-link active"  @click="logout" v-else>Logout</router-link>
          </li>
          
        </ul>
      </div>
    </nav>
    <!--Router View -->
    <div class="container mt-5">
      <router-view></router-view>
    </div>


  </div>
</template>
<script>
export default {
  
    data(){
        return{
          username: '',
        }
    },
    methods: {
        login(){
          this.username = 'user'
        },
        logout(){
          this.username = ''
        }
    }
}
</script>