describe("Header 테스트", () => {
  beforeEach(() => {
      cy.visit("http://localhost:5173/");
  });

  it("Header 떴는지 확인", () => {
      cy.get(".gnb").should("exist");
      cy.get(".gnb__title.text-title").should("contain", "점심 뭐 먹지")
  });
});

describe("음식점 리스트 테스트", () => {
  beforeEach(() => {
      cy.visit("http://localhost:5173/");
  });

  it("피양콩 할머니 렌더링 확인", () => {
      cy.get(".restaurant").should("exist");
      cy.get(".restaurant__name.text-subtitle").should("contain", "피양콩할마니");
  });

  it("한식 선택 시 필터링 확인", () => {
      cy.get("#category-filter").select("한식");
      cy.get(".restaurant__name.text-subtitle").should("contain", "피양콩할마니");
  });

  it("일식 선택 시 필터링 확인", () => {
      cy.get("#category-filter").select("일식");
      cy.get(".restaurant__name.text-subtitle").should("contain", "잇쇼우");
  });

  it("중식 선택 시 필터링 확인", () => {
      cy.get("#category-filter").select("중식");
      cy.get(".restaurant__name.text-subtitle").should("contain", "친친");
  });

  it("양식 선택 시 필터링 확인", () => {
      cy.get("#category-filter").select("양식");
      cy.get(".restaurant__name.text-subtitle").should("contain", "이태리키친");
  });

  it("기타 선택 시 필터링 확인", () => {
      cy.get("#category-filter").select("기타");
      cy.get(".restaurant__name.text-subtitle").should("contain", "도스타코스 선릉점");
  });

  it("거리순 선택 시 필터링 확인", () => {
      cy.get("#category-filter").select("전체");
      cy.get("#sorting-filter").select("거리순");

      cy.get(".restaurant").eq(0).find(".restaurant__name.text-subtitle").should("contain", "도스타코스 선릉점");
      cy.get(".restaurant").eq(1).find(".restaurant__name.text-subtitle").should("contain", "친친");
      cy.get(".restaurant").eq(2).find(".restaurant__name.text-subtitle").should("contain", "잇쇼우");
      cy.get(".restaurant").eq(3).find(".restaurant__name.text-subtitle").should("contain", "피양콩할마니");
      cy.get(".restaurant").eq(4).find(".restaurant__name.text-subtitle").should("contain", "호아빈 삼성점");
      cy.get(".restaurant").eq(5).find(".restaurant__name.text-subtitle").should("contain", "이태리키친");
  });

  it("이름순 선택 시 필터링 확인", () => {
    cy.get("#category-filter").select("전체");
    cy.get("#sorting-filter").select("거리순"); //change가 일어나야 하기 때문에 바꿔줌
    cy.get("#sorting-filter").select("이름순");

    cy.get(".restaurant").eq(0).find(".restaurant__name.text-subtitle").should("contain", "도스타코스 선릉점");
    cy.get(".restaurant").eq(1).find(".restaurant__name.text-subtitle").should("contain", "이태리키친");
    cy.get(".restaurant").eq(2).find(".restaurant__name.text-subtitle").should("contain", "잇쇼우");
    cy.get(".restaurant").eq(3).find(".restaurant__name.text-subtitle").should("contain", "친친");
    cy.get(".restaurant").eq(4).find(".restaurant__name.text-subtitle").should("contain", "피양콩할마니");
    cy.get(".restaurant").eq(5).find(".restaurant__name.text-subtitle").should("contain", "호아빈 삼성점");
});
});