<script setup>

</script>

<template>
  <div class="cart-modal__overlay">
    <div class="cart-modal">
      <div class="cart-modal__header">
        <h2 class="cart-modal__header--title">Корзина</h2>
        <span class="cart-modal__header--close">
                <img src="../assets/images/icons/close.svg" alt="close">
            </span>
      </div>
      <div class="cart-modal__body">
        <div class="cart-item">
          <p class="cart-item__title">
            Ролл угорь стандарт
          </p>
          <div class="cart-item__controls">
            <div class="cart-item__controls--price">250 Р</div>
            <button class="btn btn-outline">-</button>
            <div class="cart-item__controls--count"></div>
            <button class="btn btn-outline">+</button>

          </div>
        </div>
        <div class="cart-item">
          <p class="cart-item__title">
            Ролл угорь стандарт
          </p>
          <div class="cart-item__controls">
            <div class="cart-item__controls--price">250 Р</div>
            <button class="btn btn-outline">-</button>
            <div class="cart-item__controls--count"></div>
            <button class="btn btn-outline">+</button>

          </div>
        </div>
        <div class="cart-item">
          <p class="cart-item__title">
            Ролл угорь стандарт
          </p>
          <div class="cart-item__controls">
            <div class="cart-item__controls--price">250 Р</div>
            <button class="btn btn-outline">-</button>
            <div class="cart-item__controls--count"></div>
            <button class="btn btn-outline">+</button>

          </div>
        </div>

      </div>

      <div class="cart-modal__footer">
        <div class="cart-modal__footer--price">1250 Р</div>
        <div class="cart-modal__footer--controls">
          <button class="btn btn-primary">Оформить заказ</button>
          <button class="btn btn-outline">Отмена
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<style scoped>

</style>