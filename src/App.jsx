import { defineComponent, KeepAlive, Transition } from 'vue'
import { RouterView } from 'vue-router';
import { keepAliveList } from './routes';
import './App.css';

export default defineComponent({
  data() {
    return {
    };
  },

  watch: {
    $route(to) {
      if (to.meta.title) {
        document.title = to.meta.title;
      }
    }
  },

  render() {
    return (
      <>
        <RouterView v-slots={{ 
          default: ({
              Component,
              route,
            }) => {

              // 在 'include' 屬性中添加要缓存的路由名称
              return (
                  <KeepAlive include={keepAliveList}>
                    <Component />
                  </KeepAlive>
              );
            },
         }}>
         
        </RouterView>
      </>
    )
  }
});
