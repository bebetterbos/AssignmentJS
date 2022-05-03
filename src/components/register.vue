
<template>
    <div class="row justify-content-center">
        <div class="col-md-12">
            <!-- Display goes here -->
            <form @submit.prevent="handleSubmitForm">
                <center>
                <h1>Register</h1>
                </center>
                <div class="form-group">
                    <label for="exampleInputEmail1">Username</label>
                    <input type="Text" class="form-control" v-model="users.username" required>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="Text" class="form-control" v-model="users.password" required>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">E-mail</label>
                    <input type="Text" class="form-control" v-model="users.email" required>
                </div>
                <center>
                <div class="clearfix">
                <router-link to="/login"><button class="btn btn-danger mt-3" style="margin-right: 10%">Back</button></router-link>
                <button type="submit" class="btn btn-primary mt-3">Submit</button>
                </div>
                </center>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            users: {
               username: '',
               password: '',
               email: '',
            },
            selectedFile: null
        }
    },
    methods: {
        handleSubmitForm(){
            let apiURL = 'http://localhost:4000/api/create-user';

            axios.post(apiURL, this.users).then(() => {
                this.$router.push('/');
                this.users = {
                    username: '',
                    password: '',
                    email: '',
                }
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>


   


