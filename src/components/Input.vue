<script setup>
import { ref, defineProps, toRefs } from 'vue';
// get icons
import Account from 'vue-material-design-icons/Account.vue';
import Email from 'vue-material-design-icons/Email.vue';
import Phone from 'vue-material-design-icons/Phone.vue';
import Message from 'vue-material-design-icons/Message.vue';

// get props values
const props = defineProps({
    require: Boolean,
    type: String,
    title: String,
    name: String,
    limit: String || Number,
    ico: String,
})
const { require, type, title, name, limit, ico } = toRefs(props);

// handle the icons to work
const Icons = ref(null);
if (ico.value === 'account') Icons.value = Account;
if (ico.value === 'email') Icons.value = Email;
if (ico.value === 'phone') Icons.value = Phone;
if (ico.value === 'message') Icons.value = Message;

const isFocus = ref(false);
const valueInput = ref('');
</script>


<template>
    <div class="inputBox" v-if="type !== 'textarea'" @focusin="isFocus = true" @focusout="isFocus = false">
        <input :type="type" :name="name" :maxlength="limit" :required="require" @invalid="isFocus = false"
            @input="$emit('inp', valueInput)" v-model="valueInput">
        <span>
            <component v-if="Icons" class="inline-block mx-2" :is="Icons" fillColor="#fff" :size="isFocus ? 21 : 24" />
            <span>{{ title
            }}</span>
        </span>
    </div>
    <div class="inputBox" v-else @focusin="isFocus = true" @focusout="isFocus = false">
        <textarea :name="name" :maxlength="limit" :required="require" @invalid="isFocus = false"
            @input="$emit('inp', valueInput)" v-model="valueInput"></textarea>
        <span>
            <component v-if="Icons" class="inline-block mx-2" :is="Icons" fillColor="#fff" :size="isFocus ? 21 : 24" />
            <span>{{ title
            }}</span>
        </span>
    </div>
</template>

<style lang="scss" scoped>
.inputBox {
    width: 100%;
    position: relative;
}

.inputBox input,
.inputBox textarea {
    width: 100%;
    outline: none;
    padding: 10px;
    border: 1px solid rgb(53, 53, 53);
    background: var(--body);
    border-radius: 5px;
    color: var(--for-word);
    font-size: 1em;
    transition: var(--hover-trans);
}

.inputBox span {
    position: absolute;
    left: 0;
    pointer-events: none;
    padding: 10px;
    color: var(--for-word);
    font-size: 1em;
    text-transform: uppercase;
    transition: 0.4s;
}

.inputBox input:focus~span,
.inputBox input:valid~span,
.inputBox textarea:valid~span,
.inputBox textarea:focus~span {
    color: var(--for-addition);
    transform: translateX(10px) translateY(-7px);
    font-size: 0.65em;
    padding: 0 10px;
    background: var(--body);
    letter-spacing: 0.2em;
    border-radius: 5px;
}

.inputBox input:focus,
.inputBox textarea:focus {
    border: 1px solid var(--for-addition);
}
</style>