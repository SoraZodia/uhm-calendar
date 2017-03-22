import { Template } from 'meteor/templating';
import { tags } from './add-page.js';

Template.Edit_Page.helpers({
  getTags() {
    return tags;
  },
});
