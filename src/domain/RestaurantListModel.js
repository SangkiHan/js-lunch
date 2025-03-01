import RestaurantModel from "./RestaurantModel.js";

class RestaurantListModel {
  #restaurantsInitData;
  #restaurantsFilterData;

  constructor() {
    this.#initData();
  }

  #initData() {
    const initialData = [
      {
        id: 1,
        category: "한식",
        name: "피양콩할마니",
        time: 10,
        description:
          "평양 출신의 할머니가 수십 년간 운영해온 비지 전문점 피양콩 할마니. 두부를 빼지 않은 되비지를 맛볼 수 있는 곳으로, ‘피양’은 평안도 사투리로 ‘평양’을 의미한다. 딸과 함께 운영하는 이곳에선 맷돌로 직접 간 콩만을 사용하며, 일체의 조미료를 넣지 않은 건강식을 선보인다. 콩비지와 피양 만두가 이곳의 대표 메뉴지만, 할머니가 옛날 방식을 고수하며 만들어내는 비지전골 또한 이 집의 역사를 느낄 수 있는 특별한 메뉴다. 반찬은 손님들이 먹고 싶은 만큼 덜어 먹을 수 있게 준비돼 있다.",
        favorite: false,
      },
      {
        id: 2,
        category: "중식",
        name: "친친",
        time: 5,
        description:
          "Since 2004 편리한 교통과 주차, 그리고 관록만큼 깊은 맛과 정성으로 정통 중식의 세계를 펼쳐갑니다.",
        favorite: false,
      },
      {
        id: 3,
        category: "일식",
        name: "잇쇼우",
        time: 10,
        description:
          "잇쇼우는 정통 자가제면 사누끼 우동이 대표메뉴입니다. 기술은 정성을 이길 수 없다는 신념으로 모든 음식에 최선을 다하는 잇쇼우는 고객 한분 한분께 최선을 다하겠습니다.",
        favorite: false,
      },
      {
        id: 4,
        category: "양식",
        name: "이태리키친",
        time: 20,
        description: "늘 변화를 추구하는 이태리키친입니다.",
        favorite: false,
      },
      {
        id: 5,
        category: "아시안",
        name: "호아빈 삼성점",
        time: 15,
        description: "푸짐한 양에 국물이 일품인 쌀국수.",
        favorite: false,
      },
      {
        id: 6,
        category: "기타",
        name: "도스타코스 선릉점",
        time: 5,
        description: "멕시칸 캐주얼 그릴.",
        favorite: false,
      },
    ];

    this.#restaurantsInitData = initialData.map(
      (data) =>
        new RestaurantModel(
          data.id,
          data.category,
          data.name,
          data.time,
          data.description,
          data.link,
          data.favorite
        )
    );
    this.#initRestaurantsFilterData();
  }

  get restaurants() {
    return this.#restaurantsFilterData;
  }

  get favoriteRestaurants() {
    return this.#restaurantsFilterData.filter(
      (restaurant) => restaurant.favorite
    );
  }

  #initRestaurantsFilterData() {
    this.#restaurantsFilterData = this.#restaurantsInitData;
  }

  filterByCategory(category) {
    this.#initRestaurantsFilterData();
    if (category === "전체") {
      this.#initData;
      return;
    }
    this.#restaurantsFilterData = this.#restaurantsInitData.filter(
      (restaurant) => restaurant.category === category
    );
  }

  sortBy(value) {
    if (value === "name") {
      this.#restaurantsFilterData = [...this.#restaurantsFilterData].sort(
        (a, b) => a.name.localeCompare(b.name)
      );
    } else if (value === "distance") {
      this.#restaurantsFilterData = [...this.#restaurantsFilterData].sort(
        (a, b) => {
          return a.time - b.time;
        }
      );
    }
  }

  addRestaurant(category, name, time, description, link) {
    const maxId =
      this.#restaurantsInitData.length > 0
        ? Math.max(
            ...this.#restaurantsInitData.map((restaurant) => restaurant.id)
          )
        : 0;
    const newId = maxId + 1;
    this.#restaurantsInitData.push(
      new RestaurantModel(maxId, category, name, time, description, link, false)
    );
  }

  changeFavorite(id) {
    const restaurant = this.#restaurantsFilterData.find((restaurant) => {
      return restaurant.id === parseInt(id);
    });

    restaurant.changeFavorite(!restaurant.favorite);
  }

  findById(id) {
    const restaurant = this.#restaurantsFilterData.find((restaurant) => {
      return restaurant.id === parseInt(id);
    });
    return restaurant;
  }

  remove(id) {
    this.#restaurantsInitData = this.#restaurantsInitData.filter(
      (restaurant) => restaurant.id !== parseInt(id)
    );

    this.#restaurantsFilterData = this.#restaurantsInitData;
  }
}

export default RestaurantListModel;
