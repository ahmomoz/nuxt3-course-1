<script setup>
const route = useRoute();
const router = useRouter();
const event = useRequestEvent(); // 獲取當前請求的事件

// 設定404狀態碼  
useRequestEvent(event, 404);
</script>

<template>
  <div class="not-found">
    <h1>404 - 找不到頁面</h1>
    <p>抱歉，您所尋找的 {{ route.params.slug.join('/') }} 頁面不存在。</p>
    <!-- 返回首頁的連結 -->
    <button @click="router.go(-1)">回上一頁</button>
  </div>
</template>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.not-found h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.not-found p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}
</style>