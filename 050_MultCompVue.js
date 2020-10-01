Vue.component('competence', {
    props: ['titre','contenu'],
    data() {
        return {
            voirCompetence: true
        }
    },
    template: `
    <article class="message" v-show="voirCompetence">
        <div class="message-header">
        {{ titre }}
        <button type="button" @click="voirCompetence = false">x</button>
        </div>
        <div class="message-body">
        {{ contenu }}
        </div>
        </article>
    `
})

// 1ère compétence
Vue.component('modal', {
    template: `
    <div class modal="is-active">
    <div class="modal-background"></div>
    <div class="modal-content">
    <div class="box">
    <P>
    <slot> </slot>
    </P>
    <!-- Any other Bulma elements you want -->
    <button class="modal-close" @click="$emit('close')"></button>
    </div> </div> </div>
    `
})

// 2ème compétence
Vue.component('modal', {
    template: `
    <div class modal="is-active">
    <div class="modal-background"></div>
    <div class="modal-content">
    <div class="box">
    <P>
    <slot> </slot>
    </P>
    <!-- Any other Bulma elements you want -->
    <button class="modal-close" @click="$emit('close')"></button>
    </div> </div> </div>
    `
})

// 3ème compétence
Vue.component('modal', {
    template: `
    <div class modal="is-active">
    <div class="modal-background"></div>
    <div class="modal-content">
    <div class="box">
    <P>
    <slot> </slot>
    </P>
    <!-- Any other Bulma elements you want -->
    <button class="modal-close" @click="$emit('close')"></button>
    </div> </div> </div>
    `
})

// 4ème compétence
Vue.component('modal', {
    template: `
    <div class modal="is-active">
    <div class="modal-background"></div>
    <div class="modal-content">
    <div class="box">
    <P>
    <slot> </slot>
    </P>
    <!-- Any other Bulma elements you want -->
    <button class="modal-close" @click="$emit('close')"></button>
    </div> </div> </div>
    `
})

var app = new Vue({
    el: '#root',
    data() {
        return {
            montreDetail: false
        }
    }
})