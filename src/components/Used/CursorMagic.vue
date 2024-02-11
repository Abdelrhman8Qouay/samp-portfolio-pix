<template>
    <div class="cursor-magic max-lg:hidden">
        <div class="cursor z-[5000000]">
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, defineProps, toRefs, watch, computed } from 'vue';
const props = defineProps({
    work: {
        type: Boolean,
        default: true,
    },
    color: {
        type: String,
        default: '#fff',
    }
});
const { work, color } = toRefs(props);

const cursorColor = computed(() => color.value || '#fff');

watch(work, (newBol) => bodyCursorChange(newBol));
const allElements = document.querySelectorAll("*");

onMounted(() => {
    allElements.forEach(it => {
        it.classList.add('cursor_hide');
    })

    let curs = document.querySelector('.cursor-magic .cursor');
    document.onmousemove = (e) => {
        // move the cursor
        curs.style.top = e.clientY + 'px';
        curs.style.left = e.clientX + 'px';
        // console.log("page: " + e.pageY + " offset: " + e.offsetY + " client: " + e.clientY);

        // create the element of character
        let ele = document.createElement('div');
        ele.className = 'tec';
        ele.style.top = (curs.getBoundingClientRect().y + 5) + 'px';
        ele.style.left = (curs.getBoundingClientRect().x + 10) + 'px';
        document.querySelector('body #app main').prepend(ele);
        ele.innerText = randomText();
        ele.style.color = cursorColor.value;

        // remove element
        setTimeout(() => {
            // let text = document.querySelectorAll('.tec')[0],
            let directionX = Math.random() < .5 ? -1 : 1,
                directionY = Math.random() < .5 ? -1 : 1;

            ele.style.top = parseInt(ele.style.top) - (directionY * (Math.random() * 100)) + 'px';
            ele.style.left = parseInt(ele.style.left) - (directionX * (Math.random() * 100)) + 'px';
            ele.style.opacity = 0;
            ele.style.transform = 'scale(0.25)';

            // remove the char (tec)
            setTimeout(() => {
                ele.remove();
            }, 1000)
        }, 10)
    }
})

onUnmounted(() => {
    allElements.forEach(it => {
        it.classList.remove('cursor_hide');
    })
    document.onmousemove = null;
})


function randomText() {
    let all = "qwertyuiopasdfghjklzxcvbnm123456789नमस्你好世界दुनियाضجدشسيبلاتنمكطئءؤرلاىةوزظ";
    return all.split('')[Math.floor(Math.random() * all.length)];
}
</script>

<style lang="scss">
$cursorColor: v-bind(cursorColor); // the default => #475ac1

.cursor {
    position: fixed;
    left: 50%;
    top: 50%;
    width: 25px;
    height: 25px;

    background: transparent;
    border: 1px solid $cursorColor;
    border-radius: 50%;
    transform: rotate(4deg);
    filter: drop-shadow(0 0 5px $cursorColor) drop-shadow(0 0 15px $cursorColor) drop-shadow(0 0 35px $cursorColor);

    pointer-events: none;
    cursor: none;
    z-index: 100000;
}

.tec {
    position: fixed;
    left: 50%;
    top: 50%;

    color: $cursorColor;
    text-shadow: 0 0 6px $cursorColor;
    font-size: medium;
    font-weight: 200;

    pointer-events: none;
    transition: all 1s;
    user-select: none;
    cursor: none;

    z-index: 5000000;
}
</style>