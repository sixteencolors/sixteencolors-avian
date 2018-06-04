
// Artpacks Component Model

import Vue from "vue"
import Vuetify from "vuetify"

Vue.use(Vuetify)

const Submittal = new Vue(
    {
        el: "#submittal",
        data: {
            objects: {},
        },
        created () {

            // Retrieve All Config Objects

            fetch("/submittal/config/objects.json")
            .then(response => response.json())
            .then(json => {
                this.objects = json.objects
            })
        }
    })
