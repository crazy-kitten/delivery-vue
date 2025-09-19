<script setup>

import Header from "@/App.vue";
import Footer from "@/App.vue";
import Modal from "@/App.vue";
</script>

<template>
  <div class="page-wrapper">

    <main class="main">
      <section class="products">
        <div class="container">
          <div class="products-wrapper">
            <div class="products-card">
              <div class="products-cars__image">
                <img src="../assets/images/dishes/image%20(6).jpg" alt="goods-1">
              </div>
              <div class="products-card__descriptions">
                <div class="products-card__descriptions-row">
                  <h5 class="products-card__descriptions--name">Ролл угорь стандарт</h5>
                </div>
                <div class="products-card__descriptions-row">
                  <div class="products-card__descriptions--text">Рис, угорь, соус унаги, кунжут, водоросли нори.</div>
                </div>
                <div class="products-card__descriptions-row">
                  <div class="products-card__descriptions--controls">
                    <button class="btn btn-primary">В корзину
                      <img src="../assets/images/icons/cart.svg" alt="cart">
                    </button>
                    <span class="products-card__descriptions-controls--price">250 Р</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="products-card">
              <div class="products-cars__image">
                <img src="../assets/images/dishes/image%20(7).jpg" alt="goods-2">
              </div>
              <div class="products-card__descriptions">
                <div class="products-card__descriptions-row">
                  <h5 class="products-card__descriptions--name">Калифорния лосось стандарт</h5>
                </div>
                <div class="products-card__descriptions-row">
                  <div class="products-card__descriptions--text">Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.</div>
                </div>
                <div class="products-card__descriptions-row">
                  <div class="products-card__descriptions--controls">
                    <button class="btn btn-primary">В корзину
                      <img src="../assets/images/icons/cart.svg" alt="cart">
                    </button>
                    <span class="products-card__descriptions-controls--price">395 Р</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="products-card">
              <div class="products-cars__image">
                <img src="../assets/images/dishes/image%20(8).jpg" alt="goods-3">
              </div>
              <div class="products-card__descriptions">
                <div class="products-card__descriptions-row">
                  <h5 class="products-card__descriptions--name">Окинава стандарт</h5>
                </div>
                <div class="products-card__descriptions-row">
                  <div class="products-card__descriptions--text"> Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...</div>
                </div>
                <div class="products-card__descriptions-row">
                  <div class="products-card__descriptions--controls">
                    <button class="btn btn-primary">В корзину
                      <img src="../assets/images/icons/cart.svg" alt="cart">
                    </button>
                    <span class="products-card__descriptions-controls--price">250 Р</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="products-card">
              <div class="products-cars__image">
                <img src="../assets/images/dishes/image%20(9).jpg" alt="goods-4">
              </div>
              <div class="products-card__descriptions">
                <div class="products-card__descriptions-row">
                  <h5 class="products-card__descriptions--name">Цезарь маки хl</h5>
                </div>
                <div class="products-card__descriptions-row">
                  <div class="products-card__descriptions--text">Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...</div>
                </div>
                <div class="products-card__descriptions-row">
                  <div class="products-card__descriptions--controls">
                    <button class="btn btn-primary">В корзину
                      <img src="../assets/images/icons/cart.svg" alt="cart">
                    </button>
                    <span class="products-card__descriptions-controls--price">250 Р</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="products-card">
              <div class="products-cars__image">
                <img src="../assets/images/dishes/image%20(10).jpg" alt="goods-5">
              </div>
              <div class="products-card__descriptions">
                <div class="products-card__descriptions-row">
                  <h5 class="products-card__descriptions--name">Ясай маки стандарт 185 г</h5>
                </div>
                <div class="products-card__descriptions-row">
                  <div class="products-card__descriptions--text">Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг</div>
                </div>
                <div class="products-card__descriptions-row">
                  <div class="products-card__descriptions--controls">
                    <button class="btn btn-primary">В корзину
                      <img src="../assets/images/icons/cart.svg" alt="cart">
                    </button>
                    <span class="products-card__descriptions-controls--price">250 Р</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="products-card">
              <div class="products-cars__image">
                <img src="../assets/images/dishes/image%20(11).jpg" alt="goods-6">
              </div>
              <div class="products-card__descriptions">
                <div class="products-card__descriptions-row">
                  <h5 class="products-card__descriptions--name">Ролл с креветкой стандарт</h5>
                </div>
                <div class="products-card__descriptions-row">
                  <div class="products-card__descriptions--text">Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы</div>
                </div>
                <div class="products-card__descriptions-row">
                  <div class="products-card__descriptions--controls">
                    <button class="btn btn-primary">В корзину
                      <img src="../assets/images/icons/cart.svg" alt="cart">
                    </button>
                    <span class="products-card__descriptions-controls--price">250 Р</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Modal/>

  </div>
</template>

<style scoped>

</style>