
// Artists Component Model

import Vue from "vue"
import Vuetify from "vuetify"

Vue.use(Vuetify)

const Artists = new Vue(
    {
        el: "#artists",
        data: {
            objects: {},
        },
        created () {

            // Retrieve All Config Objects

            fetch("/artists/config/objects.json")
            .then(response => response.json())
            .then(json => {
                this.objects = json.objects
            })
        }
    })
