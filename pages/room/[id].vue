<script setup>
const router = useRouter();
const route = useRoute();

const { data } = await useFetch(
  `https://nuxr3.zeabur.app/api/v1/rooms/${route.params.id}`,
  {
    key: route.params.id, // 以路由參數作為 key
  }
);
// 串接 API 取得房型詳細資料
// API path : https://nuxr3.zeabur.app/api/v1/rooms/{id}
// 將資料渲染至下方的 div.room-page 區塊
</script>

<template>
  <h2>客房詳細頁面</h2>
  <div class="container">
    <button @click="router.go(-1)">回上一頁</button>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="room-page">
          <div class="room-header">
            <h1 class="room-name">{{ data.result.name }}</h1>
            <p class="room-description">
              {{ data.result.description }}
            </p>
          </div>

          <div class="room-gallery">
            <img
              :src="data.result.imageUrl"
              alt="主圖"
              class="room-main-image"
            />
            <div class="room-image-list">
              <img :src="data.result.imageUrlList[0]" alt="圖片2" />
              <img :src="data.result.imageUrlList[1]" alt="圖片3" />
              <img :src="data.result.imageUrlList[2]" alt="圖片4" />
              <img :src="data.result.imageUrlList[3]" alt="圖片5" />
            </div>
          </div>

          <div class="room-info">
            <div class="info-block">
              <h2>房間資訊</h2>
              <p>面積: {{ data.result.areaInfo }}</p>
              <p>床型: {{ data.result.bedInfo }}</p>
              <p>最多容納人數: {{ data.result.maxPeople }}</p>
              <p>價格: {{ data.result.price }}</p>
            </div>

            <div class="info-block">
              <h2>房間配置</h2>
              <ul>
                <li>
                  {{ data.result.layoutInfo[0].title }}:
                  {{ data.result.layoutInfo[0].isProvide ? "提供" : "不提供" }}
                </li>
                <li>
                  獨立衛浴:
                  {{ data.result.layoutInfo[1].isProvide ? "提供" : "不提供" }}
                </li>
                <li>
                  樓層電梯:
                  {{ data.result.layoutInfo[2].isProvide ? "提供" : "不提供" }}
                </li>
              </ul>
            </div>

            <div class="info-block">
              <h2>房內設施</h2>
              <ul>
                <li>
                  平面電視:
                  {{
                    data.result.facilityInfo[0].isProvide ? "提供" : "不提供"
                  }}
                </li>
                <li>
                  吹風機:
                  {{
                    data.result.facilityInfo[1].isProvide ? "提供" : "不提供"
                  }}
                </li>
                <li>
                  冰箱:
                  {{
                    data.result.facilityInfo[2].isProvide ? "提供" : "不提供"
                  }}
                </li>
                <li>
                  熱水壺:
                  {{
                    data.result.facilityInfo[3].isProvide ? "提供" : "不提供"
                  }}
                </li>
                <li>
                  檯燈:
                  {{
                    data.result.facilityInfo[4].isProvide ? "提供" : "不提供"
                  }}
                </li>
                <li>
                  衣櫥:
                  {{
                    data.result.facilityInfo[5].isProvide ? "提供" : "不提供"
                  }}
                </li>
                <li>
                  書桌:
                  {{
                    data.result.facilityInfo[6].isProvide ? "提供" : "不提供"
                  }}
                </li>
              </ul>
            </div>

            <div class="info-block">
              <h2>客房備品</h2>
              <ul>
                <li>
                  衛生紙:
                  {{ data.result.amenityInfo[0].isProvide ? "提供" : "不提供" }}
                </li>
                <li>
                  拖鞋:
                  {{ data.result.amenityInfo[1].isProvide ? "提供" : "不提供" }}
                </li>
                <li>
                  沐浴用品:
                  {{ data.result.amenityInfo[2].isProvide ? "提供" : "不提供" }}
                </li>
                <li>
                  刮鬍刀:
                  {{ data.result.amenityInfo[3].isProvide ? "提供" : "不提供" }}
                </li>
                <li>
                  刷牙用品:
                  {{ data.result.amenityInfo[4].isProvide ? "提供" : "不提供" }}
                </li>
                <li>
                  罐裝水:
                  {{ data.result.amenityInfo[5].isProvide ? "提供" : "不提供" }}
                </li>
                <li>
                  梳子:
                  {{ data.result.amenityInfo[6].isProvide ? "提供" : "不提供" }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.room-page {
  max-width: 1200px;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.room-header {
  text-align: center;
  margin-bottom: 30px;
}

.room-name {
  font-size: 2rem;
  color: #333;
}

.room-description {
  font-size: 1rem;
  color: #666;
}

.room-gallery {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}

.room-main-image {
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;
}

.room-image-list {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.room-image-list img {
  width: 100px;
  height: auto;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s;
}

.room-image-list img:hover {
  transform: scale(1.1);
}

.room-info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.info-block {
  background-color: #f0f0f0;
  padding: 15px;
  border-radius: 10px;
}

.info-block h2 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #444;
}

.info-block p,
.info-block ul {
  font-size: 1rem;
  color: #555;
}

.info-block ul {
  list-style: none;
  padding-left: 0;
}

.info-block ul li {
  margin-bottom: 5px;
}
</style>
