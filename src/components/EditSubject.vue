<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <!-- Update goes here -->
            <h1>Edit Data Subject</h1>
            <form @submit.prevent="handleUpdateForm">
                <div class="form-group">
                    <label for="name">Subject Name</label>
                    <input type="text" class="form-control" v-model="subject.name" required>
                </div>
                <div class="form-group">
                    <label for="teacher">Teacher</label>
                    <input type="text" class="form-control" v-model="subject.teacher" required>
                </div>
                <div class="form-group">
                    <label for="day">Day</label>
                    <input type="text" class="form-control" v-model="subject.day" required>
                </div>
                <div class="form-group">
                    <label for="hours">Hours</label>
                    <input type="text" class="form-control" v-model="subject.hours" required>
                </div>
                <div class="form-group">
                    <label for="details">Details</label>
                    <input type="text" class="form-control" v-model="subject.details" required>
                </div>

                <div class="form-group">
                    <button class="btn btn-primary btn-block mt-3">Update</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            subject: {}
        }
    },
    created() {
        let apiURL = `http://localhost:4000/api/edit-subject/${this.$route.params.id}`;
        axios.get(apiURL).then((res) => {
            this.subject = res.data
        })
    },
    methods: {
        handleUpdateForm() {
            let apiURL = `http://localhost:4000/api/update-subject/${this.$route.params.id}`;
            axios.put(apiURL, this.subject).then((res) => {
                console.log(res);
                this.$router.push('/viewsubject')
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>