import Ember from 'ember';

/**
 * Alert Component
 ```html
 ``` 
 */

export default Ember.Component.extend({
	/**
	 * [tagName description]
	 */
	tagName: 'div',
	attributeBindings: ['disabled', 'onClick', 'role'],
	classNames: 'io-alert',
	classNamePrefix: 'io-alert-',
	classNameBindings: ['typeClass', 'visibleClass', 'descriptionClass', 'showIconClass'],
	/**
	 * @attribute type 
	 * @description [description]
	 * @type {String  [warn | error | info | success]}
	 */
	type: 'info',
	/**
	 * @attribute message
	 * @description [alert message text]
	 * @type {String}
	 */
	message: '',
	/**
	 * @attribute description
	 * @description  [detail infomation of alert message]
	 * @type {Object}
	 */
	description: '',
	/**
	 * @attribute  showIcon
	 * @description [is show alert type icon]
	 * @type {Boolean}
	 */
	showIcon: false,
	/**
	 * @attribute onClose 
	 * @description [onClose action]
	 * @type {[type]}
	 */
	onClose: null,
	/**
	 * @attribute closable
	 * @description [is show close button]
	 * @type {Boolean}
	 */
	closable: false,
	/**
	 * @attribute closeText
	 * @description  [close text insteadof icon]
	 */
	closeText: '',
	/**
	 * @state is alert visible
	 * @type {Boolean}
	 */
	_visible: true,
	/**
	 * classNameBindings
	 * @return {[type]} [description]
	 */
	typeClass: function() {
		return this.get('classNamePrefix') + this.get('type');
	}.property('type'),
	visibleClass: function() {
		if (!this.get('_visible')) {
			return this.get('classNamePrefix') + 'hidden';
		} 
		return '';
	}.property('_visible'),
	descriptionClass: function() {
		if (this.get('description') !== '') {
			return this.get('classNamePrefix') + 'with-description';
		} 
		return '';
	}.property('description'),
	showIconClass: function() {
		if (!this.get('showIcon')) {
			return this.get('classNamePrefix') + 'no-icon';
		}
		return '';
	}.property('showIcon'),
	iconTypeClass: function() {
		const type = this.get('type');
		let typeClass = '';
		switch(type) {
			case 'warn':
			case 'error':
				typeClass = 'exclamation-circle';
				break;
			case 'success':
				typeClass = 'check-circle';
				break;
			default: 
				typeClass = 'info-circle';
				break;
		}
		return typeClass;
	}.property('type'),
	/**
	 * [actions description]
	 * @type {Object}
	 */
	actions: {
		close() {
			this.set('_visible', false);
			if (this.get('onClose')) {
				this.sendAction('onClose');
			}
		}
	}
});