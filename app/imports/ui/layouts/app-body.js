import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

Template.App_Body.onCreated(function appBodyOnCreated() {
  // placeholder: typically you will put global subscriptions here if you remove the autopublish package.
});

Template.App_Body.helpers({
  isNotActive: function isRouteActive(route) {
    return FlowRouter.current().route.name !== route;
  },

});

Template.App_Body.events({
 // placeholder: if you add a form to this top-level layout, handle the associated events here.
});
