import Vue from 'Vue'
import Vuex from 'vuex'
import match from '~/store/match'

Vue.use(Vuex)

export interface Rootstate {
  match: match
}

export default new Vuex.Store<Rootstate>({})
