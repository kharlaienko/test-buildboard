<template>
  <v-container class="mb-2">
    <v-row align-content="center" justify="center">
      <v-col>
        <v-card class="pa-4 mx-auto" max-width="500">
          <v-card-title class="text-center text-h4">
            Build Square
          </v-card-title>
          <v-form @submit.prevent="draw">
            <v-row>
              <v-col>
                <v-text-field
                  v-model.lazy.number="coordinates.x"
                  label="Size x"
                  type="number"
                  min="1"
                />
              </v-col>
              <v-col>
                <v-text-field
                  v-model.lazy.number="coordinates.y"
                  label="Size y"
                  type="number"
                  min="1"
                />
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <div class="px-2 mt-6 bg-black" v-if="!!grid.length">
    <div class="overflow-auto pa-6">
      <v-row
        v-for="(row, index) in grid"
        :key="index"
        class="flex-nowrap"
        justify="center"
      >
        <cell v-for="(column, index) in row" :key="index" class="flex-shrink-0">
          {{ column }}
        </cell>
      </v-row>
    </div>
  </div>
</template>

<script setup>
import Cell from "@/components/Cell.vue";
import { ref, watch } from "vue";

const coordinates = ref({ x: "", y: "" });
const grid = ref([]);

const draw = () => {
  const x = coordinates.value.x;
  const y = coordinates.value.y;

  if (x >= 128 || y >= 128) return;

  const res = [];
  for (let i = 0; i < y; i++) {
    const row = [];
    for (let j = 0; j < x; j++) {
      row.push(j);
    }
    res.push(row);
  }

  console.log("🚀 ~ draw ~ res:", res);
  grid.value = res;
};

watch(coordinates, () => draw(), { deep: true });
</script>
