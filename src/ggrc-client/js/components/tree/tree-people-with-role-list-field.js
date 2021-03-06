/*
  Copyright (C) 2019 Google Inc.
  Licensed under http://www.apache.org/licenses/LICENSE-2.0 <see LICENSE file>
*/

import {
  peopleWithRoleName,
} from '../../plugins/utils/acl-utils';
import Person from '../../models/business-models/person';

const template = '<tree-field-wrapper source:from="peopleList"' +
' type:from="type" field:from="\'email\'">' +
'<tree-field source:from="items"/></tree-field-wrapper>';

const viewModel = can.Map.extend({
  define: {
    peopleList: {
      get() {
        const instance = this.attr('instance');
        const roleName = this.attr('role');
        return peopleWithRoleName(instance, roleName);
      },
    },
  },
  instance: {},
  role: '',
  type: Person,
});

export default can.Component.extend('treePeopleWithRoleListField', {
  tag: 'tree-people-with-role-list-field',
  view: can.stache(template),
  leakScope: true,
  viewModel,
});
