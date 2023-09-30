import { Icon } from '@iconify/vue';

const plugin = {
  install(app) {
    // eslint-disable-next-line vue/multi-word-component-names
    app.component('Icon', Icon);
  },
};

export function createIconify(app) {
  app.use(plugin);
}
