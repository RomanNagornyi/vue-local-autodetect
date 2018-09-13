<template>
  <div id="app">
    <p>{{ $t("message.hello") }}</p>
    <component1></component1>
  </div>
</template>

<script>
    import router from './router'
    import Component1 from './components/HelloWorld.vue'

    export default {
        name: 'app',
        components: {Component1},
        created: function () {
            var localeFull = navigator.language;
            let locale = 'uk';
            if (localeFull.match(/en/)) {
                locale = 'en';
            } else if (localeFull.match(/ru/)) {
                locale = 'ru';
            }
            router.push({path: `/${locale}`})
        }
    }
</script>