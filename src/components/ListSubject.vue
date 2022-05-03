<template>
    <div class="row justify-content-center">
        <div class="col-md-12">
            <!-- Display goes here -->
            <h1>Show Subject</h1>
            <div class="row">
                <div class="col-md-12">
                    <table class="table table-striped table-dark" align="center">
                        <thead class="thead-dark">
                            <tr>
                                <th>Subject Name</th>
                                <th>Teacher</th>
                                <th>Day</th>
                                <th>Hours</th>
                                <th>Details</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="subject in Subjects" :key="subject._id">
                                <td>{{ subject.name }}</td>
                                <td>{{ subject.teacher }}</td>
                                <td>{{ subject.day }}</td>
                                <td>{{ subject.hours }}</td>
                                <td>{{ subject.details }}</td>
                                <td>
                                    <router-link :to="{name: 'editsubject', params: {id: subject._id}}" class="btn btn-success px-3">
                                        Edit
                                    </router-link>
                                    <button @click.prevent="deleteSubject(subject._id)" class="btn btn-danger">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            Subjects: []
        }
    },
    created() {
        let apiURL = 'http://localhost:4000/api/show-subject/';
        axios.get(apiURL).then(res => {
            this.Subjects = res.data
        }).catch(error => {
            console.log(error)
        })
    },
    methods: {
        deleteSubject(id) {
            let apiURL = `http://localhost:4000/api/delete-subject/${id}`;
            let indexOfArrayItem = this.Subjects.findIndex(i => i._id === id);
            if (window.confirm("Do you really want to delete?")) {
                axios.delete(apiURL).then(() => {
                    this.Subjects.splice(indexOfArrayItem, 1)
                }).catch(error => {
                    console.log(error)
                })
            }
        }
    }
}
</script>