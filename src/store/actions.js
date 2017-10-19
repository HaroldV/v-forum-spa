import axios from 'axios';

export default {
  getThreads(context, payLoad){
    axios.get('https://v-forum-api.bahdcasts.com/api/threads?page='+payLoad.pageNumber)
         .then( response => {
          // console.log('payLoad:'+payLoad.)
           context.commit('threads', { threads: response.data.data.data } )
           context.commit('threadsMetaData', { threadsMetaData: response.data.data } )
         })
  }
}
