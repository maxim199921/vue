<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <select v-model="alertAnimation">
                    <option value="fade">fade</option>
                    <option value="slide">slide</option>
                </select>
                <button class="btn btn-primary" @click="show = !show">Show Alert</button>
                <br><br>
                <transition name="slide" appear>
                    <div class="alert alert-info">This is some info</div>
                </transition>
                <transition :name="alertAnimation">
                    <div class="alert alert-info" v-if="show">This is some info</div>
                </transition>
                <transition :name="alertAnimation">
                    <div class="alert alert-info" v-show="show">This is some info</div>
                </transition>
                <transition :name="alertAnimation">
                    <div class="alert alert-info" v-show="show">This is some info</div>
                </transition>
                <hr>
                <button class="btn btn-primary" @click="load = !load">click</button>
                <br><br>
                <transition
                    @before-enter="beforEnter"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @enter-cancelled="enterCancelled"

                    @before-leave="beforeLeave"
                    @leave="leave"
                    @after-leave="afterLeave"
                    @leave-cancelled="leaveCancelled"
                    appear>
                    <div style="width: 300px; height: 100px; background: greenyellow" v-if="load"></div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: false,
                alertAnimation: 'slide',
                load: true,
                elementWidth: 100
            }
        },
        methods: {
            beforEnter(el) {
                this.elementWidth = 100;
                el.style.width = this.elementWidth + 'px';
            },
            enter(el, done) {
                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth + round * 10) + 'px';
                    round++;
                    if (round > 20) {
                        clearInterval(interval);
                        done();
                    }
                }, 20)
            },
            afterEnter() {},
            enterCancelled() {},
            beforeLeave(el) {
                this.elementWidth = 300;
                el.style.width = this.elementWidth + 'px';
            },
            leave(el, done) {
                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth - round * 10) + 'px';
                    round++;
                    if (round > 20) {
                        clearInterval(interval);
                        done();
                    }
                }, 20)
            },
            afterLeave() {},
            leaveCancelled() {},
        }
    }
</script>

<style>
    .fade-enter {
        opacity: 0;
    }
    .fade-enter-active {
        transition: opacity 1s;
    }
    .fade-leave {

    }
    .fade-leave-active {
        transition: opacity 1s;
        opacity: 0;
    }
    .slide-enter {
        opacity: 0;
    }
    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
        transition: opacity 1s;
    }
    .slide-leave {
    }
    .slide-leave-active {
        animation: slide-out 1s ease-out forwards;
        transition: opacity 1s;
        opacity: 0;
    }
    @keyframes slide-in {
        from {
            transform: translateY(50px);
        }
        to {
            transform: translateY(0);
        }
    }
    @keyframes slide-out {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(50px);
        }
    }
</style>
