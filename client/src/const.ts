/**
 * Design reminder — 항공 라운지 글래스: 화면의 일정 데이터는 조밀하되,
 * 시간·이동·장소의 위계를 일정 카드에서 명확히 분리한다.
 */
export const itinerary = [
  { time: "09:30", type: "사찰", title: "아사쿠사 센소지", note: "아침 인파 전, 골목 산책까지 여유 있게", tag: "추천" },
  { time: "12:10", type: "커피", title: "쿠라마에 로스터리", note: "센소지에서 도보 14분 · 점심 전 휴식", tag: "저장" },
  { time: "16:20", type: "산책", title: "긴자 골목과 갤러리", note: "해 질 무렵 시작하는 실내·실외 조합", tag: "추천" },
];

export const flights = [
  { carrier: "Jin Air", route: "ICN · NRT", price: "₩298,400", meta: "직항 · 2시간 25분", accent: "blue" },
  { carrier: "Asiana", route: "ICN · NRT", price: "₩336,100", meta: "직항 · 수하물 포함", accent: "coral" },
];

