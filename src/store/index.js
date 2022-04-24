import Vue from 'vue'
import Vuex from 'vuex'

import Students from '../assets/students.json';
import Sections from '../assets/sections.json';

Vue.use(Vuex)

const store = new Vuex.Store({
    state: () => ({
        count: 4,
        students: Students,
        sections: Sections,
    }),
    getters: {

    },
    mutations: {
        setStudents(state, students) {
            state.students = students;
        },
        setSections(state, sections) {
            state.sections = sections;
        }
    },
    actions: {

    }
})

export default store;