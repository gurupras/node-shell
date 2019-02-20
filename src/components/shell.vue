<template>
  <div class="console" v-html="html">
  </div>
</template>

<script>
import AnsiUp from 'ansi_up'

export default {
  name: 'shell',
  props: ['socket'],
  data () {
    return {
      ansi: undefined,
      content: ''
    }
  },
  computed: {
    html () {
      return this.ansi.ansi_to_html(this.content).replace(/\n/gm, '<br>')
    }
  },
  watch: {
    socket () {
      this.socket.on('data', data => {
        this.content += data
      })
      this.socket.send('ready')
    }
  },
  beforeMount () {
    this.ansi = new AnsiUp()
  },
  mounted () {
    window.shell = this
  },
  updated () {
    this.$el.scrollTop = this.$el.scrollHeight
  }
}
</script>

<style lang="scss" scoped>
.console {
  text-align: left;
  background-color: black;
  color: #fff;
  overflow-y: auto;
}
</style>
