
<template>
<div class="row justify-content-center">
<div class="col-md-5">
        <div class="card">
         <div class="card-body">
               <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
               <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
               </svg>
              <a style="margin-left: 10%">Amount of Subject</a>
              <a style="margin-left: 30%; font-size: 30px">{{subjects.length}}</a>
         </div>
        </div>
    </div>
</div>
<br>
<br>
<div class="row justify-content-center">
<div class="col-md-5">
    <div class="card">
         <div class="card-body">
               <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
               <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
               <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
               </svg>
              <a style="margin-left: 10%">Amount of Login</a>
              <a style="margin-left: 22%; font-size: 30px">{{historys.length}}</a>
         </div>
         </div>
    </div>
</div>
<br>
<br>
<div class="row justify-content-center">
<div class="col-md-5">
    <div class="card">
         <div class="card-body">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart-check-fill" viewBox="0 0 16 16">
            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"/>
            </svg>
              <a style="margin-left: 10%">Amount of Student</a>
              <a style="margin-left: 22%; font-size: 30px">{{students.length}}</a>
         </div>
         </div>
    </div>
</div>
<br>
<br>


</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            historys: [],
            subjects: [],
            students: []
        }
    },
    created(){
        let apiURL = 'http://localhost:4000/api/show-subject';
        axios.get(apiURL).then(res => {
            this.subjects = res.data
        }).catch(error => {
            console.log(error)
        })

        
        let apiURL2 = 'http://localhost:4000/api/show-history';
        axios.get(apiURL2).then(res => {
            this.historys = res.data
        }).catch(error => {
            console.log(error)
        })
        let apiURL3 = 'http://localhost:4000/api/show-user';
        axios.get(apiURL3).then(res => {
            this.students = res.data
        }).catch(error => {
            console.log(error)
        })
    },
    methods: {
        
    }
}
</script>