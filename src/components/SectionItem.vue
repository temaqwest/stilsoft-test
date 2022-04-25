<template>
  <v-card
      outlined
      class="mb-4"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title>
          {{section.title}}
        </v-list-item-title>
        <v-list-item-subtitle>
          <template v-if="section.students.length">
            <v-chip
                v-for="stud in section.students"
                :key="stud.id"
                class="mr-2"
            >
              <strong>Имя:</strong>&nbsp;{{stud.name}}
              &nbsp;|&nbsp;
              <strong>ID:</strong>&nbsp;{{stud.id}}
            </v-chip>
          </template>
          <div class="text-h6" v-else>
            Нет студентов в данной секции
          </div>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: "SectionItem",
  props: {
    section: {
      required: true,
      type: Object
    }
  }
}
</script>