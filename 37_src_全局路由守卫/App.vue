<template>
  <div id="root">
    <div>
      <Banner/>
    </div>
    <div>
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <router-link class="list-group-item" active-class="active" :to="{name:'guanyu'}">About</router-link>
          <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
              <router-view/>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
    import Banner from "@/components/Banner";
    export default {
      name:'App',
      components: {Banner}
    }
</script>

