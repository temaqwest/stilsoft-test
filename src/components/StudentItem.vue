<template>
  <v-card
      outlined
      class="mb-4"
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>
          {{student.name}}
        </v-list-item-title>
        <v-list-item-subtitle>
          <template v-if="student.sections.length">
            <v-chip
                v-for="sec in student.sections"
                :key="sec.id"
                close
                class="mr-2"
                @click:close="removeStudFromSection(student.id, sec.id)"
            >
              {{sec.title}}
            </v-chip>
          </template>
          <div class="text-h6" v-else>
            Нет секций
          </div>
        </v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-avatar
          tile
          size="60"
          color="grey"
          rounded
      >
        <v-img :src="student.image"></v-img>
      </v-list-item-avatar>
    </v-list-item>
    <v-card-actions>
      <v-btn @click="removeStud(student.id)">Удалить студента</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

import store from '../store';
export default {
  name: "StudentItem",
  props: {
    student: {
      required: true,
      type: Object
    }
  },
  methods: {
    removeStud(id) {
      store.dispatch('deleteStudent', {studentID: id});
    },
    removeStudFromSection(studentID, sectionID) {
      store.dispatch('deleteStudentFromSection', { studentID, sectionID });
    },
  }
}
</script>