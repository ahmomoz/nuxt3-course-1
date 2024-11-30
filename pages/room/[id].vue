<script setup>
const router = useRouter();
const route = useRoute();

const { id } = route.params;

const { data: roomList } = await useFetch(`/rooms/${id}`, {
  baseURL: "https://nuxr3.zeabur.app/api/v1",
  transform: (response) => {
    const { result } = response || {};
    return result;
  },
  onResponseError({ response }) {
    const { message } = response._data;
    console.error("Error", message);
    router.push("/");
  },
});

useSeoMeta({
  title: () => `Freyja | ${ roomList.value.name }`,
  description: () => `${ roomList.value.description }`,
  ogTitle: () => `Freyja | ${ roomList.value.name }`,
  ogDescription: () => `${ roomList.value.description }`,
  ogImage: () => `${ roomList.value.imageUrl }`,
  ogUrl: () => `https://freyja.travel.com.tw/room/${ roomList.value.id }`,
  twitterCard: "summary_large_image",
  twitterTitle: () => `Freyja | ${ roomList.value.name }`,
  twitterDescription: () => `${ roomList.value.description }`,
  twitterImage: () => `${ roomList.value.imageUrl }`,
});

</script>

<template>
  <h2>客房詳細頁面</h2>
  <div class="container">
    <button @click="router.go(-1)" class="btn btn-primary">回上一頁</button>
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="room-page">
          <div class="room-header">
            <h1 class="room-name">{{ roomList.name }}</h1>
            <p class="room-description">
              {{ roomList.description }}
            </p>
          </div>

          <div class="room-gallery">
            <img
              :src="roomList.imageUrl"
              :alt="roomList.name"
              class="room-main-image"
            />
            <ul class="room-image-list">
              <li v-for="(imageUrl, index) in roomList.imageUrlList">
                <img
                  :src="imageUrl"
                  :alt="`${roomList.name}圖片${index + 1}`"
                />
              </li>
            </ul>
          </div>

          <div class="room-info">
            <div class="info-block">
              <h2>房間資訊</h2>
              <p>面積: {{ roomList.areaInfo }}</p>
              <p>床型: {{ roomList.bedInfo }}</p>
              <p>最多容納人數: {{ roomList.maxPeople }}</p>
              <p>價格: {{ roomList.price }}</p>
            </div>

            <div class="info-block">
              <h2>房間配置</h2>
              <ul>
                <li v-for="layout in roomList.layoutInfo" :key="layout.title">
                  {{ layout.title }}:
                  {{ layout.isProvide ? "提供" : "不提供" }}
                </li>
              </ul>
            </div>

            <div class="info-block">
              <h2>房內設施</h2>
              <ul>
                <li
                  v-for="facility in roomList.facilityInfo"
                  :key="facility.title"
                >
                  {{ facility.title }}:
                  {{ facility.isProvide ? "提供" : "不提供" }}
                </li>
              </ul>
            </div>

            <div class="info-block">
              <h2>客房備品</h2>
              <ul>
                <li
                  v-for="amenity in roomList.amenityInfo"
                  :key="amenity.title"
                >
                  {{ amenity.title }}:
                  {{ roomList.amenityInfo.isProvide ? "提供" : "不提供" }}
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
