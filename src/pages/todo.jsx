import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex';

export default defineComponent({
  data() {
    return {

    };
  },
  setup() {
    const store = useStore();
    return {
      count: computed(() => store.state.count)
    }
  },
  render() {
    return (
      <>
        <p> this is todo page</p>
        <p>the count is { this.count }</p>
      </>
    )
  }
});
