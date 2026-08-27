/**
 * Design reminder — 항공 라운지 글래스: 지도는 일정의 배경 레이어이며,
 * 순번 핀과 이동 정보는 고대비 유리 패널로 겹쳐 보여 준다.
 */
import { MapPin, Navigation } from "lucide-react";
import { MapView } from "@/components/Map";

const stops = [
  { title: "아사쿠사 센소지", time: "09:30", lat: 35.7148, lng: 139.7967 },
  { title: "쿠라마에 로스터리", time: "12:10", lat: 35.7071, lng: 139.7902 },
  { title: "긴자 산책", time: "16:20", lat: 35.6717, lng: 139.7650 },
];

export function TripMap() {
  const addPins = (map: google.maps.Map) => {
    stops.forEach((stop, index) => {
      new google.maps.Marker({
        map,
        position: { lat: stop.lat, lng: stop.lng },
        label: { text: String(index + 1), color: "#0B1220", fontWeight: "700" },
        title: stop.title,
      });
    });
  };

  return (
    <section className="map-section" aria-label="도쿄 1일차 지도">
      <div className="map-header">
        <div>
          <span className="section-kicker">DAY 01 · SAT</span>
          <h2>아사쿠사에서 긴자까지</h2>
        </div>
        <span className="map-duration"><Navigation size={14} /> 34분</span>
      </div>
      <div className="map-panel">
        <MapView
          className="trip-map"
          initialCenter={{ lat: 35.6974, lng: 139.781 }}
          initialZoom={12}
          onMapReady={addPins}
        />
        <div className="map-glass-label">
          <span><MapPin size={15} /> 3개의 장소</span>
          <strong>이동을 줄인 동선</strong>
        </div>
      </div>
    </section>
  );
}

