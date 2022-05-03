<template>
    <div class="row justify-content-center">
        <div class="col-md-12">
            <!-- Display goes here -->
            <form>
                <center>
                <h1>Login</h1>
                </center>
                <div class="form-group">
                    <label for="exampleInputEmail1">Username</label>
                    <input type="Text" class="form-control" v-model="history.username" required>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" v-model="password" required>
                </div>
                <center>
                <div class="clearfix">
                <router-link to="/register"><button class="btn btn-danger mt-3" style="margin-right: 10%">Signup</button></router-link>
                <button type="submit" class="btn btn-primary mt-3" @click.prevent="checklogin(history.username,password)">Login</button>
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
            history: {
               username: '',
               history: 'เข้าใช้งาน',
               date: Date()
            },
            userpass: []
        }
    },
    created() {
        let apiURL = 'http://localhost:4000/api/show-user';
        axios.get(apiURL).then(res => {
            this.userpass = res.data
        }).catch(error => {
            console.log(error)
        })
    },
    methods: {
        checklogin(user,pass){
            for(let i = 0;i <= this.userpass.length;i++){
                if(pass == this.userpass[i].password && user == this.userpass[i].username){
                    let apiURL = 'http://localhost:4000/api/create-history';

                    axios.post(apiURL, this.history).then(() => {
                        this.$router.push('/');
                        this.history = {
                            username: '',
                            history: 'เข้าใช้งาน',
                            date: Date()
                        }
                        }).catch(error => {
                            console.log(error)
                        })
                        
                    this.$router.push('/');
                }
            }
        }
    }
}
</script>


   


