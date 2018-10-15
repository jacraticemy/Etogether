<!-- 
父组件引用：slides为轮播图片；inv为切换时间，可以通过data传参。
<slide-show :slides = 'slides' :inv = 'inv'></slide-show>
 -->
<template>
  <div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
    <div class="slide-img">
      <a :href="slides[nowIndex].href">
        <transition name="slide-trans">
          <img v-if="isShow" :src="slides[nowIndex].src">
        </transition>
        <transition name="slide-trans-old">
          <img v-if="!isShow" :src="slides[nowIndex].src">
        </transition>
      </a>
    </div>
    <h2>{{ slides[nowIndex].title }}</h2>
    <div @click="goto(prevIndex)" class="arrow">&lt;</div>
    <ul class="slide-pages">
      <li v-for="(item, index) in slides" @click="goto(index)">
        <a :class="{on: index === nowIndex}"></a>
      </li>
    </ul>
    <div @click="goto(nextIndex)" class="arrow" style="right: 0">&gt;</div>
  </div>
</template>

<script>
export default {
  props: {
    slides: {
      type: Array,
      default: [
        {
          src: require('../../assets/slideShow/pic1.jpg'),
          title: 'xxx1',
          href: 'detail/analysis'
        },
        {
          src: require('../../assets/slideShow/pic2.jpg'),
          title: 'xxx2',
          href: 'detail/count'
        },
        {
          src: require('../../assets/slideShow/pic3.jpg'),
          title: 'xxx3',
          href: 'http://xxx.xxx.com'
        },
        {
          src: require('../../assets/slideShow/pic4.jpg'),
          title: 'xxx4',
          href: 'detail/forecast'
        }
      ]
    },
    inv: {
      type: Number,
      default: 2000
    },
  },
  data () {
    return {
      nowIndex: 0,
      isShow: true
    }
  },
  computed: {
    prevIndex () {
      if (this.nowIndex === 0) {
        return this.slides.length - 1
      }
      else {
        return this.nowIndex - 1
      } 
    },
    nextIndex () {
      if (this.nowIndex === this.slides.length - 1) {
        return 0
      }
      else {
        return this.nowIndex + 1
      }
    }
  },
  methods: {
    goto (index) {
      this.isShow = false
      setTimeout(() => {
        this.isShow = true
        this.nowIndex = index
      }, 10)
    },
    runInv () {
      this.invId = setInterval(() => {
        this.goto(this.nextIndex)
      }, this.inv)
    },
    clearInv () {
      clearInterval(this.invId)
    }
  },
  mounted () {
    this.runInv();
  }
}
</script>

<style scoped>
.slide-trans-enter-active {
  transition: all .5s;
}
.slide-trans-enter {
  transform: translateX(1100px);
}
.slide-trans-old-leave-active {
  transition: all .5s;
  transform: translateX(-1100px);
}
.slide-show {
  position: relative;
  margin: 15px 15px 15px 0;
  width: 1100px;
  height: 160px;
  overflow: hidden;
}
.slide-show h2 {
  position: absolute;
  width: 100%;
  height: 100%;
  color: #fff;
  opacity: .5;
  bottom: 0;
  height: 30px;
  text-align: center;
  padding-left: 15px;
}
.slide-img {
  width: 100%;
}
.slide-img img {
  width: 100%;
  position: absolute;
  top: 0;
}
.slide-pages {
  position: absolute;
  bottom: 10px;
  right: 15px;
}
li {
  list-style: none;
  float: left;
}
.slide-pages a {
  float: left;
  display: block;
  margin: 10px 10px;
  cursor: pointer;
  color: #fff;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background-color: #808080;
}
.slide-pages .on {
  background-color: #F79709;
}

        .arrow {
          cursor: pointer;
          display: none;
          line-height: 80px;
          text-align: center;
          font-size: 36px;
          font-weight: bold;
          width: 40px;
          height: 80px;
          position: absolute;
          vertical-align: center;
          top: 20%;
          z-index: 2;
          color: #fff;
        }
        
        .slide-show:hover .arrow {
          display: block;
        }
        .arrow:hover {
          display: block;
          background-color: RGBA(0, 0, 0, .7);
        }
</style>
