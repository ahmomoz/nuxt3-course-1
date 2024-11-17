<script setup></script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/">首頁</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/login">登入</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/register">註冊</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/room">客房列表</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/booking">預約</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/booking/result"
              >預約成功/失敗</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/member/edit"
              >會員 - 修改資料</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/member/orders"
              >會員 - 訂單查詢</NuxtLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <main class="container">
    <slot />
  </main>
</template>

<style scoped></style>
