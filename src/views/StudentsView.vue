<template>
  <div>
    <h1 class="display-1 mb-10 mt-4">Студенты</h1>
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
            v-for="item in $store.state.students"
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
    return {
    }
  },
  methods: {
    onSubmitForm(data) {
      console.log('From sView', data)

      this.$store.commit('setStudentToSection', {
        student: { id: data.id, name: data.name, sections: data.sections},
        section: data.sections
      });
    }
  }
}
</script>
