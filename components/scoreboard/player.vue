<template>
  <div class="mx-auto flex flex-col w-64">
    <div class="bg-orange-500 border-gray-300 border text-white text-xl text-center">
      {{ playerName }}
    </div>
    <div class="flex flex-row text-lg">
      <div class="text-center border-gray-300 border-r-0 border-t-0 border w-1/2">140</div>
      <div class="text-center border-gray-300 border border-t-0 w-1/2">361</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({})
export default class Player extends Vue {
  @Prop({ required: true })
  playerName: string = '';
}
</script>
