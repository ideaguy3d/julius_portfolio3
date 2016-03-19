/**
 * Created by Julius Hernandez on 1/10/2016.
 */

"use strict";

angular.module('core').service('PracMenuService', [
  function(){
    //defining a set of default roles
    this.defaultRoles = ['*'];
    //defining the menus object
    this.menus = {};

    //will determine whether to render based on user authentication
    var shouldRender = function(user){
      if(user){
        if(!!~this.roles.indexOf('*')){
          return true;
        } else{
          for(var userRoleIndex in user.roles){
            for(var roleIndex in this.roles){
              if(this.roles[roleIndex] === user.roles[userRoleIndex]) {
                return true;
              }
            }
          }
        }
      } else {
        return this.isPublic;
      }

      return false;
    };

    //make sure the menu exists
    this.validateMenuExistence = function(menuId){
      if(menuId && menuId.length){
        if(this.menus[menuId]){
          return true;
        } else{
          throw new Error('jha - Menu does not exist');
        }
      } else{
        throw new Error('jha - menuId does not exist');
      }
    };

    //gets the menu obj by its' id
    this.getMenu = function(menuId){
      //if the menu doesn't exist then an error will be thrown
      this.validateMenuExistence(menuId);

      //return the new menu object
      return this.menus[menuId];
    };

    //add new menu obj by id
    this.addMenu = function(menuId, isPublic, roles){
      this.menus[menuId] = {
        isPublic: isPublic || false,
        roles: roles || this.defaultRoles,
        items: [],
        shouldRender: shouldRender
      };
    };

    //Remove existing menu obj by id
    this.removeMenu = function(menuId){
      //validate that the menu exists
      this.validateMenuExistence(menuId);

      delete this.menus[menuId];
    };

    //Add menu Item object
    this.addMenuItem = function(menuId, menuItemTitle, menuItemURL, menuItemType, menuItemUIRoute, isPublic, roles, position){
      this.validateMenuExistence(menuId);

      this.menus.items.push({
        title: menuItemTitle,
        link: menuItemURL,
        menuItemType: menuItemType || 'item',
        menuItemClass: menuItemType,
        uiRoute: menuItemUIRoute || ('/' + menuItemURL),
        isPublic: ( (isPublic === null || typeof roles === 'undefined') ? this.menus[menusId].isPublic : isPublic ),
        roles: ( (roles === null || typeof roles === 'undefined') ? this.menus[menuId].roles : roles ),
        position: position || 0,
        items: [],
        shouldRender: shouldRender
      });

      return this.menus[menuId];
    };

    this.addSubmenuItem = function(menuId, rootMenuItemURL, menuItemTitle, menuItemURL, menuUIRoute, isPublic, roles, position){
      this.validateMenuExistence(menuId);

      //Search for menu item
      for(var itemIndex in this.menus[menuId].items) {
        if(this.menus[menuId].items[itemIndex].link === rootMenuItemURL){
          //push new sub menu item
          this.menus[menuId].items[itemIndex].items.push({
            title: menuItemTitle,
            link: menuItemURL,
            uiRoute: menuItemUIRoute || ('/'+menuItemURL),
            isPublic: ( (isPublic === null || typeof isPublic === 'undefined') ? this.menus[menuId].items[itemIndex].isPublic : isPublic ),
            roles: ( (roles === null || typeof roles === 'undefined') ? this.menus[menuId].items[itemIndex].roles : roles ),
            position: position || 0,
            shouldRender: shouldRender
          });
        }
      }
      //return the menu object
      return this.menus[menuId];
    };

    this.removeMenuItem = function(menuId, menuItemUrl){
      this.validateMenuExistence(menuId);

      for(var itemIndex in this.menus[menuId].items){
        console.log("itemIndex, ", itemIndex);
        if (this.menus[menuId].items[itemIndex].link === menuItemUrl) {
          this.menus[menuId].items.splice(itemIndex, 1);
        }
      }

      //return the menu item obj
      return this.menus[menuId];
    };

    this.removeSubmenuItem = function(menuId, submenuItemURL){
      this.validateMenuExistence(menuId);

      for(var itemIndex in this.menus[menuId].items) {
        for(var subItemIndex in this.menus[menuId].items[itemIndex].items) {
          if(this.menus[menuId].items[itemIndex].items[subItemIndex].link === submenuItemURL) {
            this.menus[menuId].items[itemIndex].items.splice(subItemIndex, 1);
          }
        }
      }
    };

    //add the default 'main-nav' menu
    this.addMenu('main-nav');
  }]);
