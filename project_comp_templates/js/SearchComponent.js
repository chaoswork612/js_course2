Vue.component('search-form', {
    props: ['userSearch'],
    template: `<form action="#" method="post" class="search-form" @submit.prevent="$emit('filter')">
                    <input type="text" class="search-field" :value="userSearch"
                    @input="$emit('input', $event.target.value)">
                    <button class="btn-search" type="submit">
                    <i class="fas fa-search"></i>
                    </button>
                </form>`
});
