import { defineComponent, onMounted } from 'vue'
import HelloWorld from '@/components/HelloWorld.jsx'
import imgUrl from '@/assets/logo.png';

export default defineComponent({
  name: 'home',
  data() {
    return {

    };
  },
  components: {
    'hello-world': HelloWorld
  },
  setup() {
    onMounted(() => {
      console.log('home page onMounted');
    })
  },
  render() {
    return (
      <>
        <img src={imgUrl}/>
        <hello-world></hello-world>
      </>
    )
  }
});
