import { CardConfig } from './card-config';
import { FloorplanElement } from './floorplan-element';

export class FloorplanCard extends FloorplanElement {
  createAndAppendContainer(): HTMLElement {
    const card = document.createElement('ha-card') as HTMLElement;
    (card as any).header = (this._config as CardConfig).title;
    this.shadowRoot!.appendChild(card);

    const container = document.createElement('div');
    container.id = 'container';
    card.appendChild(container);

    return container;
  }

  /*
  getCardSize(): number {
    return 3;
  }
  */
}

if (!customElements.get('floorplan-card')) {
  customElements.define('floorplan-card', FloorplanCard);
}