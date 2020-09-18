import axios from "axios";

// Main APIs link.
const apiBaseUrl = process.env.VUE_APP_ENV_API;

export const apiFetcher = {
    data() {
        return {
            values: [],
            details: null,
            releavantApis: [],
            categories: null,
            selectedCategory: null,
            random: null,

        };
    },
    methods: {
        // Get first 10 APIs at Home page.
        getApis(count = 10) {
            axios.get(`${apiBaseUrl}/entries`)
                .then(res => {
                    this.values = res.data.entries.slice(0, count);
                    this.show = true;
                })
                .catch(error =>
                    console.error("Can't get the APIs", error)
                );

        },

        // Get API by its title(API) 
        getDetails(titleID) {
            axios
                .get(`${apiBaseUrl}/entries?title=${encodeURIComponent(titleID)}`)
                .then((response) => {
                    this.details = response.data.entries[0];
                    this.show = true;

                    const category = response.data.entries[0].Category;
                    this.getReleavantApis(category);
                })
        },
        // Get Releavant 3 items of the same category
        getReleavantApis(category, qty = 3) {
            axios
                .get(`${apiBaseUrl}/entries?category=${category}`)
                .then((res) => {
                    this.releavantApis = res.data.entries.slice(0, qty);
                    this.show = true;
                })
                .catch(error =>
                    console.error("Can't get the APIs", error)
                );
        },
        // Get List of all Categories
        getCategories() {
            axios
                .get(`${apiBaseUrl}/categories`)
                .then(res => {

                    this.categories = res.data;
                    this.show = true;
                })
                .catch(error =>
                    console.error("Can't get the Categories", error)
                );
        },
        // Get all items for selected category.
        getSelectedCategory(category) {
            axios
                .get(`${apiBaseUrl}/entries?category=${encodeURIComponent(category)}`)
                .then(res => {

                    this.selectedCategory = res.data.entries;
                    this.show = true;
                })
                .catch(error =>
                    console.error("Can't get the Categories", error)
                );
        },
        //Get Random API
        getRandomApi() {
            axios
                .get(`${apiBaseUrl}/random`)
                .then(res => {

                    this.random = res.data.entries[0];
                    this.show = true;
                })
                .catch(error =>
                    console.error("Can't get the Random API", error)
                );
        },
    }
};