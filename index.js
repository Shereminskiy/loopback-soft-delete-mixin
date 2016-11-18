'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _util = require('util');

var _softDelete = require('./soft-delete');

var _softDelete2 = _interopRequireDefault(_softDelete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _util.deprecate)(function (app) {
  return app.loopback.modelBuilder.mixins.define('SoftDelete', _softDelete2.default);
}, 'DEPRECATED: Use mixinSources, see https://github.com/clarkbw/loopback-ds-timestamp-mixin#mixinsources');
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImFwcCIsImxvb3BiYWNrIiwibW9kZWxCdWlsZGVyIiwibWl4aW5zIiwiZGVmaW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7Ozs7O2tCQUVlLHFCQUNiO0FBQUEsU0FBT0EsSUFBSUMsUUFBSixDQUFhQyxZQUFiLENBQTBCQyxNQUExQixDQUFpQ0MsTUFBakMsQ0FBd0MsWUFBeEMsdUJBQVA7QUFBQSxDQURhLEVBRWIsdUdBRmEsQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRlcHJlY2F0ZSB9IGZyb20gJ3V0aWwnO1xuaW1wb3J0IHNvZnRkZWxldGUgZnJvbSAnLi9zb2Z0LWRlbGV0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlcHJlY2F0ZShcbiAgYXBwID0+IGFwcC5sb29wYmFjay5tb2RlbEJ1aWxkZXIubWl4aW5zLmRlZmluZSgnU29mdERlbGV0ZScsIHNvZnRkZWxldGUpLFxuICAnREVQUkVDQVRFRDogVXNlIG1peGluU291cmNlcywgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9jbGFya2J3L2xvb3BiYWNrLWRzLXRpbWVzdGFtcC1taXhpbiNtaXhpbnNvdXJjZXMnXG4pO1xuIl19
