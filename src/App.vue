<template>
  <div id="app">
    <p>{{ $t("message.hello") }}</p>
    <HelloWorld/>
  </div>
</template>

<script>
    import router from './router'
    import HelloWorld from './components/HelloWorld.vue'

    export default {
        name: 'app',
        components: {HelloWorld},
        created: function () {
            var localeFull = navigator.languages ? navigator.languages : [(navigator.language || navigator.userLanguage)];
            let locale = 'en';
            if (localeFull.findIndex(s => s.includes('uk')) > -1) {
                locale = 'uk';
            } else if (localeFull.findIndex(s => s.includes('ru')) > -1 && localeFull.findIndex(s => s.includes('en')) > -1) {
                locale = 'en';
            } else if (localeFull.findIndex(s => s.includes('ru')) > -1) {
                locale = 'ru';
            }
            router.push({path: `/${locale}`})
        }
    }
</script>