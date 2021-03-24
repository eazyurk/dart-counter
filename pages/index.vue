<template>
  <div class="flex justify-center space-x-4">
    <div>
      <ScoreboardPlayer player-name="test"/>
    </div>
    <div>
      <ScoreboardInput />
    </div>
    <div>
      <ScoreboardPlayer player-name="poep"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({})
export default class Index extends Vue {

  created() {
    console.log('123');
  }
}
</script>
