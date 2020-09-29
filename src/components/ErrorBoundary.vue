<template>
    <div>
        <slot v-if="err" name="error" v-bind:err="err" v-bind:vm="vm" v-bind:info="info">
            Oh no 😢 Something went wrong
        </slot>
        <slot v-else />
    </div>
</template>

<script>
    export default {
        props: {
            stopPropagation: Boolean
        },
        data() {
            return {
                err: false,
                vm: null,
                info: null
            };
        },
        errorCaptured(err, vm, info) {
            this.err = err;
            this.vm = vm;
            this.info = info;
            return !this.stopPropagation;
        }
    };
</script>