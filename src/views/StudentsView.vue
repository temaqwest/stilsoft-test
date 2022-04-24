<template>
  <div>
    <h1 class="display-1 mb-10 mt-4">Секции</h1>
    <v-row>
      <v-col
          cols="3"
      >
        <StudentForm @submitForm="onSubmitForm"/>
      </v-col>
      <v-col
          cols="9"
      >
        <v-card
            outlined
            class="mb-4"
            v-for="item in $store.state.students"
            :key="item.id"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title>
                {{item.name}}
              </v-list-item-title>
              <v-list-item-subtitle>
                <template v-if="item.sections.length">
                  <v-chip
                      v-for="sec in item.sections"
                      :key="sec.id"
                      class="mr-2"
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
              <v-img :src="item.image"></v-img>
            </v-list-item-avatar>
          </v-list-item>
<!--          <v-card-actions>-->
<!--            <v-btn-->
<!--                outlined-->
<!--                rounded-->
<!--                text-->
<!--            >-->
<!--              Button-->
<!--            </v-btn>-->
<!--          </v-card-actions>-->
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import StudentForm from "@/components/StudentForm";

export default {
  name: 'Students',
  components: {
    StudentForm
  },
  data() {
    return {
    }
  },
  methods: {
    onSubmitForm(data) {
      console.log('From sView', data)
    }
  }
}
</script>
