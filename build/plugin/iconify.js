import theIcon from '@/components/the-icon/theIcon.vue';

const plugin = {
  install(app) {
    // eslint-disable-next-line vue/multi-word-component-names
    app.component('TheIcon', theIcon);
  },
};

export function createIconify(app) {
  app.use(plugin);
}
