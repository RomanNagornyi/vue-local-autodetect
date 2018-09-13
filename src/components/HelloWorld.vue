<template>
  <div class="container">
    <p>Component hello: {{ $t("message.hello") }}</p>
  </div>
</template>
<script>
    export default {
        name: 'component1',
        i18n: {
            messages: {
                uk: {message: {hello: 'Привіт із вкладеного компоненту'}},
                ru: {message: {hello: 'Привет из вложеного компонента'}},
                en: {message: {hello: 'Hello from nested component'}}
            }
        }
    }
</script>