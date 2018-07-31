<template>
  <q-layout view="lHh lpr lFf" >



    <q-page-container>
      <router-view />

    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'LayoutDefault',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
.toolbar-centrify {
  display: flex;
  justify-content: center;
  max-width: 100%; // or however wide you want your content block to be
  width: 100%;
  height: 90px;

    flex-direction: column;
    justify-content: center;
    align-items: center;
}

</style>
