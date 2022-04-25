<template>
  <v-form
    ref="form"
    class="form pa-5"
  >
    <v-text-field
        v-model="name"
        :counter="40"
        :rules="nameRules"
        label="ФИО"
        required
        dark
    />
    <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
            v-model="date"
            label="Дата рождения"
            dark
            required
            readonly
            :rules="[v => !!v || 'Необходимо выбрать дату рождения']"
            v-bind="attrs"
            v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
          v-model="date"
          no-title
          scrollable
          required
      >
        <v-spacer></v-spacer>
        <v-btn
            text
            color="primary"
            @click="menu = false"
        >
          Cancel
        </v-btn>
        <v-btn
            text
            color="primary"
            @click="$refs.menu.save(date)"
        >
          OK
        </v-btn>
      </v-date-picker>
    </v-menu>
    <v-select
        v-model="select"
        :items="this.$store.state.sections"
        :rules="[v => !!v || 'Необходимо выбрать хотя бы одну секцию']"
        label="Секция"
        required
        multiple
        dark
        item-text="title"
        item-value="id"
    />
    <v-checkbox
        v-model="checkbox"
        :rules="[v => !!v || 'Необходимо согласие!']"
        label="Добавить нового студента?"
        required
        dark
    />
    <div class="d-flex flex-column-reverse align-start justify-center flex-wrap">
      <v-btn
          :disabled="!valid"
          color="success"
          class="my-2"
          @click="validate"
          block
      >
        Внести данные
      </v-btn>

      <v-btn
          color="error"
          class="my-2"
          @click="reset"
          block
      >
        Сбросить поля
      </v-btn>

      <v-btn
          color="warning"
          @click="resetValidation"
          class="my-2"
          block
      >
        Сбросить валидацию
      </v-btn>
    </div>
  </v-form>
</template>

<script>
export default {
  name: "StudentForm",
  data: () => ({
    date: '',
    menu: false,
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Введите ФИО',
      v => (v && v.length <= 40) || 'ФИО должно содержать до 40 символов',
    ],
    select: null,
    checkbox: false,
  }),

  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        let sections = [];

        for (let i = 0; i < this.select.length; i++) {
          this.$store.state.sections.forEach(sec => {
            if (sec.id === this.select[i]) {
              sections.push({id: sec.id, title: sec.title});
            }
          })
        }

        this.$emit('submitForm', {
          id: Date.now(),
          name: this.name,
          sections: sections,
          date: this.date,
        });
      }
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
  },
}
</script>

<style scoped>

.form {
  background-color: #263238;
  border-radius: 4px;
}

</style>