<template>
  <section class="banner">
    <div class="container">
      <div class="banner-item">
        <h2 class="banner-item--title">
          Онлайн-сервис<br/> доставки еды на дом
        </h2>
        <p class="banner-item--subtitle">
          Блюда из любимого ресторана привезет курьер в перчатках, маске с антисептиком
        </p>
      </div>

    </div>
  </section>
  <section class="products">
    <div class="container">
      <div class="products-header">
        <h3 class="products-header--title">Рестораны</h3>
        <input type="text" class="product-header--search" placeholder="Поиск блюд и ресторанов">
      </div>
      <div class="products-wrapper" id="rests-container">
        <router-link to="/goods"
                     class="products-card"
                     v-for="rest in restArray"
                     :key="rest.id">
          <div class="products-cars__image">
            <img :src="getUrl(rest.image)" alt="rest-1">
          </div>
          <div class="products-card__descriptions">
            <div class="products-card__descriptions-row">
              <h4 class="products-card__descriptions--title">{{rest.title}}</h4>
              <div class="products-card__descriptions--badge"> {{rest.time}}} min</div>
            </div>
            <div class="products-card__descriptions-row">
              <div class="products-card__descriptions-info">
                <div class="products-card__descriptions-info--raiting">
                  <img src="../assets/images/icons/star.svg" alt="star">
                  {{rest.rating}}}
                </div>
                <div class="products-card__descriptions-info--price">
                  От {{rest.price}} Р
                </div>
                <div class="products-card__descriptions-info--group">
                  {{rest.type}}
                </div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import {restArray} from "@/constants/rests.js";
const getUrl = (name)=>{
  return new URL(`../assets/images/rests/${name}`, import.meta.url)
}
</script>

<style scoped>

</style>