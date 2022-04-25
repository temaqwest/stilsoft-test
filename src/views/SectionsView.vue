<template>
  <div>
    <h1 class="display-1 mb-10 mt-4">Секции</h1>
    <v-row>
      <v-col
        cols="9"
      >
        <SectionItem
            v-for="item in $store.state.sections"
            :section="item"
            :key="item.id"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import StudentForm from "@/components/StudentForm";
import SectionItem from "@/components/SectionItem";

export default {
  name: 'Sections',
  components: {
    StudentForm,
    SectionItem
  },
  data() {
    return {}
  }
}
</script>
