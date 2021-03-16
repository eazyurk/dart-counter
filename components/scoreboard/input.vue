<template>
  <div class="mx-auto flex flex-col w-64">
    <div>
      <div class="w-full h-16 bg-gradient-to-b from-blue-400 to-blue-300 flex items-center align-middle text-center">
        <div class="w-full py-5 px-6 text-4xl text-white font-thin">
          {{ score }}
        </div>
      </div>
    </div>
    <div class="flex flex-col">
      <div v-for="row in scoreInput" class="flex flex-row">
        <div
          v-for="score in row"
          class="w-1/3 bg-blue-300 text-center hover:bg-opacity-25 border-blue-200 border h-16 text-4xl cursor-pointer"
          @click="addToScore(score)"
        >
          <div v-if="score !== -1">
            {{ score }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class Input extends Vue {
  scoreInput = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [-1, 0, '+']
  ];

  score = 0;

  addToScore (newScore) {
    const scoreAppend = `${this.score}${newScore}`

    if (newScore === '+') {
      this.submitScore()
      return
    }

    if (scoreAppend > 180 || newScore < 0) {
      return
    }

    if (this.score !== 0) {
      this.score = scoreAppend
      return
    }

    this.score = newScore
  }

  submitScore () {
    this.score = 0
  }
}

</script>
