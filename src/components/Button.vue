<template>
    <button v-if="isButton"
        class="btn btn--stripe px-4 py-1 pb-3 border-none main-bg transition flex justify-center items-center uppercase"
        :class="txtColor ? txtColor : (icoColor ? `text-[${icoColor}]` : 'text-white')">
        <component v-if="ico" class="mx-1 inline-block" :fillColor="icoColor ? icoColor : '#fff'" :size="icoSize"
            :is="Icons">
        </component>{{ txt }}
    </button>
    <a v-else class="btn btn--stripe px-4 py-1 pb-3 border-none main-bg transition flex justify-center items-center"
        :class="txtColor ? txtColor : (icoColor ? `text-[${icoColor}]` : 'text-white')" :href="url">
        <component v-if="ico" class="mx-1 inline-block" :fillColor="icoColor ? icoColor : '#fff'"
            :size="icoSize ? icoSize : 24" :is="Icons">
        </component> {{ txt }}
    </a>
</template>

<script setup>
import { ref, defineProps, toRefs, shallowRef } from 'vue';
// get icons
import Account from 'vue-material-design-icons/Account.vue';
import Email from 'vue-material-design-icons/Email.vue';
import Message from 'vue-material-design-icons/Message.vue';
import Phone from 'vue-material-design-icons/Phone.vue';
import Disc from 'vue-material-design-icons/Disc.vue';

// get props values
const props = defineProps({
    isButton: String,
    url: URL || String,
    txt: String,
    ico: String,
    icoColor: String, // colors same like this: #fff [for fill color of icons]
    txtColor: String,
    icoSize: Number, // accept only numbers for (icon px)
})
const { isButton, url, txt, ico, icoColor, txtColor, icoSize } = toRefs(props);

// handle the icons to work
const Icons = shallowRef(null);
if (ico.value === 'account') Icons.value = Account;
else if (ico.value === 'email') Icons.value = Email;
else if (ico.value === 'phone') Icons.value = Phone;
else if (ico.value === 'message') Icons.value = Message;
else if (ico.value === 'disc') Icons.value = Disc;
</script>

<style lang="scss" scoped>
// $color-gray: #6e6e6e;
// $color-black: #000;
// $stripe-height: 7px;
// $btn-color: $color-gray;
// $btn-background: #fff;
// $btn-color-hover: #fff;
// $btn-background-hover: $color-gray;
// $border-color: $color-gray;
// $border-color-hover: $color-black;


@keyframes stripe-slide {
    0% {
        background-position: 0% 0;
    }

    100% {
        background-position: 100% 0;
    }
}

.btn {
    cursor: pointer;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;
    font-size: small;
    background-color: #04324786;
    color: #fff;
    border: 2px solid var(--back-chars);
    transition: all .5s ease;

    &--stripe {
        overflow: hidden;
        position: relative;

        &:after {
            content: '';
            display: block;
            height: 7px;
            width: 100%;
            background-image: repeating-linear-gradient(45deg,
                    #04324786,
                    #04324786 1px,
                    transparent 2px,
                    transparent 5px);
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            border-top: 1px solid #04324786;
            position: absolute;
            left: 0;
            bottom: 0;
            background-size: 7px 7px;
        }

        &:hover {
            background-color: #04324786;
            color: #000;
            border-color: #fff;

            &:after {
                background-image: repeating-linear-gradient(45deg,
                        #fff,
                        #fff 1px,
                        transparent 2px,
                        transparent 5px);
                border-top: 1px solid #fff;
                animation: stripe-slide 12s infinite linear forwards;
            }
        }
    }

    &--large {
        width: 50%;
    }

    &--radius {
        border-radius: 36px;
    }
}
</style>