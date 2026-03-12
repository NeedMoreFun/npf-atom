import type { Schema, Struct } from '@strapi/strapi';

export interface MenuMainButton extends Struct.ComponentSchema {
  collectionName: 'components_menu_main_buttons';
  info: {
    displayName: 'mainButton';
    icon: 'bold';
  };
  attributes: {
    route: Schema.Attribute.String;
    subButton: Schema.Attribute.Component<'menu.sub-button', true>;
    title: Schema.Attribute.String;
  };
}

export interface MenuMainMenu extends Struct.ComponentSchema {
  collectionName: 'components_menu_main_menus';
  info: {
    displayName: 'mainMenu';
    icon: 'bulletList';
  };
  attributes: {
    mainButton: Schema.Attribute.Component<'menu.main-button', true>;
  };
}

export interface MenuSubButton extends Struct.ComponentSchema {
  collectionName: 'components_menu_sub_buttons';
  info: {
    displayName: 'subButton';
    icon: 'bold';
  };
  attributes: {
    route: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'menu.main-button': MenuMainButton;
      'menu.main-menu': MenuMainMenu;
      'menu.sub-button': MenuSubButton;
    }
  }
}
