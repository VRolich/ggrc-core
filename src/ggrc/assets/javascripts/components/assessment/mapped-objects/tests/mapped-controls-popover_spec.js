/*!
 Copyright (C) 2016 Google Inc.
 Licensed under http://www.apache.org/licenses/LICENSE-2.0 <see LICENSE file>
 */

describe('GGRC.Components.mappedControlsPopover', function () {
  'use strict';

  var scope;

  beforeAll(function () {
    var Component = GGRC.Components.get('mappedControlsPopover');
    scope = Component.prototype.scope;
    scope = new can.Map(scope);
  });

  describe('creates params for request', function () {
    beforeEach(function () {
      scope.attr('itemData', {id: 1050});
    });
    it('when itemData.id is 1050', function () {
      var params = scope.getParams();
      var resultParams = [{
        object_name: 'Objective',
        filters: {
          expression: {
            object_name: 'Control',
            op: {
              name: 'relevant'
            },
            ids: ['1050']
          },
          keys: [],
          order_by: {
            keys: [],
            order: '',
            compare: null
          }
        },
        fields: ['id', 'title', 'notes', 'description']
      }, {
        object_name: 'Regulation',
        filters: {
          expression: {
            object_name: 'Control',
            op: {
              name: 'relevant'
            },
            ids: ['1050']
          },
          keys: [],
          order_by: {
            keys: [],
            order: '',
            compare: null
          }
        },
        fields: ['id', 'title', 'notes', 'description']
      }];
      params.data.forEach(function (item, index) {
        expect(item.object_name).toEqual(resultParams[index].object_name);
        expect(item.filters.expression.object_name)
          .toEqual(resultParams[index].filters.expression.object_name);
        expect(item.filters.expression.ids)
          .toEqual(resultParams[index].filters.expression.ids);
        expect(item.fields).toEqual(resultParams[index].fields);
      });
    });
  });

  describe('toggles items', function () {
    beforeEach(function () {
      scope.attr('item', {
        data: {
          id: 1050
        }
      });
    });
    it('when index is missing', function () {
      scope.toggleItems();
      expect(scope.attr('objectives').length).toEqual(0);
      expect(scope.attr('regulations').length).toEqual(0);
    });
  });
});
