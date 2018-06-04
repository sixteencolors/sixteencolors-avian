
// SixteenColors Component Model

import Vue from "vue"
import Vuetify from "vuetify"

Vue.use(Vuetify)

const Header = new Vue(
    {
        el: "#header",
        data: {
            objects: {}
        },
        created () {

            // Retrieve All Config Objects

            fetch("/sixteencolors/config/objects.json")
            .then(response => response.json())
            .then(json => {
                this.objects = json.objects
            })
        }
    })

const Footer = new Vue(
    {
        el: "#footer",
        data: {
            objects: {}
        },
        created () {

            // Retrieve All Config Objects

            fetch("/sixteencolors/config/objects.json")
            .then(response => response.json())
            .then(json => {
                this.objects = json.objects
            })
        }
    })