<template>
  <view class="content">
    <view class="uni-margin-wrap">
      <swiper class="swiper" circular :indicator-dots="swiperOpt.indicatorDots" :autoplay="swiperOpt.autoplay"
        :interval="swiperOpt.interval" :duration="swiperOpt.duration">
        <swiper-item>
          
        </swiper-item>
        <swiper-item>
          <view class="swiper-item ">B</view>
        </swiper-item>
        <swiper-item>
          <view class="swiper-item">C</view>
        </swiper-item>
      </swiper>
    </view>

  </view>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { reactive, ref } from 'vue'
import {getBannerList} from '@/api/banner-api'
const swiperOpt = reactive({
  background: ['color1', 'color2', 'color3'],
  indicatorDots: true,
  autoplay: true,
  interval: 2000,
  duration: 500
})
onMounted(async ()=>{
 const {data}= await getBannerList()
 console.log(data);
 

})
</script>

<style scoped lang="scss">
.uni-margin-wrap {
  box-sizing: border-box;
  width: 690rpx;
  width: 100%;
  padding: 8px;

  .uni-bg-red {
    background-color: red;
  }

  .uni-bg-green {
    background-color: green;
  }

  .uni-bg-blue {
    background-color: blue;
  }
}

.swiper {
  height: 300rpx;
}

.swiper-item {
  display: block;
  height: 300rpx;
  line-height: 300rpx;
  text-align: center;
}

.swiper-list {
  margin-top: 40rpx;
  margin-bottom: 0;
}

.uni-common-mt {
  margin-top: 60rpx;
  position: relative;
}

.info {
  position: absolute;
  right: 20rpx;
}

.uni-padding-wrap {
  width: 550rpx;
  padding: 0 100rpx;
}</style>
