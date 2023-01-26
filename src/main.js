import { createApp } from 'vue'
import Buefy from 'buefy'
import App from './App.vue'
import router from './router'

/*
import Axios from 'axios'
import VueProgressBar from 'vue-progressbar'
import { createNewEvent } from '../src/utils/helpers'
Vue.prototype.$http = Axios
*/

import hljs from 'highlight.js'
import ApiView from './components/ApiView'
import CodeView from './components/CodeView'
import VariablesView from './components/VariablesView'
import Example from './components/Example'
import mitt from 'mitt'

import { afterEachGlobal } from 'router/guards'

const app = createApp(App)

router.afterEach(afterEachGlobal(app))

app.use(router)
app.use(Buefy)

app.config.globalProperties.$eventHub = new mitt()

// Vue.use(VueProgressBar, {
//     color: '#7957d5',
//     failedColor: '#ff3860',
//     transition: {
//         speed: '0.2s',
//         opacity: '0.1s'
//     }
// })

app.component('ApiView', ApiView)
app.component('CodeView', CodeView)
app.component('VariablesView', VariablesView)
app.component('Example', Example)

app.directive('highlight', (el, binding) => {
  // On first bind, highlight all targets
  const targets = el.querySelectorAll('code')

  for (const target of targets) {
    // if a value is directly assigned to the directive, use this
    // instead of the element content.
    if (binding.value) {
      target.innerHTML = binding.value
    }
    hljs.highlightElement(target)
  }
})

app.config.globalProperties.$filters = {
  pre(text) {
    if (!text) return

    // Remove first blank line
    text = text.replace(/^\s*[\r\n]/g, '')

    // Find how many whitespaces before the first character of the first line
    const whitespaces = /^[ \t]*./.exec(text).toString().slice(0, -1)

    // Replace first occurrance of whitespace on each line
    let newText = []
    text.split(/\r\n|\r|\n/).forEach((line) => {
      newText.push(line.replace(whitespaces, ''))
    })
    newText = newText.join('\r\n')

    return newText
  }
}

app.mount('#app')
