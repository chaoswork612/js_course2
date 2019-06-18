Vue.component('search', {
    props: ['search', 'userSearch'],
    template: `<form action="#" method="post" class="search" @submit.prevent="filter">
                    <input type="text" class="search-field" v-model="userSearch">
                    <button class="btn-search" type="submit">
                    <i class="fas fa-search"></i>
                    </button>
                </form>`
});
