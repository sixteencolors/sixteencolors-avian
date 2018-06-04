
// Groups Component Model

import Vue from "vue"
import Vuetify from "vuetify"

Vue.use(Vuetify)

const Groups = new Vue(
    {
        el: "#groups",
        data: {
            objects: {},
        },
        created () {

            // Retrieve All Config Objects

            fetch("/groups/config/objects.json")
            .then(response => response.json())
            .then(json => {
                this.objects = json.objects
            })
        }
    })
