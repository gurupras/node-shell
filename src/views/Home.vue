<template>
  <div class="container">
    <h1 class="center"> Node-Shell </h1>
    <p class="center">
      This is a sample of how to receive and display shell output on a browser
    </p>

    <div class="row">
      <div class="col s12 offset-m2 m8">
        <v-console style="height: 60vh" :socket="socket"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Console from '@/components/console'
import SimpleSocket from 'simple-websocket'

export default {
  name: 'home',
  components: {
    'v-console': Console
  },
  data () {
    return {
      socket: undefined
    }
  },
  mounted () {
    const self = this
    const socket = new SimpleSocket(`ws://${window.location.host}/websocket`)
    socket.on('connect', () => {
      self.socket = socket
      console.log(`Connected`)
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
