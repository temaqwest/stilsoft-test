<template>
  <div>
    <h1 class="display-1 mb-10 mt-4">Секции</h1>
    <v-row>
      <v-col
        cols="3"
      >
        <StudentForm/>
      </v-col>
      <v-col
        cols="9"
      >
        <v-card
          outlined
          class="mb-4"
          v-for="item in data"
          :key="item.id"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title>
                {{item.name}}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{item.city}}
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-avatar
                tile
                size="80"
                color="grey"
            ></v-list-item-avatar>
          </v-list-item>
          <v-card-actions>
            <v-btn
                outlined
                rounded
                text
            >
              Button
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import StudentForm from "@/components/StudentForm";
import data from '@/assets/students.json';

export default {
  name: 'Sections',
  components: {
    StudentForm
  },
  data() {
    return {
      data: data
    }
  }
}
</script>
