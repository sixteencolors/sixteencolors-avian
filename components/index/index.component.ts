
// Index Component Model

import Vue from "vue"
import Vuetify from "vuetify"

Vue.use(Vuetify)

const Index = new Vue(
    {
        el: "#artpacks",
        data: {
            objects: {},
        },
        created () {

            // Retrieve All Config Objects

            fetch("/artpacks/config/objects.json")
            .then(response => response.json())
            .then(json => {
                this.objects = json.objects
            })
        }
    })
