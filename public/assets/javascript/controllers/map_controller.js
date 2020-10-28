import { Controller } from 'stimulus';
import { Loader } from 'google-maps';

const localPosition = { lat: 19.247233, lng: -103.723681 };

export default class extends Controller{
  static targets = ['mapContainer']

  async initialize() {
    const { googleKey } = document.body.dataset;
    const loader = new Loader(googleKey);
    await loader.load();
    this.initializeMap();
  }

  initializeMap() {
    const mapOptions = { center: localPosition };
    this.map = this.buildMap(this.mapContainerTarget, mapOptions);
    this.marker = this.buildMarker(this.map, localPosition);
  }

  buildMap(container, options) {
    return new google.maps.Map(container, {
      zoom: 16,
      controlSize: 20,
      ...options,
    });
  }

  buildMarker(map, position) {
    return new google.maps.Marker({
      map,
      position,
    });
  }
}
