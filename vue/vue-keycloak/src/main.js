import Vue from 'vue'
import App from './App.vue'
import VueLogger from 'vuejs-logger';
import Keycloak from 'keycloak-js'

Vue.config.productionTip = false

const options = {
  isEnabled: true,
  logLevel : Vue.config.productionTip  ? 'error' : 'debug',
  stringifyArguments : false,
  showLogLevel : true,
  showMethodName : true,
  separator: '|',
  showConsoleColors: true
};
Vue.use(VueLogger, options);

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

let initOptions = {
  url: 'http://localhost:8080', realm: 'SpringBootKeycloak', clientId: 'vue-app', onLoad:'login-required'
}

let keycloak = new Keycloak(initOptions);

keycloak.init({ onLoad: initOptions.onLoad, checkLoginIframe: false }).then((auth) =>{
    
    if(!auth) {
      window.location.reload();
    } else {
      Vue.$log.info("Authenticated");
    }
 
    new Vue({
      render: h => h(App),
    }).$mount('#app')
  

    localStorage.setItem("vue-token", keycloak.token);
    localStorage.setItem("vue-refresh-token", keycloak.refreshToken);

    setInterval(() =>{
      keycloak.updateToken(70).then((refreshed)=>{
        if (refreshed) {
          Vue.$log.info('Token refreshed'+ refreshed);
        } else {
          Vue.$log.info('Token not refreshed, valid for '
          + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
        }
      }).catch(()=>{
          Vue.$log.error('Failed to refresh token');
      });
    }, 60000)

}).catch(() =>{
  Vue.$log.error("Authenticated Failed");
});

export default keycloak;