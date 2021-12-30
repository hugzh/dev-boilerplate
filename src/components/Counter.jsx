import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        count: Number,
    },
    render() {
        return (
            <p> current page counter is: { this.count } </p>
        );
    }
});
