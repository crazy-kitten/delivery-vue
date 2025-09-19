<script setup>
</script>

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
        <router-link to="/goods" class="products-card">
          <div class="products-cars__image">
            <img src="../assets/images/rests/image.jpg" alt="rest-1">
          </div>
          <div class="products-card__descriptions">
            <div class="products-card__descriptions-row">
              <h4 class="products-card__descriptions--title">Пицца плюс</h4>
              <div class="products-card__descriptions--badge"> 50 min</div>
            </div>
            <div class="products-card__descriptions-row">
              <div class="products-card__descriptions-info">
                <div class="products-card__descriptions-info--raiting">
                  <img src="../assets/images/icons/star.svg" alt="star">
                  4.5
                </div>
                <div class="products-card__descriptions-info--price">
                  От 900 Р
                </div>
                <div class="products-card__descriptions-info--group">
                  Пицца
                </div>
              </div>
            </div>
          </div>
        </router-link>
        <router-link to="/goods" class="products-card">
          <div class="products-cars__image">
            <img src="../assets/images/rests/image%20(1).jpg" alt="rest-2">
          </div>
          <div class="products-card__descriptions">
            <div class="products-card__descriptions-row">
              <h4 class="products-card__descriptions--title">Тануки</h4>
              <div class="products-card__descriptions--badge"> 50 min</div>
            </div>
            <div class="products-card__descriptions-row">
              <div class="products-card__descriptions-info">
                <div class="products-card__descriptions-info--raiting">
                  <img src="../assets/images/icons/star.svg" alt="star">
                  4.5
                </div>
                <div class="products-card__descriptions-info--price">
                  От 900 Р
                </div>
                <div class="products-card__descriptions-info--group">
                  Пицца
                </div>
              </div>
            </div>
          </div>
        </router-link>
        <router-link to="goods" class="products-card">
          <div class="products-cars__image">
            <img src="../assets/images/rests/image%20(2).jpg" alt="rest-3">
          </div>
          <div class="products-card__descriptions">
            <div class="products-card__descriptions-row">
              <h4 class="products-card__descriptions--title">FoodBand</h4>
              <div class="products-card__descriptions--badge"> 50 min</div>
            </div>
            <div class="products-card__descriptions-row">
              <div class="products-card__descriptions-info">
                <div class="products-card__descriptions-info--raiting">
                  <img src="../assets/images/icons/star.svg" alt="star">
                  4.5
                </div>
                <div class="products-card__descriptions-info--price">
                  От 900 Р
                </div>
                <div class="products-card__descriptions-info--group">
                  Пицца
                </div>
              </div>
            </div>
          </div>
        </router-link>
        <router-link to="goods" class="products-card">
          <div class="products-cars__image">
            <img src="../assets/images/rests/image%20(3).jpg" alt="rest-4">
          </div>
          <div class="products-card__descriptions">
            <div class="products-card__descriptions-row">
              <h4 class="products-card__descriptions--title">Жадина-пицца</h4>
              <div class="products-card__descriptions--badge"> 50 min</div>
            </div>
            <div class="products-card__descriptions-row">
              <div class="products-card__descriptions-info">
                <div class="products-card__descriptions-info--raiting">
                  <img src="../assets/images/icons/star.svg" alt="star">
                  4.5
                </div>
                <div class="products-card__descriptions-info--price">
                  От 900 Р
                </div>
                <div class="products-card__descriptions-info--group">
                  Пицца
                </div>
              </div>
            </div>
          </div>
        </router-link>
        <router-link to="goods" class="products-card">
          <div class="products-cars__image">
            <img src="../assets/images/rests/image%20(4).jpg" alt="rest-5">
          </div>
          <div class="products-card__descriptions">
            <div class="products-card__descriptions-row">
              <h4 class="products-card__descriptions--title">Точка еды</h4>
              <div class="products-card__descriptions--badge"> 50 min</div>
            </div>
            <div class="products-card__descriptions-row">
              <div class="products-card__descriptions-info">
                <div class="products-card__descriptions-info--raiting">
                  <img src="./images/icons/star.svg" alt="star">
                  4.5
                </div>
                <div class="products-card__descriptions-info--price">
                  От 900 Р
                </div>
                <div class="products-card__descriptions-info--group">
                  Пицца
                </div>
              </div>
            </div>
          </div>
        </router-link>
        <router-link to="goods" class="products-card">
          <div class="products-cars__image">
            <img src="../assets/images/rests/image%20(5).jpg" alt="rest-6">
          </div>
          <div class="products-card__descriptions">
            <div class="products-card__descriptions-row">
              <h4 class="products-card__descriptions--title">PizzaBurger</h4>
              <div class="products-card__descriptions--badge"> 50 min</div>
            </div>
            <div class="products-card__descriptions-row">
              <div class="products-card__descriptions-info">
                <div class="products-card__descriptions-info--raiting">
                  <img src="../assets/images/icons/star.svg" alt="star">
                  4.5
                </div>
                <div class="products-card__descriptions-info--price">
                  От 900 Р
                </div>
                <div class="products-card__descriptions-info--group">
                  Пицца
                </div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>