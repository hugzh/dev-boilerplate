import { ref, defineComponent, computed } from 'vue'
import Count from '@/components/Counter.jsx';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

export default defineComponent({
  props: {
    msg: String
  },
  components: {
    'count': Count
  },
  setup(props) {
    const counter = ref(0)
    const { msg } = props;
    const router = useRouter();
    const store = useStore();

    const inc = () => {
      counter.value ++;
      store.commit('increment');
    }
    return {
      counter,
      count: computed(() => store.state.count),
      msg,
      inc,
      router
    }
  },
  methods: {
    nextRouter() {
      this.router.push('/todo');
    }
  },

  render() {
    return (
      <>
        <h1>{this.msg}</h1>
        <p>
          Recommended IDE setup:
          <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
          +
          <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
        </p>
        <p>
            <a href="https://vitejs.dev/guide/features.html" target="_blank">
              Vite Documentation
            </a>
            |
            <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
        </p>
        <button type="button" onClick={this.inc}>count add</button>
        <count count={this.counter} />
        <p> store count is {this.count}</p>

      <p>
        <a href="javascript:;" onClick={this.nextRouter}> Next todo</a>
      </p>
      </>
    )
  }
})
