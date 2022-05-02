<template>
    <div class="row justify-content-center">
        <div class="col-md-12">
            <!-- Display goes here -->
            <center>
            <h1>ประวัติการใช้งาน</h1>
            </center>
            <table class="table table-striped table-dark" align="center">
                <thead class="thead-dark" align="center">
                    <tr>
                    <th scope="col">ชื่อ</th>
                    <th scope="col">ประวัติการใช้งาน</th>
                    <th scope="col">เวลา</th>
                    </tr>
                </thead>
                <tbody align="center">
                    <tr v-for="history in historys" :key="history._id">
                    <td>{{  history.username  }}</td>
                    <td>{{  history.history  }}</td>
                    <td>{{  history.date  }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            historys: []
        }
    },
    created(){
        let apiURL = 'mongodb://localhost:4000/api/show-history';
        axios.get(apiURL).then(res => {
            this.historys = res.data
        }).catch(error => {
            console.log(error)
        })
    },
    methods: {
      
    }
}
</script>