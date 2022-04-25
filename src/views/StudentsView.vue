<template>
  <div>
    <div class="d-flex align-center justify-space-between">
      <h1 class="display-1 mb-10 mt-4">Студенты</h1>
      <v-select
          v-model="$store.state.select"
          :items="$store.state.selectList"
          @change="sortStudents"
          label="Сортировать по"
          item-text="title"
          item-value="value"
          class="flex-grow-0"
          dark
      />
    </div>
    <v-row>
      <v-col
          cols="3"
      >
        <StudentForm @submitForm="onSubmitForm"/>
      </v-col>
      <v-col
          cols="9"
      >
        <StudentItem
            v-for="item in $store.getters.sortStudents"
            :student="item"
            :key="item.id"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import StudentForm from "@/components/StudentForm";
import StudentItem from "@/components/StudentItem";

export default {
  name: 'Students',
  components: {
    StudentForm,
    StudentItem
  },
  data() {
    return {}
  },
  methods: {
    onSubmitForm(data) {
      this.$store.commit('setStudentToSection', {
        student: { id: data.id, name: data.name, sections: data.sections},
        section: data.sections
      });
    },
    sortStudents(value) {
      this.$store.commit('setSelect', value);
    }
  },
}
</script>
