angular.module('cityApp',[])
  .controller('cityController',function(){
    var cityList = this;
    cityList.cities = [{ name:'苏州',spell:'suzhou'},{ name:'上海',spell:'shanghai'},{ name:'北京',spell:'beijing'},{ name:'广州',spell:'guangzhou'}];
  })