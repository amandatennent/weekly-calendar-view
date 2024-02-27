import {LitElement, html, css} from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module';

class WeeklyCalendarView extends LitElement {
    constructor() {
        super();
        this.itemsCompleted = [];
    }

    static get properties() {
        return {
            hass: Object,
            config: Object,
        };
    }

    setConfig(config) {
        if (!config.entity) {
            throw new Error('Entity is not set!');
        }

        this.config = config;
    }

    getCardSize() {
        return this.hass ? (this.hass.states[this.config.entity].attributes.items.length || 1) : 1;
    }

    render() {
        let state = this.hass.states[this.config.entity] || undefined;
        if (!state) {
            return html``;
        }

        return html`<ha-card>

        </ha-card>`;
    }

    static get styles() {
        return css`

        `;
    }
}

customElements.define('weekly-calendar-view-card', WeeklyCalendarView);

window.customCards = window.customCards || [];
window.customCards.push({
    preview: true,
    type: 'weekly-calendar-view-card',
    name: 'Weekly Calendar View Card',
    description: 'Custom card for displaying a weekly view from the calendar.',
});
