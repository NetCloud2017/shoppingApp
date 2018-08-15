import  {
  GETHOME,
  GETTEXTILE,
  GETNAVS
} from './mutation-types'
export default {
  [GETHOME](state,{homeData}){
    state.homeData=homeData
  },
  [GETTEXTILE](state,{textile}){
    state.textile=textile
  },
  [GETNAVS](state,{navList}){
    state.navList=navList
  }
}
