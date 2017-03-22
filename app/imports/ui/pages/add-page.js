import { Template } from 'meteor/templating';

export const tags = [{ label: 'Jobs' }, { label: 'Events' }, { label: 'Meetups' }, { label: 'Important Notices' }];

Template.Add_Page.helpers({
  getTags() {
    return tags;
  },
});
