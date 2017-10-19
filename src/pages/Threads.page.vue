<template>
  <div>
    <br />
    <div class="container">
      <div class="panel" v-if="threads" v-for="thread in threads">
        <p class="panel-heading">{{thread.title}}</p>
        <div class="message-body">
            {{thread.body}}
        </div>

      </div>
      <paginate
        :page-count="threadsMetaData.total"
        :click-handler="getThreadsData"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :container-class="'pagination-list'" v-if="threadsMetaData.total"
        :page-class="'pagination-link'"
        :active-class="'is-current'"
        :prev-class="'pagination-previous'"
        :next-class="'pagination-next'">
      </paginate>
    </div>

  </div>
</template>
<script>
import axios from 'axios'
export default {
    mounted(){
      this.getThreads();
    },
    methods: {
      getThreads(pageNumber = 1) {
        this.$store.dispatch('getThreads',{pageNumber});
      },
      getThreadsData(page){
        this.getThreads(page)
      }
    },
    computed:{
      threads(){
        return this.$store.getters.threads
      },
      threadsMetaData(){
        return this.$store.getters.threadsMetaData
      }
    }
}
</script>
