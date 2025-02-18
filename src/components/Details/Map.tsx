import React from "react";
import "maplibre-gl/dist/maplibre-gl.css";
import maplibregl from "maplibre-gl";

interface Props {
  name?: string;
  latitud?: number;
  longitud?: number;
}

function MapContainer({ name, latitud, longitud }: Props) {
  const mapContainerRef = React.useRef<HTMLDivElement>(null);
  const mapRef = React.useRef<maplibregl.Map | null>(null);

  React.useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapRef.current) {
      mapRef.current = new maplibregl.Map({
        container: mapContainerRef.current,
        style: "https://demotiles.maplibre.org/style.json",
        center: [latitud ?? 0, longitud ?? 0],
        zoom: 4,
      });

      // controles de navegacion del mapa
      mapRef.current.addControl(
        new maplibregl.NavigationControl(),
        "top-right"
      );

      // marcador
      const marker = new maplibregl.Marker()
        .setLngLat([latitud ?? 0, longitud ?? 0])
        .addTo(mapRef.current);

      // nombre del marcador
      const popup = new maplibregl.Popup({ offset: 25 }).setHTML(
        `<h3 style='color: #33984a'>${name}</h3>`
      );

      // Asociar el pop-up
      marker.setPopup(popup);
    }

    return () => {
      // Limpiar el mapa anterior
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [latitud, longitud, name]);

  return (
    <div ref={mapContainerRef} style={{ width: "100%", height: "500px" }} />
  );
}

export default MapContainer;
