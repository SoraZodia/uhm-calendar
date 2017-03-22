import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

Template.Landing_Page.events({
  'click .login'(event) {
    event.preventDefault();
    FlowRouter.go('Login_Page');
    location.reload();
  },
});

