<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <!-- Content goes here -->
            <h1>Create Subject</h1>
            <form @submit.prevent="handleSubmitForm">
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
                    <button class="btn btn-success col-12 mt-3">Create</button>
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
            subject: {
                name: '',
                teacher: '',
                day: '',
                hours: '',
                details: '',
            }
        }
    },
    methods: {
        handleSubmitForm() {
            let apiURL = 'http://localhost:4000/api/create-subject';
            axios.post(apiURL, this.subject).then(() => {
                this.$router.push('/viewsubject');
                this.subject = {
                    name: '',
                    teacher: '',
                    day: '',
                    hours: '',
                    details: '',
                }
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>