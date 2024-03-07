<template>
  <v-container class="h-100">
    <v-row align="center" justify="center" class="h-100">
      <v-col>
        <v-card class="pa-4 mx-auto" max-width="600">
          <v-card-title class="text-center text-h4"> Login </v-card-title>
          <v-form @submit.prevent="login">
            <v-text-field
              label="Email"
              v-model="v$.email.$model"
              :error="v$.email.$error"
              :error-messages="v$.email.$errors.map((el) => el.$message)"
              @input="v$.email.$touch()"
            ></v-text-field>
            <v-text-field
              class="my-2"
              label="Password"
              v-model="v$.password.$model"
              :error="v$.password.$error"
              :error-messages="v$.password.$errors.map((el) => el.$message)"
              type="password"
            ></v-text-field>
            <v-btn :disabled="v$.$invalid" type="submit" color="primary" block
              >Login</v-btn
            >
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useRouter } from "vue-router";
import { reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";

const router = useRouter();

const state = reactive({
  email: "",
  password: "",
});

const rules = {
  email: { required, email },
  password: { required, minLength: minLength(6) },
};

const v$ = useVuelidate(rules, state);

const login = () => {
  v$.value.$touch();

  if (v$.value.$invalid) return;

  router.push({ name: "game" });
};
</script>
