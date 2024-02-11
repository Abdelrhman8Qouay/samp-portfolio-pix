
<template>
    <a v-if="url" :href="url" target="_blank" class="SettingButton"
        :class="txtColor || 'main_clear-text', active ? 'active' : ''">
        <component v-if="ico" class="mx-1 inline-block itemShadow" :fillColor="icoColor || '#fff'" :size="icoSize"
            :is="Icons">
        </component>
    </a>
    <div v-else class="SettingButton" :class="txtColor, { 'active': active }">
        <component v-if="ico" class="mx-1 inline-block itemShadow" :fillColor="icoColor || '#fff'" :size="icoSize"
            :is="Icons">
        </component>
    </div>
</template>

<script setup>
import { ref, defineProps, toRefs, shallowRef } from 'vue';
// get icons
import Account from 'vue-material-design-icons/Account.vue';
import Email from 'vue-material-design-icons/Email.vue';
import Message from 'vue-material-design-icons/Message.vue';
import Phone from 'vue-material-design-icons/Phone.vue';
import Disc from 'vue-material-design-icons/Disc.vue';
import Map from 'vue-material-design-icons/Map.vue';
import Eye from 'vue-material-design-icons/Eye.vue';
import Code from 'vue-material-design-icons/Xml.vue';
import CursorDefault from 'vue-material-design-icons/CursorDefault.vue';

import Facebook from 'vue-material-design-icons/Facebook.vue';
import Twitter from 'vue-material-design-icons/Twitter.vue';
import Github from 'vue-material-design-icons/Github.vue';
import Linkedin from 'vue-material-design-icons/Linkedin.vue';

// get props values
const props = defineProps({
    isButton: Boolean,
    url: [URL, String],
    active: Boolean,
    ico: String,
    icoColor: String, // colors same like this: #fff [for fill color of icons]
    txtColor: String,
    icoSize: Number, // accept only numbers for (icon px)
    shadowColor: String,
})
const { isButton, active, url, ico, icoColor, txtColor, icoSize, shadowColor } = toRefs(props);

// handle the icons to work
const Icons = shallowRef(null);
if (ico.value === 'account') Icons.value = Account;
else if (ico.value === 'email') Icons.value = Email;
else if (ico.value === 'phone') Icons.value = Phone;
else if (ico.value === 'message') Icons.value = Message;
else if (ico.value === 'disc') Icons.value = Disc;
else if (ico.value === 'map') Icons.value = Map;
else if (ico.value === 'eye') Icons.value = Eye;
else if (ico.value === 'code') Icons.value = Code;
else if (ico.value === 'cursor') Icons.value = CursorDefault;

else if (ico.value === 'facebook') Icons.value = Facebook;
else if (ico.value === 'twitter') Icons.value = Twitter;
else if (ico.value === 'github') Icons.value = Github;
else if (ico.value === 'linkedin') Icons.value = Linkedin;


const magicShadowColor = ref(shadowColor || 'blue');
</script>

<style lang="scss">
$shadowColor: v-bind(magicShadowColor);

.SettingButton {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    background: transparent;
    box-shadow: inset 0 0 3px black;
    border-radius: 10px;
    transition: all 0.32s ease-out;

    &:hover {
        filter: drop-shadow(0 0 5px $shadowColor) drop-shadow(0 0 15px $shadowColor);

        color: $shadowColor;
        // .itemShadow {
        //     color: $shadowColor;
        // }
    }

    &.active {
        filter: drop-shadow(0 0 5px $shadowColor) drop-shadow(0 0 15px $shadowColor);

        color: $shadowColor;

        .itemShadow {
            color: $shadowColor;
        }
    }

    // .itemShadow {
    //     box-shadow: inset 0 0 2px black;
    // }
}
</style>