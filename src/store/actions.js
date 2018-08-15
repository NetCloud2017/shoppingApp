import {GETHOME,GETTEXTILE,GETNAVS} from './mutation-types'
import {reqHome,reqTextile,reqKinds} from '../api'
export default {
  async getHome({commit}) {
    const result = await reqHome()
    const homeData = result.home
    commit(GETHOME,{homeData})

  },
  async getTextile({commit}){
    const result = await reqTextile();
    const textile =result.detail
    commit(GETTEXTILE,{textile})
  },
  async getNav({commit}){
    const result = await reqKinds();
    console.log(result);
    const navList =result.nav.categoryL1List
    commit(GETNAVS,{navList})
  }
}
