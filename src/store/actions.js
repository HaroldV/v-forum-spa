import axios from 'axios';

export default {
  getThreads(context, payLoad){
    axios.get('https://v-forum-api.bahdcasts.com/api/threads?page='+payLoad.pageNumber)
         .then( response => {
           context.commit('threads', { threads: response.data.data.data } )
           context.commit('threadsMetaData', { threadsMetaData: response.data.data  } )
         })
  }
}
