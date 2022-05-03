<template>
  <div>
    <!--Nav Bar-->
    <nav class="navbar navbar-dark bg-primary justify-content-between flex-nowrap flex-row">
      <div class="container">
        <router-link to="/login" class="navbar-brand float-left">MEVN CRUD</router-link>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link to="/" class="nav-link px-3">Create Student</router-link>            
          </li>
          <li class="nav-item">
            <router-link to="/view" class="nav-link px-3">View Student</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link px-3">Logout</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/history" class="nav-link">History</router-link>
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