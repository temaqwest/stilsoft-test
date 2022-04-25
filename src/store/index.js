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
        select: null,
        selectList: [
            { title: 'По названию', value: 'name' }
        ]
    }),
    getters: {
        sortStudents(state) {
            return [...state.students].sort((i, j) => i[state.select]?.localeCompare(j[state.select]));
        }
    },
    mutations: {
        setSelect(state, select) {
            state.select = select;
        },
        setStudents(state, students) {
            state.students = students;
        },
        setSections(state, sections) {
            state.sections = sections;
        },
        setStudentToSection(state, payload) {
            for (let i = 0; i < state.sections.length; i++) {
                payload.section.forEach(sec => {
                    if (sec.id === state.sections[i].id)
                       state.sections[i].students.push({id: payload.student.id, name: payload.student.name});
                });
            }

            state.students.push(payload.student);
        },
    },
    actions: {
        deleteStudent({state, commit}, payload) {
            const updatedSection = state.sections.map(section => {
                if (section.students.find(i => i.id === payload.studentID)) {
                    section.students = section.students.filter(i => i.id !== payload.studentID)
                }

                return section;
            });

            commit('setSections', updatedSection);
            commit('setStudents', state.students.filter(i => i.id !== payload.studentID));
        },
        deleteStudentFromSection({state, commit}, payload) {
            const newSections = state.sections.map(sec => {
                if (sec.id === payload.sectionID) {
                    sec.students = sec.students.filter(student => student.id !== payload.studentID)
                }
                return sec;
            });

            commit('setSections', newSections);

            const newStudents = state.students.map(stud => {
                if (stud.id === payload.studentID) {
                    stud.sections = stud.sections.filter(sec => sec.id !== payload.sectionID);
                }

                return stud;
            })
            commit('setStudents', newStudents);

        }
    }
})

export default store;